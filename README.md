# Pisti

## Table of Contents

- [Pisti](#pisti)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Requirements](#requirements)
  - [Running on Windows](#running-on-windows)
  - [Built Using](#built-using)
  - [Folder structures](#folder-structures)
  - [Documents](#documents)

## About

Client for Pisti - a Turkey card game.

## Requirements

- Cocos Studio 3.10

- Texture packer

- Node.js

- IDE: Intellij IDEA 2020+

- IMPORTANT: Please read the [Coding Guidelines](./docs/CodingGuidelines.md) before you start coding

## Running on Windows

To run simulator on Windows, run `./run.bat` script from comandline

## Built Using

- Cocos2djs v3.8

## Folder structures

    .
    ├── build                           # Build config folder
    |   ├── ...
    |   ├── vn-debug                    # Configs for debug build for market VN
    |   │   ├── icon                    # Your app icon
    |   │   ├── build.keystore          # Used to build Android APK/ABB
    |   │   ├── keystore_info.json      # Used to build Android APK/ABB
    |   │   ├── cdn.json                # CDN configs
    |   │   ├── config.json             # App config (name, package name, facebook/google things, etc.)
    |   │   ├── google-services.json    # Firebase config file
    |   │   └── version.json            # Version config (android/ios versions, cdn version)
    |   ├── vn-release                  # Configs for release build for market VN (has different CDN to debug build)
    |   ├── ...
    ├── docs                            # Documentation files
    ├── frameworks                      # Frameworks source code: C++, Cocos-html5 API
    ├── res                             # Game assets (sprites, sprite sheets, fonts, configs, etc)
    ├── res-vn                          # Localization assets for market VN (it will be copied into res before build apk - config in cdn.json)
    ├── ...                             # Other market assets
    ├── simulator                       # Win32 exe, dll, JSB files
    ├── src                             # Source files
    ├── tools                           # Tools and utilities
    ├── .cocos-project.json             # Cocos project file
    ├── .gitattributes                  # Used to handle EOF charator in different platform (Windows, Linux, Mac)
    ├── .gitignore                      # Git ignore
    ├── .markdownlint.json              # Config file for markdown lint
    ├── config.json                     # Config for window simulator
    ├── main.js                         # Game entry point
    ├── project.json                    # Cocos project file
    ├── run.bat                         # Run exe, tools script
    ├── CHANGELOG.md                    # Project change log / release note
    └── README.md                       # This file

## Documents

- [Coding Guidelines](./docs/CodingGuidelines.md)
