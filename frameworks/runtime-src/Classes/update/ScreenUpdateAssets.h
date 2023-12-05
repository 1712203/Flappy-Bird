#ifndef ScreenUpdateAssets_h__
#define ScreenUpdateAssets_h__

#include "cocos2d.h"
#include "extensions/cocos-ext.h"
#include "ui/CocosGUI.h"
#include "AssetUpdate.h"

#include "cocostudio/CocoStudio.h"
class ScreenUpdateAssets:
    public AssetUpdate
{
    
public:
    ScreenUpdateAssets();
    ~ScreenUpdateAssets();
    CREATE_FUNC(ScreenUpdateAssets);
    bool init();

private:
    void initUI();

    void start();
    void startGame(float dt = 0);

    void updateFinish();
    void onUpdateError(const std::string& err);
    void onProcess(float downloadProgress, int fileDownloaded, int totalToDownload);

    virtual void onCheckForceUpdateFinish();
    virtual void onRequireUpdateClient(const std::string& url);
    void update(float delta);
private:
    std::string storeUrl;
    long long _timeStart;
    cocos2d::LayerColor* _whiteLayer;
    cocos2d::Sprite* _spriteLogo;

    cocos2d::LayerColor* _loadingLayer;
    cocos2d::ui::ImageView* _imgBgr;
    cocos2d::ui::ImageView* _imgBar;


    cocos2d::ui::Text* _txtHint;
    cocos2d::ui::LoadingBar* _loadingBar;
    cocos2d::ui::Text* _txtLoading;
};


#endif // ScreenUpdateAssets_h__