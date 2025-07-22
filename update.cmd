@echo off
cls

echo Add file to Git...
git add .
echo Done.
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
echo Done.
echo.

echo Upload changes to GitHub (push)...
git push
echo Done.
echo.

echo All operations are successful!
pause