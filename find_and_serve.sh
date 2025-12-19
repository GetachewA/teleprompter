#!/bin/bash

echo "🔍 CinePrompter Server Setup"
echo ""

# Function to search for teleprompter files
find_teleprompter_dir() {
    local search_paths=(
        "$HOME/Desktop/teleprompter"
        "$HOME/Desktop/CinePrompter" 
        "$HOME/Downloads/teleprompter"
        "$HOME/Downloads/CinePrompter"
        "$HOME/Documents/teleprompter"
        "$HOME/Documents/CinePrompter"
        "$(pwd)/teleprompter"
        "$(pwd)/CinePrompter"
        "$(pwd)"
    )
    
    for path in "${search_paths[@]}"; do
        if [ -f "$path/teleprompter.html" ] && [ -f "$path/teleprompter.css" ] && [ -f "$path/teleprompter.js" ]; then
            echo "$path"
            return 0
        fi
    done
    return 1
}

# Check Python3
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 not found!"
    echo "Please install Python3 from https://www.python.org/downloads/"
    exit 1
fi

echo "✅ Python3 found: $(python3 --version)"
echo ""

# Find teleprompter directory
TELEPROMPTER_DIR=$(find_teleprompter_dir)

if [ -z "$TELEPROMPTER_DIR" ]; then
    echo "❌ Could not find teleprompter files!"
    echo ""
    echo "Please make sure you have:"
    echo "- teleprompter.html"
    echo "- teleprompter.css" 
    echo "- teleprompter.js"
    echo ""
    echo "Searched in:"
    echo "- ~/Desktop/teleprompter"
    echo "- ~/Downloads/teleprompter"
    echo "- ~/Documents/teleprompter"
    echo "- Current directory: $(pwd)"
    echo ""
    echo "Manual fix: cd to your teleprompter folder, then run:"
    echo "python3 -m http.server 8000"
    exit 1
fi

echo "✅ Found teleprompter files in: $TELEPROMPTER_DIR"
echo ""

# Change to the directory
cd "$TELEPROMPTER_DIR"

# Get IP address
IP=$(hostname -I | awk '{print $1}')
echo "🌐 Starting server..."
echo ""
echo "📱 On your iPhone, go to: http://$IP:8000/teleprompter.html"
echo "💻 On this computer: http://localhost:8000/teleprompter.html"
echo ""
echo "⏹️  Press Ctrl+C to stop the server"
echo ""

# Start the server
python3 -m http.server 8000