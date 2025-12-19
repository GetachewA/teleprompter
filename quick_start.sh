#!/bin/bash
echo "🎬 Starting CinePrompter Server..."
echo ""
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 not found! Please install from https://www.python.org/downloads/"
    exit 1
fi
echo "✅ Python3 found: $(python3 --version)"
echo ""
IP=$(hostname -I | awk '{print $1}')
echo "📱 On your iPhone, go to: http://$IP:8000/teleprompter.html"
echo ""
echo "⏹️  Press Ctrl+C to stop"
echo ""
python3 -m http.server 8000