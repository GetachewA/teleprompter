#!/bin/bash

echo "🎬 Starting CinePrompter Server on Mac..."
echo ""

# Function to find available Python
find_python() {
    if command -v python3 &> /dev/null; then
        echo "python3"
    elif command -v python &> /dev/null; then
        echo "python"
    else
        echo "none"
    fi
}

PYTHON_CMD=$(find_python)

if [ "$PYTHON_CMD" = "none" ]; then
    echo "❌ Python not found!"
    echo ""
    echo "🔧 Please install Python:"
    echo "   Option 1: Download from https://www.python.org/downloads/"
    echo "   Option 2: Install via Homebrew: brew install python3"
    echo "   Option 3: Install via Mac App Store: Search for 'Python 3'"
    echo ""
    echo "After installation, run this script again."
    exit 1
fi

echo "✅ Using Python: $PYTHON_CMD ($($PYTHON_CMD --version))"
echo ""

# Get current directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
echo "📁 Working directory: $DIR"
echo ""

# Start server
echo "🚀 Starting server..."
echo "📱 On your iPhone, go to: http://$(hostname -I | awk '{print $1}'):8000/teleprompter.html"
echo ""
echo "⏹️  Press Ctrl+C to stop the server"
echo ""

# Try to open in browser
open "http://localhost:8000" 2>/dev/null &

# Start the server
$PYTHON_CMD -m http.server 8000