@echo off
cls

echo Добавяне на файлове към Git...
git add .
echo Готово.
echo.

echo Моля, въведете съобщение за комита (напр. 'промених началната страница'):
set /p commit_message="Съобщение: "

REM Проверка дали потребителят е въвел нещо
if "%commit_message%"=="" (
    echo.
    echo Не сте въвели съобщение. Комита се отменя.
    pause
    exit
)

echo.
echo Запазване на промените (commit)...
git commit -m "%commit_message%"
echo Готово.
echo.

echo Качване на промените в GitHub (push)...
git push
echo Готово.
echo.

echo Всички операции приключиха успешно!
pause