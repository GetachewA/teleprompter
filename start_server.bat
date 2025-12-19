@echo off
echo 🎬 Starting CinePrompter Server...
echo.
echo This will start a local web server so you can access the teleprompter on your iPhone.
echo.
echo Press any key to continue or Ctrl+C to cancel...
pause >nul

python server.py

pause