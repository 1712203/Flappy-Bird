#include "AssetUpdate.h"
#include "baseframework/BaseFramework.h"
#include "Localization.h"
#include "network/HttpClient.h"
#include "json/document.h"
USING_NS_CC_EXT;
USING_NS_CC;
using namespace network;
const char *manifestPath = "project.dat";
const int TIME_OUT = 10;

AssetUpdate::AssetUpdate() : _actionTimeOut(NULL)
{
    resetDownloadProcess();
    _am = NULL;
    _updateRetry = 0;
}
void AssetUpdate::resetDownloadProcess()
{
    cocos2d::log("[AssetUpdate] <resetDownloadProcess>");
    curPercent = 0;
    _currentProcess.fileIndex = 0;
    _currentProcess.process = 0;
    _nextProcess.fileIndex = 0;
    _nextProcess.process = 0;

    isFinishUpdate = false;
}
void AssetUpdate::startUpdate()
{
    cocos2d::log("[AssetUpdate] <startUpdate>");
    resetDownloadProcess();
    //Uu tien tai tu storagePath
    std::string storagePath = fr::NativeService::getFolderUpdateAssets();
    _am = AssetsManagerEx::create(manifestPath, storagePath);
    _am->retain();
    //timeout
    if (_actionTimeOut)
    {
        this->stopAction(_actionTimeOut);
    }
    _actionTimeOut = Sequence::create(DelayTime::create(TIME_OUT),
                                      CallFunc::create([this]() {
                                          _actionTimeOut = NULL;
                                          this->_updateRetry++;
                                          if (_am)
                                          {
                                              _am->release();
                                              _am = NULL;
                                          }
                                          if (this->_updateRetry >= 2)
                                          {
                                              onUpdateError(Localization::text("lang_update_failed") + ": Timeout!");
                                          }
                                          else
                                          {
                                              this->startUpdate();
                                          }
                                      }),
                                      nullptr);
    this->runAction(_actionTimeOut);
    //local manifest is loaded?
    if (!_am->getLocalManifest()->isLoaded())
    {
        if (_actionTimeOut)
        {
            this->stopAction(_actionTimeOut);
            _actionTimeOut = NULL;
        }
        cocos2d::log("[AssetUpdate] <startUpdate> Fail to update assets, step skipped.");
        onUpdateError(Localization::text("lang_local_manifest_file_found"));
    }
    else
    {
        std::string version = _am->getLocalManifest()->getVersion();
        fr::FrameworkDelegate::getInstance()->setJSVersion(version);

        _amListener = cocos2d::extension::EventListenerAssetsManagerEx::create(_am, [this](EventAssetsManagerEx *event) {
            if (_actionTimeOut)
            {
                this->stopAction(_actionTimeOut);
                _actionTimeOut = NULL;
            }
            static int failCount = 0;
            switch (event->getEventCode())
            {
            case EventAssetsManagerEx::EventCode::ERROR_NO_LOCAL_MANIFEST:
            {
                cocos2d::log("[AssetUpdate] <ERROR_NO_LOCAL_MANIFEST> No local manifest file found, skip assets update.");
                onUpdateError(Localization::text("lang_local_manifest_file_found"));
            }
            break;
            case EventAssetsManagerEx::EventCode::UPDATE_PROGRESSION:
            {
                cocos2d::log("[AssetUpdate] <UPDATE_PROGRESSION>");
                std::string assetId = event->getAssetId();
                if (assetId == AssetsManagerEx::VERSION_ID)
                {
                }
                else if (assetId == AssetsManagerEx::MANIFEST_ID)
                {
                }
                else
                {
                    float downloadFileProgress = event->getPercent();
                    int fileDownloaded = event->getCountOfFileDownloaded();

                    if (_currentProcess.fileIndex != fileDownloaded)
                    {
                        if (_currentProcess.fileIndex == 0)
                        {
                            _currentProcess.fileIndex = fileDownloaded;
                            if (downloadFileProgress > _currentProcess.process)
                            {
                                _currentProcess.process = downloadFileProgress;
                            }
                        }
                        else
                        {
                            _currentProcess.process = 100;
                        }
                    }
                    else
                    {
                        if (downloadFileProgress > _currentProcess.process)
                        {
                            _currentProcess.process = downloadFileProgress;
                        }
                    }
                    _nextProcess.fileIndex = fileDownloaded;
                    _nextProcess.process = downloadFileProgress;

                    onProcess(downloadFileProgress, fileDownloaded, _am->getTotalToDownload());
                }
            }
            break;
            case EventAssetsManagerEx::EventCode::ERROR_DOWNLOAD_MANIFEST:
            {
                cocos2d::log("[AssetUpdate] <ERROR_DOWNLOAD_MANIFEST>");
                onUpdateError(Localization::text("lang_error_download_manifest"));
            }
            break;
            case EventAssetsManagerEx::EventCode::ERROR_PARSE_MANIFEST:
            {
                cocos2d::log("[AssetUpdate] <ERROR_PARSE_MANIFEST>");
                onUpdateError(Localization::text("lang_error_parse_manifest"));
            }
            break;
            case EventAssetsManagerEx::EventCode::ALREADY_UP_TO_DATE:
            {
                cocos2d::log("[AssetUpdate] <ALREADY_UP_TO_DATE> Already up to date");
                _currentProcess.process = 0;
                _nextProcess.process = 0;
                this->onUpdateFinish();
            }
            break;
            case EventAssetsManagerEx::EventCode::UPDATE_FINISHED:
            {
                cocos2d::log("[AssetUpdate] <UPDATE_FINISHED> Update finished. %s", event->getMessage().c_str());
                _currentProcess.process = 100;
                _nextProcess.process = 100;
                std::string version = _am->getLocalManifest()->getVersion();
                fr::FrameworkDelegate::getInstance()->setJSVersion(version);

                this->onUpdateFinish();
            }
            break;
            case EventAssetsManagerEx::EventCode::UPDATE_FAILED:
            {
                cocos2d::log("[AssetUpdate] <UPDATE_FAILED> Update failed. %s", event->getMessage().c_str());

                failCount++;
                if (failCount < 5)
                {
                    _am->downloadFailedAssets();
                }
                else
                {
                    cocos2d::log("[AssetUpdate] <UPDATE_FAILED> Reach maximum fail count, exit update process.");
                    failCount = 0;
                    onUpdateError(Localization::text("lang_update_failed"));
                }
            }
            break;
            case EventAssetsManagerEx::EventCode::ERROR_LOST_CONNECTION:
            {
                cocos2d::log("[AssetUpdate] <ERROR_LOST_CONNECTION> Lost connection.");
                onUpdateError(Localization::text("play_offline"));
            }
            break;
            case EventAssetsManagerEx::EventCode::ERROR_UPDATING:
            {
                cocos2d::log("[AssetUpdate] <ERROR_UPDATING> %s : %s", event->getAssetId().c_str(), event->getMessage().c_str());
            }
            break;
            case EventAssetsManagerEx::EventCode::ERROR_DECOMPRESS:
            {
                cocos2d::log("[AssetUpdate] <ERROR_DECOMPRESS> %s", event->getMessage().c_str());
            }
            break;
            default:
                break;
            }
        });
        Director::getInstance()->getEventDispatcher()->addEventListenerWithFixedPriority(_amListener, 1);

        _am->update();
    }
}

void AssetUpdate::finishUpdate()
{
    cocos2d::log("[AssetUpdate] <finishUpdate>");
    isFinishUpdate = true;
    _eventDispatcher->removeEventListener(_amListener);
    if (_am)
    {
        _am->release();
        _am = NULL;
    }
}

void AssetUpdate::startCheckGameConfig()
{
    std::string url = "http://" + Localization::text("url_info");
    log("[AssetUpdate] <startCheckGameConfig> %s", url.c_str());
    cRequest = new HttpRequest();
    cRequest->setUrl(url.c_str());
    cRequest->setRequestType(HttpRequest::Type::GET);
    cRequest->setResponseCallback(
        [this](HttpClient *client, HttpResponse *response) {
            if (!response)
            {
                this->onCheckForceUpdateFinish();
                return;
            }
            long statusCode = response->getResponseCode();
            if (!response->isSucceed() || statusCode == 404)
            {
                log("response failed");
                log("error buffer: %s", response->getErrorBuffer());
                this->onCheckForceUpdateFinish();
                return;
            }
            std::vector<char> *buffer = response->getResponseData();
            std::string str = std::string(buffer->begin(), buffer->end());
            this->processUpdateResult(str);
        });
    HttpClient::getInstance()->setTimeoutForConnect(5);
    HttpClient::getInstance()->setTimeoutForRead(5);
    HttpClient::getInstance()->send(cRequest);
}

void AssetUpdate::processUpdateResult(const std::string &data)
{
    cocos2d::log("[AssetUpdate] <processUpdateResult> %s", data.c_str());
    rapidjson::GenericDocument<rapidjson::UTF8<>, rapidjson::CrtAllocator> doc;
    //rapidjson::Document doc;
    doc.Parse<0>(data.c_str());
    if (!doc.HasParseError())
    {
        //init GSN tracking
        std::string countryCode = "";
        if (doc.HasMember("country"))
        {
            countryCode = doc["country"].GetString();
        }

        fr::NativeService::initGSNTracker("carrom", "", "", countryCode);
        fr::NativeService::logLoadStart();
    }
    onCheckForceUpdateFinish();
}

void AssetUpdate::exitGame()
{
    cocos2d::log("[AssetUpdate] <exitGame>");
    cocos2d::Director::getInstance()->end();
#if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
    exit(0);
#endif
}