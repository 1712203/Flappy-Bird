#include "AppDelegate.h"
#include "SimpleAudioEngine.h"
#include "update/ScreenUpdateAssets.h"
#include "baseframework/BaseFramework.h"

#if (CC_TARGET_PLATFORM != CC_PLATFORM_LINUX)
#include "ide-support/CodeIDESupport.h"
#endif

#if (COCOS2D_DEBUG > 0) && (CC_CODE_IDE_DEBUG_SUPPORT > 0)
#include "runtime/Runtime.h"
#include "ide-support/RuntimeJsImpl.h"
#else
#endif

USING_NS_CC;
using namespace CocosDenshion;

AppDelegate::AppDelegate()
{
	// set key for decryption
	FileUtils::setEncryptKeyPart(0, 0xeeeeeeee);
	FileUtils::setEncryptKeyPart(1, 0xffffffff);
	FileUtils::setEncryptKeyPart(2, 0xaaaaaaaa);
	FileUtils::setEncryptKeyPart(3, 0xdddddddd);
	
}

AppDelegate::~AppDelegate()
{
	SimpleAudioEngine::end();
    ScriptEngineManager::destroyInstance();
    
#if (COCOS2D_DEBUG > 0) && (CC_CODE_IDE_DEBUG_SUPPORT > 0)
    // NOTE:Please don't remove this call if you want to debug with Cocos Code IDE
    RuntimeEngine::getInstance()->end();
#endif
}

//if you want a different context,just modify the value of glContextAttrs
//it will takes effect on all platforms
void AppDelegate::initGLContextAttrs()
{
    //set OpenGL context attributions,now can only set six attributions:
    //red,green,blue,alpha,depth,stencil
    GLContextAttrs glContextAttrs = {8, 8, 8, 8, 24, 8};

    GLView::setGLContextAttrs(glContextAttrs);
}

bool AppDelegate::applicationDidFinishLaunching()
{
	fr::FrameworkDelegate::getInstance()->applicationDidFinishLaunching();
	fr::FrameworkDelegate::getInstance()->setFolderAssets("bidazingplay");
	
    // initialize director
    auto director = Director::getInstance();

    // set FPS. the default value is 1.0/60 if you don't call this
    director->setAnimationInterval(1.0 / 60);

	FileUtils::getInstance()->addSearchPath("res");
#if (COCOS2D_DEBUG > 0) && (CC_CODE_IDE_DEBUG_SUPPORT > 0)


#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
    // for getIPAddress
    extern void setFrameworkActivityPathForAndroid(const std::string &path);
    setFrameworkActivityPathForAndroid("com/gsn/baseframework/FrameworkActivity");
#endif
	//add path for debug on win32
	
    auto runtimeEngine = RuntimeEngine::getInstance();
    auto jsRuntime = RuntimeJsImpl::create();
    runtimeEngine->addRuntime(jsRuntime, kRuntimeEngineJs);
    runtimeEngine->start();
    
    // js need special debug port
    if (runtimeEngine->getProjectConfig().getDebuggerType() != kCCRuntimeDebuggerNone)
    {
        jsRuntime->startWithDebugger();
    }


#else
	auto glview = director->getOpenGLView();
	if (!glview) {
#if(CC_TARGET_PLATFORM == CC_PLATFORM_WP8) || (CC_TARGET_PLATFORM == CC_PLATFORM_WINRT)
		glview = cocos2d::GLViewImpl::create("GameClientJS");
#else
		//glview = cocos2d::GLViewImpl::createWithRect("GameClientJS", Rect(0, 0, 1136, 640));
#endif
		director->setOpenGLView(glview);

	}
	glview->setDesignResolutionSize(640, 1136, ResolutionPolicy::FIXED_WIDTH);
	auto scene = Scene::create();
	ScreenUpdateAssets* layer = ScreenUpdateAssets::create();
	scene->addChild(layer);
	director->runWithScene(scene);
#endif

    return true;
}

// This function will be called when the app is inactive. When comes a phone call,it's be invoked too
void AppDelegate::applicationDidEnterBackground()
{
    auto director = Director::getInstance();
    director->getEventDispatcher()->dispatchCustomEvent("game_on_hide"); 
}

// this function will be called when the app is active again
void AppDelegate::applicationWillEnterForeground()
{
    auto director = Director::getInstance();
    director->getEventDispatcher()->dispatchCustomEvent("game_on_show");
}

std::string AppDelegate::getExternalDataPath()
{
#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
	JniMethodInfo t;
	std::string ret("");

	if (JniHelper::getStaticMethodInfo(t, "com.gsn.getmoney/WrapperUtils", "getExternalDataPath", "()Ljava/lang/String;")) {
		jstring str = (jstring)t.env->CallStaticObjectMethod(t.classID, t.methodID);
		t.env->DeleteLocalRef(t.classID);
		ret = JniHelper::jstring2string(str);
		t.env->DeleteLocalRef(str);
	}
	if (ret.length() > 0)
	{
		ret.append("/");
		log("getExternalDataPath: %s", ret.c_str());
		return ret;
	}
	else
	{
		return FileUtils::getInstance()->getWritablePath();
	}
#endif
    return FileUtils::getInstance()->getWritablePath();
}