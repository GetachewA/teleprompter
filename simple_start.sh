#!/bin/bash

# Simple one-line teleprompter server for Mac
# Just run: bash simple_start.sh

echo "🎬 Starting CinePrompter on Mac..."
echo ""

# Check for Python3
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 not found!"
    echo ""
    echo "📥 Install Python3:"
    echo "   - Go to: https://www.python.org/downloads/"
    echo "   - Download and install Python 3.x"
    echo "   - Then run this script again"
    echo ""
    echo "OR install via Homebrew:"
    echo "   /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
    echo "   brew install python3"
    exit 1
fi

echo "✅ Python3 found: $(python3 --version)"
echo ""

# Get directory path
DIR="$1"
if [ -z "$DIR" ]; then
    DIR="."
fi

echo "📁 Starting server in: $DIR"
echo ""

# Start server and get IP
echo "🚀 Starting server..."
echo "📱 On iPhone, go to: http://$(hostname -I | awk '{print $1}'):8000/teleprompter.html"
echo ""
echo "⏹️  Press Ctrl+C to stop"
echo ""

# Start server
cd "$DIR" && python3 -m http.server 8000