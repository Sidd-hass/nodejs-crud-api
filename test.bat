@echo off
setlocal enabledelayedexpansion

set USER_EMAIL=gmail@example.com
set USER_PASS=password123
set BASE_URL=http://localhost

echo 🔐 Registering user...
curl -s -X POST %BASE_URL%/register ^
    -H "Content-Type: application/json" ^
    -d "{\"email\":\"%USER_EMAIL%\", \"password\":\"%USER_PASS%\"}"

echo.
echo 🔐 Logging in...
for /f "delims=" %%i in ('curl -s -X POST %BASE_URL%/login -H "Content-Type: application/json" -d "{\"email\":\"%USER_EMAIL%\", \"password\":\"%USER_PASS%\"}"') do (
    set RESPONSE=%%i
)

REM Extract token using PowerShell
for /f "delims=" %%i in ('powershell -Command "($RESPONSE | ConvertFrom-Json).token"') do (
    set TOKEN=%%i
)

if "%TOKEN%"=="" (
    echo ❌ Failed to get token.
    exit /b 1
)

echo ✅ JWT Token Acquired: %TOKEN%

echo.
echo 📝 Creating task...
for /f "delims=" %%i in ('curl -s -X POST %BASE_URL%/tasks ^
    -H "Authorization: Bearer %TOKEN%" ^
    -H "Content-Type: application/json" ^
    -d "{\"title\": \"Task from BAT\", \"description\": \"Created from Windows script\"}"') do (
    set CREATE_RESPONSE=%%i
)

for /f "delims=" %%i in ('powershell -Command "($env:CREATE_RESPONSE | ConvertFrom-Json)._id"'') do (
    set TASK_ID=%%i
)

echo 📄 Listing tasks...
curl -s -X GET %BASE_URL%/tasks -H "Authorization: Bearer %TOKEN%"
echo.

echo ✏️ Updating task...
curl -s -X PUT %BASE_URL%/tasks/%TASK_ID% ^
    -H "Authorization: Bearer %TOKEN%" ^
    -H "Content-Type: application/json" ^
    -d "{\"title\":\"Updated via .bat\", \"completed\": true}"
echo.

echo 🗑️ Deleting task...
curl -s -X DELETE %BASE_URL%/tasks/%TASK_ID% -H "Authorization: Bearer %TOKEN%"
echo.

echo ✅ Finished API test from host 🎉
pause
