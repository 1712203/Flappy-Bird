#ifndef PopupDialog_h__
#define PopupDialog_h__

#include "cocos2d.h"
#include "extensions/cocos-ext.h"
#include "ui/CocosGUI.h"
#include "cocostudio/CocoStudio.h"

typedef std::function<void()> PopupDialogEventListener;

class PopupDialog:
    public cocos2d::Layer
{
public:
    static PopupDialog* create();
    PopupDialog();
    ~PopupDialog();
    bool init();

    void setTitle(const std::string& title);
    void setMessage(const std::string& message);
    void setBtnTitle(const std::string& title);
    void setCallback(const PopupDialogEventListener& callback);
private:
    void addBackground();
    void addPopup();
    void addTitle();
    void addMessage();
    void addButton();

private:
    PopupDialogEventListener _callback;
    cocos2d::ui::ImageView* _popup;
    cocos2d::ui::Text* _title;
    cocos2d::ui::Text* _message;
    cocos2d::ui::Text* _btnTitle;
};


#endif // PopupDialog_h__
