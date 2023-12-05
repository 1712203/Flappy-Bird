@echo off
cd scripts
node export.js %*
cd ..
xcopy /s/y ".\temp" "..\..\res\texts" /exclude:excludedExportFile.txt