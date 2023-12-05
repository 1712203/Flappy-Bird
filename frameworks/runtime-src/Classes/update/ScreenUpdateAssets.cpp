#include "ScreenUpdateAssets.h"
#include "AppDelegate.h"
#if (CC_TARGET_PLATFORM != CC_PLATFORM_LINUX)
#include "ide-support/CodeIDESupport.h"
#endif
#if (COCOS2D_DEBUG > 0) && (CC_CODE_IDE_DEBUG_SUPPORT > 0)
#include "runtime/Runtime.h"
#include "ide-support/RuntimeJsImpl.h"
#else
#include "js_module_register.h"
#endif
#if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS || CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID || CC_TARGET_PLATFORM == CC_PLATFORM_WINRT)
#include "plugin/protocols/include/PluginManager.h"
using namespace cocos2d::plugin;
#endif
#include "PopupDialog.h"
#include "Localization.h"
#include <sstream>
#include "baseframework/BaseFramework.h"

USING_NS_CC;
USING_NS_CC_EXT;
using namespace cocos2d::ui;

static void scaleSpriteToFull(Node *node, Size size)
{
    if (!node) return;
    Size contentSize = node->getContentSize();
    float scaleX = size.width / contentSize.width;
    float scaleY = size.height / contentSize.height;
    float scale = scaleX > scaleY ? scaleX : scaleY;
    node->setScale(scale);
}

ScreenUpdateAssets::ScreenUpdateAssets()
{
}

ScreenUpdateAssets::~ScreenUpdateAssets()
{
}

bool ScreenUpdateAssets::init()
{
    Layer::init();
    Localization::getInstance();
    fr::FrameworkDelegate::getInstance()->setConfig("gameVersion", "1");

    this->initUI();

    cocos2d::Device::setKeepScreenOn(true);
    return true;
}

void ScreenUpdateAssets::initUI()
{
    cocos2d::Director::getInstance()->getTextureCache()->addImage("res/sprite-sheets/Basics.png");
    cocos2d::SpriteFrameCache::getInstance()->addSpriteFramesWithFile("res/sprite-sheets/Basics.plist");

    auto size = Director::getInstance()->getVisibleSize();

    cocos2d::log("_whiteLayer");
    _whiteLayer = LayerColor::create(cocos2d::Color4B(242, 242, 242, 255));
    this->addChild(_whiteLayer);
    cocos2d::log("////////////////////_whiteLayer");

    cocos2d::log("_skeletonNode");
    auto _skeletonNode = spine::SkeletonAnimation::createWithJsonFile("res/spines/splash-screen/zp_ident.json", "res/spines/splash-screen/zp_ident.atlas", 1.2f);
    _whiteLayer->addChild(_skeletonNode);
    _skeletonNode->setPosition(size.width * 0.5f, size.height * 0.7f);

    _skeletonNode->setAnimation(0, "run", false);
    _skeletonNode->setCompleteListener([this](spine::TrackEntry* entry) {
        _whiteLayer->setVisible(false);
        _loadingLayer->setVisible(true);
        _loadingLayer->setOpacity(0);
        _loadingLayer->runAction(FadeIn::create(0.25f));
        this->start();
    });
    cocos2d::log("////////////////////_skeletonNode");

    cocos2d::log("_loadingLayer");
    _loadingLayer = LayerColor::create(cocos2d::Color4B(255, 255, 255, 255));
    this->addChild(_loadingLayer);
    _loadingLayer->setOpacity(0);
    _loadingLayer->setVisible(false);
    cocos2d::log("////////////_loadingLayer");

    _imgBgr = ImageView::create();
    _loadingLayer->addChild(_imgBgr);
    _imgBgr->setPosition(Vec2(size.width * 0.5f, size.height * 0.5f));
    _imgBgr->loadTexture("res/sprites/backgrounds/Loading.png", cocos2d::ui::Widget::TextureResType::LOCAL);
    _imgBgr->setUnifySizeEnabled(false);
    _imgBgr->ignoreContentAdaptWithSize(false);
    _imgBgr->setContentSize(size);

    cocos2d::log("_txtHint");
    _txtHint = cocos2d::ui::Text::create();
    _loadingLayer->addChild(_txtHint);
    _txtHint->setFontName("res/fonts/BebasNeueProBold.ttf");
    _txtHint->setFontSize(30);
    _txtHint->setTextHorizontalAlignment(TextHAlignment::CENTER);
    _txtHint->setTextVerticalAlignment(TextVAlignment::CENTER);
    _txtHint->enableOutline(cocos2d::Color4B(0, 0, 0, 255), 2);
    _txtHint->setAnchorPoint(Vec2(0.5f, 0.5f));
    _txtHint->setPosition(Vec2(size.width * 0.5f, size.height * 0.0557f));
    cocos2d::log("/////////////_txtHint");

    _imgBar = ImageView::create();
    _loadingLayer->addChild(_imgBar);
    _imgBar->setCascadeOpacityEnabled(true);
    _imgBar->setCascadeColorEnabled(true);
    _imgBar->setAnchorPoint(Vec2(0.5f, 0.5f));
    _imgBar->setPosition(Vec2(size.width * 0.5f, size.height * 0.0202f));
    _imgBar->loadTexture("res/sprites/basics/LoadingBar_01.png", cocos2d::ui::Widget::TextureResType::LOCAL);

    cocos2d::log("_loadingBar");
    _loadingBar = cocos2d::ui::LoadingBar::create();
    _loadingBar->loadTexture("res/sprites/basics/LoadingBar_02.png", cocos2d::ui::Widget::TextureResType::LOCAL);
    _imgBar->addChild(_loadingBar);
    _loadingBar->setAnchorPoint(Vec2(0.5f, 0.5f));
    auto _imgBarSize = _imgBar->getContentSize();
    _loadingBar->setPosition(Vec2(_imgBarSize.width * 0.5f, _imgBarSize.height * 0.5f));
    _loadingBar->setPercent(0);
    cocos2d::log("/////////////_loadingBar");

    cocos2d::log("_txtLoading");
    _txtLoading = cocos2d::ui::Text::create();
    _imgBar->addChild(_txtLoading);
    _txtLoading->setFontName("res/fonts/BebasNeueProBold.ttf");
    _txtLoading->setFontSize(20);
    _txtLoading->setTextHorizontalAlignment(TextHAlignment::CENTER);
    _txtLoading->setTextVerticalAlignment(TextVAlignment::CENTER);
    _txtLoading->setAnchorPoint(Vec2(0.5, 0.5));
    _txtLoading->enableOutline(cocos2d::Color4B(0, 0, 0, 255), 2);
    _txtLoading->setPosition(Vec2(_imgBarSize.width * 0.5f, _imgBarSize.height * 0.5f));
    cocos2d::log("/////////////////////_txtLoading");

    _loadingLayer->setVisible(false);
    _whiteLayer->setVisible(true);

    _txtHint->runAction(RepeatForever::create(Sequence::create(
        CallFunc::create([&](){
            _txtHint->setString("Updating.");
        }),
        DelayTime::create(0.3),
        CallFunc::create([&](){
            _txtHint->setString("Updating..");
        }),
        DelayTime::create(0.3),
        CallFunc::create([&](){
            _txtHint->setString("Updating...");
        }),
        DelayTime::create(0.3),
        NULL
    )));
}

void ScreenUpdateAssets::start()
{
    cocos2d::log("[ScreenUpdateAssets] <start>");
    startCheckGameConfig();
    this->scheduleUpdate();
    _timeStart = utils::getTimeInMilliseconds();
}

void ScreenUpdateAssets::startGame(float dt)
{
    cocos2d::log("[ScreenUpdateAssets] <startGame>");
#if (COCOS2D_DEBUG > 0) && (CC_CODE_IDE_DEBUG_SUPPORT > 0)
#else
    js_module_register();
    ScriptingCore *sc = ScriptingCore::getInstance();
    sc->start();
    sc->runScript("script/jsb_boot.js");
#if defined(COCOS2D_DEBUG) && (COCOS2D_DEBUG > 0)
    sc->enableDebugger();
#endif
    ScriptEngineProtocol *engine = ScriptingCore::getInstance();
    ScriptEngineManager::getInstance()->setScriptEngine(engine);
    ScriptingCore::getInstance()->runScript("main.js");
#endif
}

void ScreenUpdateAssets::updateFinish()
{
    cocos2d::log("[ScreenUpdateAssets] <updateFinish>");
    this->isFinishUpdate = false;
    fr::FrameworkDelegate::getInstance()->setConfig("updateResult", "0");
    this->scheduleOnce(CC_SCHEDULE_SELECTOR(ScreenUpdateAssets::startGame), 0.0f);
}

void ScreenUpdateAssets::onUpdateError(const std::string &err)
{
    cocos2d::log("[ScreenUpdateAssets] <onUpdateError> %s", err.c_str());
    AssetUpdate::onUpdateError(err);
    fr::FrameworkDelegate::getInstance()->setConfig("updateResult", "1");
    this->startGame();
}
void ScreenUpdateAssets::update(float delta)
{
    if (this->_currentProcess.process >= 100)
    {
        this->curPercent += delta * 150;
    }
    else
    {
        this->curPercent += delta * 80;
    }
    if (this->curPercent >= this->_currentProcess.process)
    {
        this->curPercent = this->_currentProcess.process;
        if (this->isFinishUpdate)
        {
            this->updateFinish();
        }
    }
    if (this->curPercent == 100)
    {
        if (this->_currentProcess.fileIndex != this->_nextProcess.fileIndex || this->_nextProcess.process < 100)
        {
            this->_currentProcess.process = this->_nextProcess.process;
            this->_currentProcess.fileIndex = this->_nextProcess.fileIndex;
            this->curPercent = 0;
        }
    }
    if (_loadingBar)
    {
        _loadingBar->setPercent(this->curPercent);
    }
}
void ScreenUpdateAssets::onProcess(float downloadProgress, int fileDownloaded, int totalToDownload)
{
    cocos2d::log("[ScreenUpdateAssets] <onProcess> %.2f %d %d", downloadProgress, fileDownloaded, totalToDownload);
    char buff[100];
    int n = sprintf(buff, "%d/%d", fileDownloaded, totalToDownload);
    std::string textStatus = std::string(buff, n);
    cocos2d::log("[ScreenUpdateAssets] <onProcess> textStatus: %s", textStatus.c_str());
    if (_txtLoading)
    {
        _txtLoading->setString(textStatus);
    }
}

void ScreenUpdateAssets::onCheckForceUpdateFinish()
{
    cocos2d::log("[ScreenUpdateAssets] <onCheckForceUpdateFinish>");
    float timeDelay = 0;
    long long currentTime = utils::getTimeInMilliseconds();
    if (currentTime - _timeStart > 1000)
    {
        timeDelay = 0;
    }
    else
    {
        timeDelay = 1 - (currentTime - _timeStart) / 1000.0f;
    }
    this->scheduleOnce([&](float dt) {
        this->startUpdate();
    },
                       timeDelay, "start_update");
}

void ScreenUpdateAssets::onRequireUpdateClient(const std::string &url)
{
    cocos2d::log("[ScreenUpdateAssets] <onRequireUpdateClient> %s", url.c_str());
    storeUrl = url;
    this->onCheckForceUpdateFinish();
}