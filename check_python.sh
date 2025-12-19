#!/bin/bash

echo "🔍 Checking Python installation on Mac..."
echo ""

# Check for Python3
if command -v python3 &> /dev/null; then
    echo "✅ Python3 found: $(python3 --version)"
    echo "📍 Location: $(which python3)"
else
    echo "❌ Python3 not found"
fi

echo ""

# Check for Python2 (legacy)
if command -v python &> /dev/null; then
    echo "✅ Python found: $(python --version)"
    echo "📍 Location: $(which python)"
else
    echo "❌ Python2 not found"
fi

echo ""

# Check for pip
if command -v pip3 &> /dev/null; then
    echo "✅ pip3 found"
else
    echo "❌ pip3 not found"
fi

echo ""
echo "💡 If Python is missing, install it from:"
echo "   https://www.python.org/downloads/"
echo "   OR use Homebrew: brew install python3"