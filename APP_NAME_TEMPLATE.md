# 📝 App Name Change Template

## 🎯 **Quick Reference: What to Change**

### **Choose Your New Name:**
```
Current: "CinePrompter"
New Name: "________________" (8-15 characters recommended)
```

---

## 📁 **File Changes Required**

### **1. manifest.json**
**Find and replace:**
```json
// FROM:
"name": "CinePrompter - Professional Teleprompter",
"short_name": "CinePrompter", 
"apple-mobile-web-app-title": "CinePrompter"

// TO:
"name": "[YOUR_NEW_NAME] - Professional Teleprompter",
"short_name": "[YOUR_NEW_NAME]",
"apple-mobile-web-app-title": "[YOUR_NEW_NAME]"
```

### **2. teleprompter.html**
**Find and replace:**
```html
<!-- Line 6 -->
<title>CinePrompter - Professional Teleprompter</title>
<!-- TO: -->
<title>[YOUR_NEW_NAME] - Professional Teleprompter</title>

<!-- Line 12 -->
<meta name="apple-mobile-web-app-title" content="CinePrompter">
<!-- TO: -->
<meta name="apple-mobile-web-app-title" content="[YOUR_NEW_NAME]">

<!-- Line 41 -->
<h1 class="app-title">CinePrompter</h1>
<!-- TO: -->
<h1 class="app-title">[YOUR_NEW_NAME]</h1>
```

### **3. index.html (Optional)**
**Find and replace:**
```html
<!-- Line 6 -->
<title>CinePrompter - iPhone Teleprompter</title>
<!-- TO: -->
<title>[YOUR_NEW_NAME] - iPhone Teleprompter</title>
```

---

## 🚀 **Ready-to-Use Examples**

### **Example 1: StudioPro**
```json
// manifest.json:
"name": "StudioPro - Professional Teleprompter",
"short_name": "StudioPro",
"apple-mobile-web-app-title": "StudioPro"
```

```html
<!-- teleprompter.html: -->
<title>StudioPro - Professional Teleprompter</title>
<meta name="apple-mobile-web-app-title" content="StudioPro">
<h1 class="app-title">StudioPro</h1>
```

### **Example 2: ScriptFlow**
```json
// manifest.json:
"name": "ScriptFlow - Professional Teleprompter", 
"short_name": "ScriptFlow",
"apple-mobile-web-app-title": "ScriptFlow"
```

```html
<!-- teleprompter.html: -->
<title>ScriptFlow - Professional Teleprompter</title>
<meta name="apple-mobile-web-app-title" content="ScriptFlow">
<h1 class="app-title">ScriptFlow</h1>
```

### **Example 3: John's Teleprompter**
```json
// manifest.json:
"name": "John's Teleprompter - Professional Teleprompter",
"short_name": "John's Telepro",
"apple-mobile-web-app-title": "John's Teleprompter"
```

```html
<!-- teleprompter.html: -->
<title>John's Teleprompter - Professional Teleprompter</title>
<meta name="apple-mobile-web-app-title" content="John's Teleprompter">
<h1 class="app-title">John's Teleprompter</h1>
```

---

## ✅ **Name Validation Checklist**

### **Good Name Characteristics:**
- [ ] 8-15 characters long
- [ ] Easy to pronounce
- [ ] Memorable
- [ ] Professional (if business use)
- [ ] No special characters (except spaces, hyphens, apostrophes)

### **Examples of Good Names:**
- ✅ "StudioPro"
- ✅ "ScriptFlow" 
- ✅ "VideoMaster"
- ✅ "ContentPro"
- ✅ "John's Studio"
- ✅ "TelePro AI"
- ✅ "StreamTools"

### **Examples to Avoid:**
- ❌ "CinePrompter Professional Video Recording App" (too long)
- ❌ "123App!" (has special characters)
- ❌ "MyApp" (too generic)
- ❌ "     " (just spaces)

---

## 🎯 **Final Steps**

### **After Choosing Name:**
1. **Update files** using the template above
2. **Upload to GitHub** repository
3. **Wait 2-3 minutes** for deployment
4. **Test on iPhone** to see new name
5. **Reinstall** if needed for new icon

### **Verification:**
- [ ] Browser tab shows new name
- [ ] iPhone home screen shows new name  
- [ ] App switcher shows new name
- [ ] All features still work normally

**Your personalized app name will be live!** 🌟