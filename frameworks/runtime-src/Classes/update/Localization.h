#ifndef Localization_h__
#define Localization_h__

#include <map>
#include <string>
#include <vector>

class AssetData
{
public:
    std::string name;
    std::string content;
};

class Localization
{
public:
    Localization();
    ~Localization();
    static Localization* getInstance();
    static Localization* _localization;
    static std::string text(const char * mKey, const std::string& defaultText = "");
    void setLanguage(int langType);
    std::string resByLanguage(const std::string& res);
    std::string resLogoLanguage(const std::string& res);
private:
    std::string getFullPathFileLang(const char* code);
    void setCurrLanguage(std::string& fileName, std::string& jsonData);
    std::string checkInAsset(std::string& fileName);
    void parseJSON(std::string& jsonData);
private:
    int _currLanguageType;
    std::vector<AssetData*> _assetLanguage;
    std::map<std::string, std::string> _currLanguage;
};

#endif // Localization_h__
