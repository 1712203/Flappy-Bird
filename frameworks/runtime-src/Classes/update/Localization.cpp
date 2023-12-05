#include "Localization.h"
#include "cocos2d.h"
#include "external/json/document.h"
#include "2d/CCFontAtlasCache.h"
#include "json/document.h"
#include "storage/local-storage/LocalStorage.h"
USING_NS_CC;
using namespace std;

//File
#define FILE_LANGUAGE_PATH "localizeText/%s"

Localization* Localization::_localization = NULL;
Localization::Localization()
{
    std::string strFilePath = cocos2d::FileUtils::getInstance()->getWritablePath();
    strFilePath += "/jsb.sqlite";
    localStorageInit(strFilePath.c_str());
    std::string _type;
    int langType = localStorageGetItem("carrom_language_type", &_type);
    cocos2d::log("[Localization] <constructor> %d %s", langType, _type.c_str());
    this->_currLanguageType = -1;
    // if (langType){
    //     this->setLanguage(std::atoi(_type.c_str()));
    // }
    // else this->setLanguage(1);
    this->setLanguage(1); // just use english here
}

Localization::~Localization()
{
}

Localization* Localization::getInstance()
{
    if (!_localization)
    {
        _localization = new Localization();
    }
    return _localization;
}

void Localization::setLanguage(int langType)
{
    cocos2d::log("[Localization] <setLanguage> %d", langType);
    if (this->_currLanguageType == langType) return;
    std::string fileName = "";
    this->_currLanguageType = langType;
    switch (langType){
        case 0://vn
            fileName = "lang_VI.json";
            break;
        case 1://en
            fileName = "lang_EN.json";
            break;
        case 2://mm
            fileName = "lang_MM.json";
            break;
        case 3://th
            fileName = "lang_TH.json";
            break;
        case 4://ph
            fileName = "lang_PH.json";
            break;
        case 5://br
            fileName = "lang_BR.json";
            break;
        default:
            fileName = "lang_EN.json";
            break;
    }
    std::string path = "res/localizeText/" + fileName;
    if (!FileUtils::getInstance()->isFileExist(path)){
        if(FileUtils::getInstance()->isFileExist("res/localizeText/lang_EN.json")){
            this->_currLanguageType = 1;
            fileName = "lang_EN.json";
        }
        else if (FileUtils::getInstance()->isFileExist("res/localizeText/lang_VI.json")){
            this->_currLanguageType = 2;
            fileName = "lang_VI.json";
        }
        else if (FileUtils::getInstance()->isFileExist("res/localizeText/lang_MM.json")){
            this->_currLanguageType = 4;
            fileName = "lang_MM.json";
        }
    }
    cocos2d::log("[Localization] <setLanguage> %s", fileName.c_str());
    std::string inAsset = this->checkInAsset(fileName);
    if (strcmp(inAsset.c_str(), "") != 0){
        this->parseJSON(inAsset);
        return;
    }
    std::string fullPath = getFullPathFileLang(fileName.c_str());
    string contents;

    // Get data of file
    contents = FileUtils::getInstance()->getStringFromFile(fullPath);
    this->setCurrLanguage(fileName, contents);
}

void Localization::parseJSON(std::string& jsonData)
{
    //rapidjson::GenericDocument<rapidjson::UTF8<>, rapidjson::CrtAllocator> d;
    rapidjson::Document d;
    d.Parse<0>(jsonData.c_str());
    for (rapidjson::Value::MemberIterator it = d["text"].MemberBegin(); it != d["text"].MemberEnd(); ++it){
        std::string keyCode = it->name.GetString();
        std::string value = it->value.GetString();
        _currLanguage.insert(std::pair<std::string, std::string>(keyCode, value));
    }
}

std::string Localization::checkInAsset(std::string& fileName)
{
    for (unsigned int i = 0; i < _assetLanguage.size(); i++)
    {
        AssetData* data = _assetLanguage.at(i);
        if (strcmp(data->name.c_str(), fileName.c_str()) == 0){
            return data->content.c_str();
        }
    }
    return "";
}

void Localization::setCurrLanguage(std::string& fileName, std::string& jsonData)
{
    AssetData* data = new AssetData();
    data->name = fileName;
    data->content = jsonData;
    this->parseJSON(jsonData);
}

std::string Localization::text(const char * mKey, const std::string& defaultText)
{
    std::string _key = std::string(mKey);
    std::map<std::string, std::string>::iterator itr = getInstance()->_currLanguage.find(std::string(mKey));
    if (itr != getInstance()->_currLanguage.end()) {
        return (itr->second).c_str();
    }
    if (!defaultText.empty())
    {
        return defaultText;
    }
    return _key;
}

std::string Localization::resByLanguage(const std::string& res)
{
    std::string _n = res.c_str();
    switch (_currLanguageType)
    {
        case 0://VN
            break;
        case 1://ENG
            _n += "_en";
            break;
        case 4://MYANMAR
            _n += "_mm";
            break;
        default:
            break;
    }
    return _n + ".png";
}

std::string Localization::resLogoLanguage(const std::string& res)
{
    std::string _n = res.c_str();
    cocos2d::log("resLogoLanguage: %s", _n.c_str());
    return _n + ".png";
}

std::string Localization::getFullPathFileLang(const char* code)
{
    char buff[100];
    sprintf(buff, FILE_LANGUAGE_PATH, code);
    return FileUtils::getInstance()->fullPathForFilename(buff);
}

    