#ifndef AssetUpdate_h__
#define AssetUpdate_h__

#include "cocos2d.h"
#include "extensions/cocos-ext.h"
#include "network/HttpRequest.h"

struct DownloadProccess{
    int process;
    int fileIndex;
};
class AssetUpdate:
    public cocos2d::Layer
{
public:
    AssetUpdate();
    void startUpdate();
    void startCheckGameConfig();
protected:
    virtual void onUpdateFinish(){ this->finishUpdate(); };
    virtual void onUpdateError(const std::string& err){ this->finishUpdate(); isFinishUpdate = false; };
    virtual void onProcess(float currentFileProgress, int fileDownloaded, int totalToDownload){};
    //check force updateApk
    virtual void onCheckForceUpdateFinish(){};
    virtual void onRequireUpdateClient(const std::string& url){};

    cocos2d::extension::AssetsManagerEx* _am;
    cocos2d::extension::EventListenerAssetsManagerEx* _amListener;
    void updateTimeout();
    void exitGame();

    float curPercent;
    bool isFinishUpdate;
    DownloadProccess _currentProcess;
    DownloadProccess _nextProcess;
private:
    void finishUpdate();
    void processUpdateResult(const std::string& data);
    void resetDownloadProcess();
    cocos2d::Action* _actionTimeOut;
    int _updateRetry;
    cocos2d::network::HttpRequest *cRequest;
};
#endif // AssetUpdate_h__
