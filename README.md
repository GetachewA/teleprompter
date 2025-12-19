# CinePrompter - Professional iPhone Teleprompter

A professional-grade teleprompter web application optimized for iPhone, designed for content creators, video producers, and presenters.

## Features

### 🎬 Professional Design
- **Cinema-grade dark mode** with pure black background for OLED battery saving
- **High contrast typography** optimized for reading under studio lights
- **Zero UI distraction** - interface disappears during playback
- **iOS-native styling** with smooth animations and haptic feedback

### ⚡ Core Functionality
- **Smooth text scrolling** with adjustable speed (0.1x - 5.0x)
- **Dynamic font sizing** (24pt - 96pt) for optimal readability
- **Mirror mode** for teleprompter hardware compatibility
- **Tap anywhere** to play/pause
- **Double-tap** to reset to top

### 📝 Script Management
- **Built-in script editor** with 10,000 character limit
- **Automatic saving** to local storage
- **Import/export functionality** for script files
- **Character counter** and validation

### 🎛️ Advanced Controls
- **Floating control deck** with thumb-friendly buttons
- **Settings panel** for customizing defaults
- **Reading zone guides** (toggleable)
- **Orientation detection** (portrait/landscape optimization)

### 📱 iPhone Optimization
- **Touch-first interface** with proper touch targets
- **Haptic feedback** support
- **Responsive design** for all iPhone sizes
- **Landscape mode** with side-mounted controls
- **Safe area handling** for notched devices

## How to Use

### 1. Open the App
- Access `teleprompter.html` in your iPhone's Safari browser
- Add to home screen for app-like experience

### 2. Load Your Script
- Tap **"Edit Script"** in the top bar
- Paste or type your content (up to 10,000 characters)
- Tap **"Load Script"** to activate

### 3. Adjust Settings
- **Speed**: Use +/- buttons or adjust in settings
- **Font Size**: Use +/- buttons for optimal readability
- **Mirror**: Toggle for teleprompter hardware use

### 4. Start Teleprompting
- Tap anywhere on the screen or the **Play** button
- Interface automatically hides during playback
- Tap to pause and reveal controls

### 5. Recording Setup
- **Portrait**: Controls at bottom, text centered
- **Landscape**: Controls on right side, text optimized for camera alignment
- **Mirror Mode**: Enable for reflection-based teleprompters

## Keyboard Shortcuts (Desktop Testing)

- **Spacebar**: Play/Pause
- **Ctrl/Cmd + R**: Reset to top
- **Ctrl/Cmd + M**: Toggle mirror mode

## Settings Configuration

### Default Speed
Set your preferred scrolling speed (0.1x - 5.0x)

### Default Font Size
Set your preferred text size (24pt - 96pt)

### Reading Zone Position
Adjust where the optimal reading area appears on screen (10% - 50%)

### Show Reading Guides
Toggle the subtle guide lines that indicate where to look

## Tips for Best Results

### For Studio Recording
1. Use **mirror mode** if using reflection teleprompter hardware
2. Increase **font size** for better readability at distance
3. Adjust **reading zone** to align with your eye line
4. Use **landscape mode** for horizontal text layout

### For Mobile Recording
1. Keep **speed moderate** (1.0x - 2.0x) for natural delivery
2. Use **portrait mode** for front-facing camera content
3. Practice timing with the **pause/play** functionality
4. Save scripts between sessions for quick reuse

### Battery Optimization
1. **Dark mode** reduces OLED power consumption
2. **Lower brightness** when using mirror hardware
3. **Close other apps** for maximum performance
4. **Use airplane mode** to eliminate distractions

## Technical Specifications

### Browser Compatibility
- **Safari** (iOS 12+)
- **Chrome** (iOS 12+)
- **Firefox** (iOS 12+)

### Performance
- **60fps** scrolling animation using `requestAnimationFrame`
- **Optimized touch** handling with proper debouncing
- **Local storage** for script and settings persistence
- **Responsive design** for all iPhone screen sizes

### File Structure
```
teleprompter.html    # Main application interface
teleprompter.css     # Styles and responsive design
teleprompter.js      # Core functionality and interactions
README.md           # This documentation
```

## Troubleshooting Won't Load

### App
- Ensure you're using a modern iOS browser
- Check internet connection for font loading
- Try refreshing the page

### Scrolling Issues
- Check if **auto-play** is disabled in browser settings
- Ensure **JavaScript** is enabled
- Try restarting the browser

### Performance Issues
- Close other browser tabs
- Restart Safari
- Check available storage space

### Script Not Saving
- Ensure **local storage** isn't disabled
- Check if in private/incognito mode
- Clear browser cache if needed

## Support

This teleprompter app is designed for professional use and includes all essential features for mobile video production. For technical issues or feature requests, refer to the application code comments for implementation details.

---

**Author**: MiniMax Agent  
**Version**: 1.0  
**Last Updated**: December 2024