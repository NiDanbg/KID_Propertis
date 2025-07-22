@echo off
cls

echo Add file to Git...
git add .
echo Готово.
echo.

echo Pls, enter message to commid:
set /p commit_message="Mesage: "

REM Chek for entranse
if "%commit_message%"=="" (
    echo.
    echo You have not entered a message. Comite is canceled
    pause
    exit
)

echo.
echo Save changes (commit)...
git commit -m "%commit_message%"
echo Готово.
echo.

echo Upload changes to GitHub (push)...
git push
echo Готово.
echo.

echo Всички операции бяха успешни!
pause