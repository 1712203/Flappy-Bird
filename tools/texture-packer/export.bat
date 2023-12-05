@echo off

set CURRENT_PATH=%~dp0%

call %CURRENT_PATH%\config.bat

for /r %%i in (*.tps) do (
	%TEXTURE_PACKER_EXE% %%i
)


