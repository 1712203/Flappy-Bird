let config = {};
config.PROJECT_ROOT = '../../';
config.CCS_DIR = config.PROJECT_ROOT + 'res/_ccs/';
config.CLASS_DIR = config.PROJECT_ROOT + 'src/_ccs';
config.ANIM_DIR = config.PROJECT_ROOT + 'res/_ccs/_anim/Anim.json';
config.TEMPLATE_CLASS_FILE = './templates/TemplateClass.js';
config.TEMPLATE_ABSTRACT_CLASS_FILE = './templates/TemplateAbstractClass.js';
config.TEMPLATE_ANIM_FILE = './templates/TemplateAnim.js';
config.TEMPLATE_MAIN_LAYER_CLASS_FILE = './templates/TemplateMainLayerClass.js';
config.TEMPLATE_FULL_SCREEN_POPUP_CLASS_FILE = './templates/TemplateFullScreenPopupClass.js';
config.EXTEND_CLASSES = {
    "Node": "ccui.Widget",
    "Layer": "cc.Layer",
    "Scene": "cc.Layer"
};
config.DEFAULT_EXTEND_CLASS = "ccui.Widget";
config.TYPE_TO_CLASS = {
    "SingleNodeObjectData": "cc.Node",
    "ButtonObjectData": "ccui.Button",
    "ImageViewObjectData": "ccui.ImageView",
    "TextObjectData": "ck.Text",
    "TextBMFontObjectData": "ccui.TextBMFont",
    "PanelObjectData": "ccui.Layout",
    "ListViewObjectData": "ccui.ListView",
    "LoadingBarObjectData": "ck.LoadingBar",
    "PageViewObjectData": "ccui.PageView",
    "ScrollViewObjectData": "ccui.ScrollView",
    "SpriteObjectData": "cc.Sprite",
    "CheckBoxObjectData": "ccui.CheckBox",
};
config.Classes = {
    CC_NODE: "cc.Node",
    CC_SPRITE: "cc.Sprite",
    CC_PROGRESS_TIMER: "cc.ProgressTimer",
    CC_EDITBOX: "cc.EditBox",
    CCUI_BUTTON: "ccui.Button",
    CCUI_IMAGE_VIEW: "ccui.ImageView",
    CCUI_TEXT: "ck.Text",
    CCUI_TEXT_BM_FONT: "ccui.TextBMFont",
    CCUI_LAYOUT: "ccui.Layout",
    CCUI_LISTVIEW: "ccui.ListView",
    CK_LOADING_BAR: "ck.LoadingBar",
    CCUI_PAGE_VIEW: "ccui.PageView",
    CCUI_SCROLL_VIEW: "ccui.ScrollView",
    CCUI_CHECK_BOX: "ccui.CheckBox",
    AVATAR: "Avatar",
    ASYNC_BUTTON: "AsyncButton",
    CK_EDITBOX: "ck.EditBox",
    CK_TEXT_FIELD: "ck.TextField",
    RICH_TEXT: "RichText",
    CHAT_HISTORY_WIDGET: "ChatHistoryWidget",
    CK_SLOT: "ck.Slot",
    CK_SLOT_MACHINE: "ck.SlotMachine",
};
config.AnimProperty = {
    POSITION: "Position",
    SCALE: "Scale",
    ROTATION: "RotationSkew",
    OPACITY: "Alpha",
    COLOR: "CColor",
    VISIBLE: "VisibleForFrame",
    NESTED_ACTION: "ActionValue",
    SPRITE_FRAME: "FileData",
};
config.NestedActionType = {
    LOOP_ACTION: "LoopAction",
    NO_LOOP_ACTION: "NoLoopAction",
    SINGLE_FRAME: "SingleFrame"
};
config.AnimFunctionNameFormat = {
    PLAY: "playCCSAnim{name}",
    RESET: "resetCCSAnim{name}",
};
config.TextureType = {
    LOCAL_TEXTURE: "Normal",
    PLIST_TEXTURE: "PlistSubImage",
};
config.EasingType = {
    LINEAR : 0,

    SINE_EASEIN : 1,
    SINE_EASEOUT : 2,
    SINE_EASEINOUT : 3,

    QUAD_EASEIN : 4,
    QUAD_EASEOUT : 5,
    QUAD_EASEINOUT : 6,

    CUBIC_EASEIN : 7,
    CUBIC_EASEOUT : 8,
    CUBIC_EASEINOUT : 9,

    QUART_EASEIN : 10,
    QUART_EASEOUT : 11,
    QUART_EASEINOUT : 12,

    QUINT_EASEIN : 13,
    QUINT_EASEOUT : 14,
    QUINT_EASEINOUT : 15,

    EXPO_EASEIN : 16,
    EXPO_EASEOUT : 17,
    EXPO_EASEINOUT : 18,

    CIRC_EASEIN : 19,
    CIRC_EASEOUT : 20,
    CIRC_EASEINOUT : 21,

    ELASTIC_EASEIN : 22,
    ELASTIC_EASEOUT : 23,
    ELASTIC_EASEINOUT : 24,

    BACK_EASEIN : 25,
    BACK_EASEOUT : 26,
    BACK_EASEINOUT : 27,

    BOUNCE_EASEIN : 28,
    BOUNCE_EASEOUT : 29,
    BOUNCE_EASEINOUT : 30
};

module.exports = config;