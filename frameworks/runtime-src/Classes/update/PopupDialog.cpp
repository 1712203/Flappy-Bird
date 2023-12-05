#include "PopupDialog.h"

USING_NS_CC;
USING_NS_CC_EXT;
using namespace cocos2d::ui;

PopupDialog::PopupDialog()
{
}

PopupDialog::~PopupDialog()
{
}

PopupDialog *PopupDialog::create()
{
    PopupDialog *popup = new PopupDialog();
    if (popup && popup->init())
    {
        popup->autorelease();
        return popup;
    }
    CC_SAFE_DELETE(popup);
    return NULL;
}

bool PopupDialog::init()
{
    Layer::init();
    cocos2d::Director::getInstance()->getTextureCache()->addImage("res/sprite-sheets/Basics.png");
    cocos2d::SpriteFrameCache::getInstance()->addSpriteFramesWithFile("res/sprite-sheets/Basics.plist");
    this->addBackground();
    this->addPopup();
    this->addTitle();
    this->addMessage();
    this->addButton();
    return true;
}

void PopupDialog::addBackground()
{
    const auto size = Director::getInstance()->getVisibleSize();
    auto background = LayerColor::create(Color4B(0, 0, 0, 180), size.width, size.height);
    this->addChild(background, -1);
    background->ignoreAnchorPointForPosition(false);
    background->setAnchorPoint(Vec2(0.5, 0.5));
    background->setPosition(Vec2(size.width * 0.5, size.height * 0.5));
}

void PopupDialog::addPopup()
{
    const auto size = Director::getInstance()->getVisibleSize();
    _popup = ui::ImageView::create("basics/Square_32px.png", cocos2d::ui::Widget::TextureResType::PLIST);
    this->addChild(_popup, 0);
    _popup->setAnchorPoint(Vec2(0.5, 0.5));
    _popup->setPosition(Vec2(size.width * 0.5, size.height * 0.5));
}

void PopupDialog::addTitle()
{
    const auto size = _popup->getContentSize();
    const auto x = size.width * 0.5;
    const auto y = size.height * 0.8;
    _title = cocos2d::ui::Text::create();
    _popup->addChild(_title, 0);
    _title->setFontName("res/fonts/BebasNeueProBold.ttf");
    _title->setFontSize(50);
    _title->setTextHorizontalAlignment(TextHAlignment::CENTER);
    _title->setTextVerticalAlignment(TextVAlignment::CENTER);
    _title->setTextColor(Color4B(10, 83, 119, 255));
    _title->setAnchorPoint(Vec2(0.5, 0.5));
    _title->setPosition(Vec2(x, y));
}

void PopupDialog::addMessage()
{
    const auto size = _popup->getContentSize();
    const auto x = size.width * 0.5;
    const auto y = size.height * 0.45;
    _message = cocos2d::ui::Text::create();
    _popup->addChild(_message, 0);
    _message->setFontName("res/fonts/BebasNeueProBold.ttf");
    _message->setFontSize(30);
    _message->setTextHorizontalAlignment(TextHAlignment::CENTER);
    _message->setTextVerticalAlignment(TextVAlignment::CENTER);
    _message->setTextColor(Color4B(10, 83, 119, 255));
    _message->setAnchorPoint(Vec2(0.5, 0.5));
    _message->setPosition(Vec2(x, y));
    _message->ignoreContentAdaptWithSize(false);
    const auto width = size.width * 0.8;
    const auto height = size.height * 0.4;
    _message->setTextAreaSize(Size(width, height));
}

void PopupDialog::addButton()
{
    auto size = _popup->getContentSize();
    auto x = size.width * 0.5;
    auto y = size.height * 0.13;
    const auto file = "res/sprites/basics/Square_32px.png";
    auto btn = cocos2d::ui::Button::create(file, file, file, TextureResType::LOCAL);
    _popup->addChild(btn, 0);
    btn->setPosition(Vec2(x, y));
    btn->setPressedActionEnabled(true);
    btn->addTouchEventListener([this](cocos2d::Ref*, cocos2d::ui::Widget::TouchEventType event){
        if (event == cocos2d::ui::Widget::TouchEventType::ENDED)
        {
            this->_callback();
        }
    });

    size = btn->getContentSize();
    x = size.width * 0.5;
    y = size.height * 0.6;
    _btnTitle = cocos2d::ui::Text::create();
    btn->addChild(_btnTitle, 0);
    _btnTitle->setFontName("res/fonts/iCeielBalihoScript.ttf");
    _btnTitle->setFontSize(27);
    _btnTitle->setTextHorizontalAlignment(TextHAlignment::CENTER);
    _btnTitle->setTextVerticalAlignment(TextVAlignment::CENTER);
    _btnTitle->setTextColor(Color4B(85, 18, 3, 255));
    _btnTitle->setAnchorPoint(Vec2(0.5, 0.5));
    _btnTitle->setPosition(Vec2(x, y));
}

void PopupDialog::setTitle(const std::string& title)
{
    _title->setString(title);
}

void PopupDialog::setMessage(const std::string& message)
{
    _message->setString(message);
}

void PopupDialog::setBtnTitle(const std::string& title)
{
    _btnTitle->setString(title);
}

void PopupDialog::setCallback(const PopupDialogEventListener& callback)
{
    _callback = callback;
}
