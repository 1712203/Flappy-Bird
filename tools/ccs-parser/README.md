# CCS Parser

This tool is used to generate classes from cocos studio exported files

## About

Cocos Studio is a great tool to visualize game UI (instead of coding it yourself), but it comes with a cost "slow loading/parsing" process.

This tool is created to improve this disadvantage by parsing and creating classes based on Cocos Studio file at compile time

## Usage

### How to generate classes

Create and publish cocos studio files `res/_ccs`

Run `./tools/ccs-parser/run.bat` to generate classes from `res/_ccs` folder to `src/_ccs`

Note: Classes generated from cocos studio will be in `_ccs` namespace

### User Data and Frame Event value
Frame Event:
- Fake: không parse
- cc.EditBox
- ck.LoadingBar
- Avatar
- AsyncButton
- ck.EditBox
- ck.TextField
- RichText
- ck.TabSelector

User Data:
- IgnoreFill
- EmptyString
- KeepString
- uppercase
- lowercase
- FullScreenBackground
- fitSingleLine
- fitMultipleLine
- Abstract
- MainLayer
- FullScreenPopup
- IgnoreFill


### How to used classes

Extend `_ccs` classes to used them

```js
let RankingPopup = _ccs.RankingPopup.extend({
    ctor: function () {
        _ccs.RankingPopup.prototype.ctor.call(this);
        ck.PopupBehavior.prototype.ctor.call(this);
    },
});

ck.extend(RankingPopup, ck.PopupBehavior);
```

