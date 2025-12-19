# 🚫 Fix 404 Error - Server Can't Find Files

## 🔍 **Problem Diagnosis**
The 404 error means the server is running but can't find the teleprompter files. You're likely:
1. In the wrong directory
2. Or files aren't in the expected location

## ✅ **Solution 1: Check Directory (Recommended)**

### **Step 1: Check where you are**
```bash
pwd
ls -la
```

### **Step 2: Navigate to teleprompter folder**
```bash
# Try these locations (replace with your actual path):
cd ~/Desktop/teleprompter
# OR
cd ~/Downloads/teleprompter  
# OR
cd ~/Documents/teleprompter
```

### **Step 3: Verify files exist**
```bash
ls
```
You should see: `teleprompter.html`, `teleprompter.css`, `teleprompter.js`

### **Step 4: Start server from correct folder**
```bash
python3 -m http.server 8000
```

## ✅ **Solution 2: Auto-Find Script**

If you can't find the right directory, use this command:

```bash
# This finds your teleprompter files automatically
find ~ -name "teleprompter.html" -exec dirname {} \; | head -1 | xargs -I {} bash -c 'cd {} && echo "Found files in: $(pwd)" && python3 -m http.server 8000'
```

## ✅ **Solution 3: Copy Files to Desktop**

If the files are scattered, copy them to Desktop:

```bash
# Create teleprompter folder on Desktop
mkdir ~/Desktop/teleprompter

# Copy all teleprompter files (adjust paths as needed)
cp /path/to/your/teleprompter.html ~/Desktop/teleprompter/
cp /path/to/your/teleprompter.css ~/Desktop/teleprompter/
cp /path/to/your/teleprompter.js ~/Desktop/teleprompter/

# Start server from Desktop
cd ~/Desktop/teleprompter
python3 -m http.server 8000
```

## ✅ **Solution 4: Quick Server Test**

Test if the server works with a simple file:

```bash
# Create a test file
echo "<h1>Test Server</h1><p>Server works!</p>" > test.html

# Start server in current directory
python3 -m http.server 8000

# Visit http://localhost:8000/test.html
# If this works, the issue is your teleprompter file location
```

## 🎯 **Quick Commands to Try**

**Option A: Find and fix automatically**
```bash
find ~ -name "teleprompter.html" -type f
```

**Option B: Simple server start**
```bash
cd Desktop && python3 -m http.server 8000
```

**Option C: Check current directory contents**
```bash
ls -la *.html *.css *.js
```

## 📱 **After Server is Working**

Once you see "Serving HTTP on 0.0.0.0 port 8000", access:
- **iPhone**: `http://YOUR_MAC_IP:8000/teleprompter.html`
- **Mac**: `http://localhost:8000/teleprompter.html`

## 🆘 **Still Having Issues?**

### **Check These:**
1. **Same WiFi**: iPhone and Mac on same network
2. **Files Present**: All 3 files exist (HTML, CSS, JS)
3. **Correct Directory**: Server running from folder with teleprompter files
4. **Port Available**: Try port 8080 if 8000 is busy

### **Find Your Mac IP:**
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

### **Alternative Ports:**
```bash
# Try different ports if 8000 is busy
python3 -m http.server 8080
python3 -m http.server 3000
python3 -m http.server 9000
```

---

**The key is making sure you're in the directory with all the teleprompter files before starting the server!** 🎬