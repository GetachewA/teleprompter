# 🍎 Mac Setup Guide - CinePrompter

## 🚀 **Quick Start (One-Line Solution)**

Open **Terminal** (Applications → Utilities → Terminal) and run:

```bash
cd Desktop && python3 -m http.server 8000
```

Replace `Desktop` with the path to your teleprompter folder.

## 🔍 **Step-by-Step Mac Setup**

### **Step 1: Check Python Installation**
Open Terminal and run:
```bash
python3 --version
```

**If you see a version number** (like Python 3.11.0), you're good! Skip to Step 2.

**If you see "command not found"**, install Python:

#### **Option A: Download from python.org**
1. Go to https://www.python.org/downloads/
2. Download Python 3.x for Mac
3. Run the installer
4. **Important**: Check "Add Python to PATH" during installation

#### **Option B: Install via Homebrew (Recommended)**
1. Install Homebrew first (https://brew.sh/)
2. Run: `brew install python3`

#### **Option C: Install from Mac App Store**
Search for "Python 3" and install the official Python 3 app

### **Step 2: Navigate to Teleprompter Folder**
In Terminal, navigate to where you saved the teleprompter files:
```bash
cd Desktop/teleprompter-folder
# Replace with your actual folder path
```

**Tip**: You can also drag the folder into Terminal instead of typing the path!

### **Step 3: Start the Server**
```bash
python3 -m http.server 8000
```

You should see:
```
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

### **Step 4: Find Your Mac's IP**
Open a new Terminal window and run:
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

Look for lines like `192.168.1.100` - that's your IP address.

### **Step 5: Access from iPhone**
1. Make sure iPhone is on same WiFi
2. Open Safari on iPhone
3. Go to: `http://192.168.1.100:8000/teleprompter.html`
   (Replace 192.168.1.100 with your actual IP)

## 🎯 **Simplified Scripts**

I've created easy-to-use scripts for you:

### **Check Python First**
```bash
chmod +x check_python.sh && ./check_python.sh
```

### **One-Click Start**
```bash
chmod +x start_macos.sh && ./start_macos.sh
```

## 🔧 **Troubleshooting Mac Issues**

### **"Permission denied" when running scripts**
```bash
chmod +x start_macos.sh
chmod +x check_python.sh
```

### **"No such file or directory"**
- Make sure you're in the correct folder: `pwd`
- Use `ls` to see if the teleprompter files are there
- Try: `python3 --version` instead of `python --version`

### **"Address already in use"**
Port 8000 is busy. Try a different port:
```bash
python3 -m http.server 8001
# Then access: http://YOUR_IP:8001/teleprompter.html
```

### **Can't find IP address**
Try these commands:
```bash
ifconfig | grep inet
hostname -I
scutil --get LocalHostName
```

### **Firewall blocking connection**
1. System Preferences → Security & Privacy → Firewall
2. Turn off firewall temporarily OR add Python to allowed apps
3. Or use a different port number

## 💡 **Mac-Specific Tips**

### **Using Finder + Terminal**
1. Right-click teleprompter folder in Finder
2. Select "Services" → "New Terminal at Folder"
3. Terminal opens directly in that folder

### **Drag & Drop Paths**
In Terminal, type `cd ` (with space) then drag the folder icon - Terminal will auto-fill the path!

### **Alias for Quick Access**
Add this to your `~/.bash_profile`:
```bash
alias teleprompter='cd ~/Desktop && python3 -m http.server 8000'
```

Then just type `teleprompter` to start!

### **Auto-Open Browser**
Add this to start_macos.sh:
```bash
open "http://localhost:8000"
```

## 🌐 **Alternative: Online Hosting**

If local server doesn't work, use these free options:

### **Netlify (Easiest)**
1. Go to https://app.netlify.com
2. Drag teleprompter folder to deploy
3. Get instant public URL

### **GitHub Pages**
1. Create GitHub account
2. Upload files to repository
3. Enable Pages in repository settings

## 📱 **iPhone Connection Test**

Once server is running, test with these steps:

1. **On Mac**: Server should show "Serving HTTP on port 8000"
2. **On iPhone**: Safari should load the landing page
3. **Tap "Open Teleprompter"** to access the main app
4. **Test controls**: Try editing a script and playing

## 🆘 **Still Having Issues?**

### **Check These:**
- [ ] Mac and iPhone on same WiFi network
- [ ] Python 3 installed and working
- [ ] Firewall not blocking connections
- [ ] Correct IP address used
- [ ] Port 8000 available

### **Quick Test Commands**
```bash
# Test Python
python3 --version

# Test server locally
python3 -m http.server 8000

# Test IP address
ifconfig | grep "inet " | grep -v 127.0.0.1

# Check if port is listening
netstat -an | grep 8000
```

### **Reset Everything**
```bash
# Kill any existing servers
killall python3

# Check what's using port 8000
lsof -i :8000

# Start fresh
cd /path/to/teleprompter
python3 -m http.server 8000
```

---

**🎬 Ready to start teleprompting on your Mac + iPhone setup!**