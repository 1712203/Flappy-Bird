@echo off

if "%1" == "ccs" goto CCS
goto CLIENT

:CLIENT
cmd /c start .\simulator\win32\GameClientJS.exe
goto END

:CCS
cd tools/ccs-parser
run.bat
goto END

:END
