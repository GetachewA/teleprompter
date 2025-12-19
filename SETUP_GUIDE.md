# 🎬 CinePrompter Setup Guide - How to Access on iPhone

Safari blocks local HTML files for security reasons. Here are multiple solutions to get your teleprompter working on your iPhone:

## 🚀 **Solution 1: Local Web Server (Recommended)**

### **Option A: Using the Provided Scripts**

#### **On Windows:**
1. Make sure you have Python installed (download from python.org)
2. Double-click `start_server.bat`
3. A command window will open and start the server
4. Note the IP address shown (usually something like `192.168.1.100`)

#### **On Mac/Linux:**
1. Open Terminal
2. Navigate to the teleprompter folder: `cd /path/to/teleprompter/folder`
3. Make script executable: `chmod +x start_server.sh`
4. Run: `./start_server.sh`
5. Note the IP address shown

#### **On Any System (Manual):**
```bash
python3 server.py
# or
python server.py
```

### **Access from iPhone:**
1. Make sure your iPhone is on the same WiFi network
2. Open Safari on your iPhone
3. Go to: `http://YOUR_COMPUTER_IP:8000/teleprompter.html`
   - Replace `YOUR_COMPUTER_IP` with the IP shown in the terminal
   - Example: `http://192.168.1.100:8000/teleprompter.html`

### **Finding Your Computer IP:**
- **Mac**: System Preferences → Network → Advanced → TCP/IP
- **Windows**: Open Command Prompt, type `ipconfig`
- **Linux**: Open Terminal, type `ip addr show` or `ifconfig`

---

## 🌐 **Solution 2: Online Hosting (Easiest)**

### **GitHub Pages (Free):**
1. Create a GitHub account at github.com
2. Create a new repository called `cineprompter`
3. Upload the teleprompter files (HTML, CSS, JS)
4. Go to repository Settings → Pages
5. Enable GitHub Pages from main branch
6. Access via: `https://YOUR_USERNAME.github.io/cineprompter/teleprompter.html`

### **Netlify Drop (Free):**
1. Go to netlify.com
2. Drag and drop the teleprompter folder
3. Get instant public URL
4. Access from your iPhone immediately

---

## 📱 **Solution 3: iPhone-Only Setup**

### **Using Pythonista (iOS App):**
1. Install "Pythonista 3" from App Store
2. Create a new script in Pythonista
3. Copy the server.py code into Pythonista
4. Run the script
5. Access via iPhone's local network

### **Using Working Copy + Python:**
1. Install "Working Copy" from App Store
2. Create new repository with teleprompter files
3. Install "Python" app from App Store
4. Run server script within Python app
5. Access locally on iPhone

---

## 🛠️ **Troubleshooting Safari Issues**

### **Problem: "Safari can't open the page"**
**Solution**: Make sure you're using the full URL including port number
- ❌ Wrong: `http://192.168.1.100/teleprompter.html`
- ✅ Correct: `http://192.168.1.100:8000/teleprompter.html`

### **Problem: "Connection refused"**
**Solutions**:
1. Check if server is running
2. Verify firewall allows port 8000
3. Try different port: `python server.py --port 8080`
4. Check iPhone and computer are on same WiFi

### **Problem: "Server not found"**
**Solutions**:
1. Disable VPN on both devices
2. Check WiFi network name is identical
3. Try connecting with IP address instead of hostname
4. Restart router if necessary

### **Problem: "Page won't load"**
**Solutions**:
1. Clear Safari cache: Settings → Safari → Clear History
2. Disable content blockers
3. Try private browsing mode
4. Restart Safari

---

## 🎯 **Quick Setup Checklist**

### **Before Starting:**
- [ ] Computer and iPhone on same WiFi network
- [ ] Python installed on computer (python.org)
- [ ] Teleprompter files downloaded to computer

### **Server Setup:**
- [ ] Run server script (`start_server.bat` or `start_server.sh`)
- [ ] Note computer IP address from terminal
- [ ] Verify server shows "Serving at port 8000"

### **iPhone Access:**
- [ ] Open Safari on iPhone
- [ ] Go to `http://YOUR_IP:8000/teleprompter.html`
- [ ] Tap "Edit Script" to load your content
- [ ] Test play/pause functionality

### **Add to Home Screen (Optional):**
1. In Safari, tap Share button
2. Tap "Add to Home Screen"
3. Name it "CinePrompter"
4. Tap "Add"

---

## 📋 **Alternative Browser Solutions**

If you still have issues with Safari, try these:

### **Chrome on iPhone:**
- Download Chrome from App Store
- Access the same URL
- Chrome may have different security restrictions

### **Firefox on iPhone:**
- Download Firefox from App Store
- Access the same URL
- Firefox has different local file handling

### **Edge on iPhone:**
- Download Microsoft Edge from App Store
- Access the same URL
- Some corporate networks allow different access

---

## 🔧 **Advanced Configuration**

### **Custom Port:**
If port 8000 is blocked, try:
```bash
python server.py --port 3000
# Access at: http://YOUR_IP:3000/teleprompter.html
```

### **Custom Network Interface:**
If you have multiple network interfaces:
```bash
# Find available interfaces
python -c "import socket; print([i[4][0] for i in socket.getaddrinfo('localhost', 8000)])"
```

### **Firewall Configuration:**
- **Windows**: Allow Python through Windows Defender
- **Mac**: System Preferences → Security & Privacy → Firewall
- **Linux**: `sudo ufw allow 8000`

---

## 💡 **Pro Tips**

### **For Better Performance:**
1. Use 5GHz WiFi for faster connection
2. Keep server computer physically close to iPhone
3. Close other browser tabs on iPhone
4. Use airplane mode on iPhone except WiFi

### **For Professional Use:**
1. Add to home screen for app-like experience
2. Test connection before recording session
3. Have backup script saved locally
4. Consider offline-capable versions for remote locations

### **Network Security:**
- Server only accessible on local network
- No internet exposure by default
- Can be stopped anytime with Ctrl+C
- Files stay on your computer

---

## 🆘 **Still Having Issues?**

### **Check These First:**
1. **Same WiFi Network**: Both devices must be on identical network
2. **Python Version**: Use Python 3.6 or newer
3. **File Paths**: Ensure teleprompter files are in same folder as server.py
4. **Antivirus Software**: May block Python network access
5. **Router Settings**: Some routers block local server access

### **Alternative Quick Test:**
1. Open terminal/command prompt
2. Run: `python -m http.server 8000`
3. Access: `http://localhost:8000/teleprompter.html`
4. If this works, the issue is with the custom server setup

### **Contact Information:**
If you continue having issues, please share:
- Your operating system (Windows/Mac/Linux)
- Python version (`python --version`)
- Exact error message from terminal
- Router/network setup details

---

**Ready to start teleprompting? Choose a solution above and follow the steps!** 🎬