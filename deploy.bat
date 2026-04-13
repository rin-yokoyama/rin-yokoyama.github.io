@echo off
echo Building and deploying Rin Yokoyama website...

REM Build the project
npm run build

REM Export static files
npm run export

REM Copy static assets
if exist "images" (
    xcopy /E /I /Y images out\images\
)
if exist "favicon.ico" (
    copy favicon.ico out\
)

REM Create .nojekyll file
echo. > out\.nojekyll

echo Deployment files ready in out/ directory
echo You can now deploy the contents of the out/ folder to GitHub Pages