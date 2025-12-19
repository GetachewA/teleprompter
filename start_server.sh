#!/bin/bash

echo "🎬 Starting CinePrompter Server..."
echo ""
echo "This will start a local web server so you can access the teleprompter on your iPhone."
echo ""
read -p "Press Enter to continue or Ctrl+C to cancel..."

python3 server.py

echo ""
echo "Server stopped."