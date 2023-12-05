# Coding Guidelines

## Table of Contents

- [Coding Guidelines](#coding-guidelines)
  - [Table of Contents](#table-of-contents)
  - [JSDoc](#jsdoc)
    - [What JSDoc](#what-jsdoc)
    - [Why JSDoc](#why-jsdoc)
    - [Example](#example)
  - [Naming](#naming)
    - [General Naming Rules](#general-naming-rules)
    - [Folder & file Names](#folder--file-names)
    - [Class & Type Names](#class--type-names)
    - [Variable Names](#variable-names)
    - [Class Data Members & Methods](#class-data-members--methods)
    - [Function Names](#function-names)
  - [Spaces vs Tabs](#spaces-vs-tabs)
  - [Code Format](#code-format)

## JSDoc

### What JSDoc

JSDoc is an API documentation generator for Javascript (like Javadoc or phpDocumentor)

[JSDoc Document](https://jsdoc.app)

### Why JSDoc

Most common error in JS is related to type errors.
Example: `getValue is not a function`, `value is undefined`.
These errors usually occur in run-time.

Using `JSDoc` as a type checkers for the project (used in most IDEs, Code editor) to avoid these errors before your code even run.

Cocos2djs also uses `JSDoc`.

### Example

```js

//This docs help IntelliSense can knows gm.profile.getData() will return ck.ProfileData instead of ck.BaseData
/**
 * @name ck.ProfileManager#getData
 * @return {ck.ProfileData}
 */
ck.ProfileManager = ck.BaseManager.extend({
    _config: null,      // {ck.ProfileConfig}
    _data: null,        // {ck.ProfileData}
})

/**
 *
 * @class
 * @extends cc.Class
 *
 */
var Animal = cc.Class.extend({
    /**
     * Animal name
     * @type {string}
     */
    _name: "",

    /**
     * @returns {string}
     */
    getName: function () {
        return this._name;
    }
});

/**
 * 
 * @class
 * @extends cc.Class
 * 
 */
var House = cc.Class.extend({
    /**
     * @type {Animal[]}
     */
    _pets: null,

    /**
     * Do something here
     * @return {void}
     */
    doSomething: function () {
        // The IDE/Editor will know pet type is Animal and suggest properties and methods in Animal class
        this._pets.forEach(pet => {
           // IDE knows name is a string => toUpperCase() can be used here
           var name = pet.getName();
           cc.log("Pet name", name.toUpperCase());
        });
    }
});

```

## Naming

### General Naming Rules

Function names, variable names, and filenames should be descriptive; eschew abbreviation.

Give as descriptive a name as possible, within reason.
Do NOT worry about saving horizontal space as it is far more important to make your code immediately understandable by a new reader.
Do NOT use abbreviations that are ambiguous or unfamiliar to readers outside your project.
Do NOT abbreviate by deleting letters within a word.

```js
// OK
var priceCountReader;     // No abbreviation.
var numErrors;            // "num" is a widespread convention.
var numDNSConnections;    // Most people know what "DNS" stands for.
```

```js
// BAD
var n;                     // Meaningless.
var nerr;                  // Ambiguous abbreviation.
var nCompConns;            // Ambiguous abbreviation.
var wgcConnections;        // Only your group knows what this stands for.
var pcReader;              // Lots of things can be abbreviated "pc".
var cstmrId;               // Deletes internal letters.
```

### Folder & file Names

Use `short` & `lower-case` names for folders. Ex.`res`, `src`, `sprite-sheets`, `cocos-studio`

Use `UPPERCASE` or `CamelCase` names for documentation files. Ex. `README.md`, `CHANGELOG.md`, `CodingGuidelines.md`

Use `lower-case` names for script files. Ex `config.bat`, `build.bat`, `export-asset.py`

Use `CamelCase` names for other files (source, images, config,...). Ex `Enemy.js`, `ButtonGreen.png`, `Buttons.plist`, `LevelConfig.json`

### Class & Type Names

Class & Type names should be all in **CamelCase**

```js
// LevelManager.js
var LevelManager = cc.Class.extend({

});
```

```js
// FishType.js
var FishType = {
    NEMO: 1,
    PUFFER: 2
};
```

### Variable Names

Variable names are all **camelCase**

```js
var hp = 100;
var levelData = {};
var myItems = [];
```

### Class Data Members & Methods

Class data members are **camelCase** with **underscores**

```js
var LevelManager = cc.Class.extend({
    _levels: [],
    _currentLevel: 0,
    _configData: {}
});
```

Class **private** method are **camelCase** with **underscores**

```js
var Animal = cc.Class.extend({
    _initSomething: function(){ },
});
```

Class **public** method are **camelCase** without **underscores**

```js
var Animal = cc.Class.extend({
    move: function(){ },
});
```

### Function Names

Functions names are camelCase (without underscores)

```js
utils.randomInt = function(low, high) {};

```

## Spaces vs Tabs

Use only spaces, and indent 4 spaces at a time.

We use spaces for indentation. Do not use tabs in your code.
You should set your editor to emit spaces when you hit the tab key.

## Code Format

We use Google Javascript formating style

```js
    // RIGHT
    for (var i = 0; i < 10; i++) {
        // ...
    }

    // WRONG
    for (var i = 0; i < 10; i++)
    {
        // ..
    }
```

```js
    // RIGHT
    var ClassABC = cc.Class.extend({
        _value: 0,

        getValue: function () {
            return this._value;
        }
    });

    // WRONG
    var ClassABC = cc.Class.extend({
        _value: 0,

        getValue: function ()
        {
            return this._value;
        }
    });
```

```js
    // RIGHT
    function doSomething () {

    }

    // WRONG
    function doSomething ()
    {

    }
```
