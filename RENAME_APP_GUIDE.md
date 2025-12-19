# 📱 Rename Your Teleprompter App - Complete Guide

## 🎯 **Yes, You Can Easily Change the Name!**

You can rename your app to anything you like. Here are the complete instructions for changing the name from "CinePrompter" to whatever you prefer.

---

## 🔧 **Files to Update**

### **1. manifest.json (Most Important)**
This controls the app name when installed on iPhone:

```json
{
    "name": "Your App Name - Professional Teleprompter",
    "short_name": "Your App Name",
    "apple-mobile-web-app-title": "Your App Name"
}
```

### **2. teleprompter.html**
Update the title and app name display:

```html
<!-- Change this line -->
<title>CinePrompter - Professional Teleprompter</title>

<!-- To this -->
<title>Your App Name - Professional Teleprompter</title>

<!-- And this line -->
<meta name="apple-mobile-web-app-title" content="CinePrompter">

<!-- To this -->
<meta name="apple-mobile-web-app-title" content="Your App Name">

<!-- And this line -->
<h1 class="app-title">CinePrompter</h1>

<!-- To this -->
<h1 class="app-title">Your App Name</h1>
```

### **3. index.html (Landing Page)**
Update the landing page title:

```html
<!-- Change this -->
<title>CinePrompter - iPhone Teleprompter</title>

<!-- To this -->
<title>Your App Name - iPhone Teleprompter</title>
```

### **4. Service Worker (sw.js)**
Optional - change the console log messages:

```javascript
// Change this
console.log('CinePrompter: Service Worker registered successfully');

// To this
console.log('Your App Name: Service Worker registered successfully');
```

---

## 🎨 **Example Renames**

### **Personal Brand Examples:**
```
"CinePrompter" → "John's Teleprompter"
"CinePrompter" → "StudioPro"
"CinePrompter" → "VideoMaster"
"CinePrompter" → "ContentPro"
"CinePrompter" → "StreamTools"
```

### **Company/Brand Examples:**
```
"CinePrompter" → "StudioPro AI"
"CinePrompter" → "ContentStudio"
"CinePrompter" → "CreatorPro"
"CinePrompter" → "StreamReady"
"CinePrompter" → "Videographer Pro"
```

### **Fun/Creative Examples:**
```
"CinePrompter" → "ScriptFlow"
"CinePrompter" → "WordScroller"
"CinePrompter" → "PromptMaster"
"CinePrompter" → "TelePrompter"
"CinePrompter" → "SpeechFlow"
```

---

## 📋 **Step-by-Step Rename Process**

### **Step 1: Choose Your New Name**
Pick something that's:
- **Short** (fits on iPhone home screen)
- **Memorable** (easy to remember)
- **Professional** (if using for business)
- **Descriptive** (indicates it's a teleprompter)

**Recommended Length**: 8-15 characters

### **Step 2: Update manifest.json**
Replace all instances of "CinePrompter":

```json
{
    "name": "Your New Name - Professional Teleprompter",
    "short_name": "Your New Name",
    "description": "Professional iPhone teleprompter for content creators and video producers",
    "start_url": "/teleprompter.html",
    "display": "standalone",
    "orientation": "any",
    "theme_color": "#000000",
    "background_color": "#000000",
    "categories": ["productivity", "entertainment", "utilities"],
    "lang": "en",
    "apple-mobile-web-app-title": "Your New Name"
}
```

### **Step 3: Update teleprompter.html**
Replace these lines:

```html
<!-- Line 6: Browser title -->
<title>Your New Name - Professional Teleprompter</title>

<!-- Line 12: iPhone app name -->
<meta name="apple-mobile-web-app-title" content="Your New Name">

<!-- Line 41: App header -->
<h1 class="app-title">Your New Name</h1>
```

### **Step 4: Update index.html (if using)**
```html
<!-- Line 6: Landing page title -->
<title>Your New Name - iPhone Teleprompter</title>
```

### **Step 5: Re-deploy to GitHub**
After making changes:
1. Upload updated files to your GitHub repository
2. Wait 2-3 minutes for deployment
3. Test the new name on your iPhone

---

## 📱 **How It Appears After Renaming**

### **iPhone Home Screen:**
- **Icon Name**: Your new name (shortened if needed)
- **Full App Name**: Your new name - Professional Teleprompter

### **Browser Tab:**
- **Title**: Your new name - Professional Teleprompter

### **App Header:**
- **Display**: Your new name

### **Splash Screen:**
- **Loading**: Your new name

---

## ✅ **Rename Examples with Code**

### **Example 1: "StudioPro"**

#### manifest.json:
```json
{
    "name": "StudioPro - Professional Teleprompter",
    "short_name": "StudioPro",
    "apple-mobile-web-app-title": "StudioPro"
}
```

#### teleprompter.html:
```html
<title>StudioPro - Professional Teleprompter</title>
<meta name="apple-mobile-web-app-title" content="StudioPro">
<h1 class="app-title">StudioPro</h1>
```

### **Example 2: "ScriptFlow"**

#### manifest.json:
```json
{
    "name": "ScriptFlow - Professional Teleprompter",
    "short_name": "ScriptFlow",
    "apple-mobile-web-app-title": "ScriptFlow"
}
```

#### teleprompter.html:
```html
<title>ScriptFlow - Professional Teleprompter</title>
<meta name="apple-mobile-web-app-title" content="ScriptFlow">
<h1 class="app-title">ScriptFlow</h1>
```

### **Example 3: "John's Teleprompter"**

#### manifest.json:
```json
{
    "name": "John's Teleprompter - Professional Teleprompter",
    "short_name": "John's Telepro",
    "apple-mobile-web-app-title": "John's Teleprompter"
}
```

#### teleprompter.html:
```html
<title>John's Teleprompter - Professional Teleprompter</title>
<meta name="apple-mobile-web-app-title" content="John's Teleprompter">
<h1 class="app-title">John's Teleprompter</h1>
```

---

## 🎯 **Best Practices for Naming**

### **Good Names:**
- **Short and memorable**: "StudioPro", "ScriptFlow"
- **Descriptive**: "VideoMaster", "ContentPro"
- **Professional**: "TelePrompter Pro", "StreamTools"
- **Personal**: "John's Teleprompter", "Studio AI"

### **Avoid:**
- **Too long**: May get truncated on iPhone
- **Special characters**: Stick to letters, numbers, basic punctuation
- **Spaces at beginning/end**: Clean formatting
- **Very generic**: "App", "Teleprompter" alone

### **iPhone Considerations:**
- **Short name**: `short_name` gets displayed on home screen
- **Full name**: `name` appears in app switcher
- **Length limit**: iPhone may truncate very long names

---

## 🔄 **Testing Your New Name**

### **After Renaming:**
1. **Deploy to GitHub** (upload updated files)
2. **Visit URL** in browser to see new title
3. **Install on iPhone** to see new app name
4. **Test functionality** to ensure everything still works

### **Verification Checklist:**
- [ ] Browser tab shows new name
- [ ] iPhone home screen icon shows new name
- [ ] App switcher shows new name
- [ ] All functionality works normally
- [ ] Installation process works
- [ ] Scrolling and controls work

---

## 💡 **Pro Tips**

### **Before You Start:**
1. **Choose your final name** before making changes
2. **Test locally first** if possible
3. **Keep backups** of original files

### **For Business Use:**
1. **Use your brand name** for consistency
2. **Keep it professional** and memorable
3. **Consider trademark** implications

### **For Personal Use:**
1. **Use your name** or nickname
2. **Keep it fun** and personal
3. **Easy to remember** for sharing

---

## 🎬 **Ready to Rename?**

**Quick Steps:**
1. **Choose your name** (8-15 characters recommended)
2. **Update manifest.json** with new name
3. **Update teleprompter.html** titles
4. **Upload to GitHub**
5. **Install on iPhone** with new name

**Your app will now appear as your custom name everywhere!** 🎨📱

---

## 📞 **Need Help?**

### **Common Issues:**
- **Name too long**: iPhone may truncate, use shorter version in `short_name`
- **Special characters**: Stick to letters, numbers, spaces, hyphens
- **Not updating**: Make sure to re-upload files to GitHub after changes

### **Testing:**
- **URL format**: Always `yourusername.github.io/teleprompter/`
- **Name change**: Takes effect immediately after GitHub deployment
- **iPhone install**: Delete old icon, install with new name

**Your personalized teleprompter app is ready!** 🌟