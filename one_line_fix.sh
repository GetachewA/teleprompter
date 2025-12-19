#!/bin/bash
echo "🎬 CinePrompter Server Fix - One Line Solution"
echo ""
echo "This will automatically find and serve your teleprompter files."
echo ""

# Try to find teleprompter files in common locations
SEARCH_LOCATIONS=(
    "$HOME/Desktop/teleprompter"
    "$HOME/Desktop/CinePrompter"
    "$HOME/Downloads/teleprompter"
    "$HOME/Downloads/CinePrompter"
    "$HOME/Documents/teleprompter"
    "$HOME/Documents/CinePrompter"
    "$(pwd)/teleprompter"
    "$(pwd)/CinePrompter"
)

TELEPROMPTER_DIR=""

for location in "${SEARCH_LOCATIONS[@]}"; do
    if [ -f "$location/teleprompter.html" ] && [ -f "$location/teleprompter.css" ] && [ -f "$location/teleprompter.js" ]; then
        TELEPROMPTER_DIR="$location"
        break
    fi
done

if [ -z "$TELEPROMPTER_DIR" ]; then
    echo "❌ Could not find teleprompter files automatically."
    echo ""
    echo "Please run these commands:"
    echo "1. cd ~/Desktop"
    echo "2. mkdir teleprompter"
    echo "3. Copy your teleprompter.html, teleprompter.css, and teleprompter.js files to ~/Desktop/teleprompter/"
    echo "4. cd teleprompter"
    echo "5. python3 -m http.server 8000"
    exit 1
fi

echo "✅ Found teleprompter files in: $TELEPROMPTER_DIR"
echo "📁 Changing to teleprompter directory..."
cd "$TELEPROMPTER_DIR"

IP=$(hostname -I | awk '{print $1}')
echo ""
echo "🚀 Starting server..."
echo "📱 iPhone: http://$IP:8000/teleprompter.html"
echo "💻 Mac: http://localhost:8000/teleprompter.html"
echo ""
echo "⏹️  Press Ctrl+C to stop"
echo ""

python3 -m http.server 8000