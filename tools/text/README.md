# Text tool

Used to defined texts used in game

## Requirements

- Nodejs

## How to use

- Step #1: Edit/add texts/excel-files in `xlsx` folder.

- Step #2: Run `run.bat` to export `json` file to resource folder.

## Note

### Generated files
Generated files have been saved in `temp` folder.

### Searching key - value
You can use file `ALL.txt` to searching key all xlsx file.

### Missing text
Missing text in src (keys start with TXT_) will be auto collected in Missing.xlsx file, PLEASE CHECK IT!!
Missing.xlsx is an auto generated file, so don't modify this file for more texts.

### Duplicate text
In console terminal when use run `run.bat` will print list warning of key duplicated, PLEASE search it in `ALL.txt` file
and remove the duplicated one.

### Localize text
If you want to localize some text, make sure value of these key in excel file is empty. When you run `run.bat`,
localized files for all markets will be auto generated in folder `localize`.