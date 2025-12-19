/**
 * CinePrompter - Professional Teleprompter
 * iPhone-Optimized Mobile Application
 */

class CinePrompter {
    constructor() {
        this.isPlaying = false;
        this.scrollPosition = 0;
        this.scrollSpeed = 80; // pixels per second - much faster for teleprompting
        this.fontSize = 48;
        this.isMirrored = false;
        this.isLandscape = false;
        this.isOverlayMode = false;
        this.animationFrame = null;
        this.lastTime = 0;
        this.savedScript = localStorage.getItem('teleprompter_script') || '';
        this.settings = this.loadSettings();
        
        // DOM Elements
        this.elements = {
            canvas: document.getElementById('prompterCanvas'),
            promptText: document.getElementById('promptText'),
            readingZone: document.getElementById('readingZone'),
            actionBar: document.getElementById('actionBar'),
            controlDeck: document.getElementById('controlDeck'),
            playBtn: document.getElementById('playBtn'),
            playIcon: document.querySelector('.play-icon'),
            pauseIcon: document.querySelector('.pause-icon'),
            speedValue: document.getElementById('speedValue'),
            fontValue: document.getElementById('fontValue'),
            mirrorToggle: document.getElementById('mirrorToggle'),
            editBtn: document.getElementById('editBtn'),
            settingsBtn: document.getElementById('settingsBtn'),
            editorModal: document.getElementById('editorModal'),
            settingsModal: document.getElementById('settingsModal'),
            scriptInput: document.getElementById('scriptInput'),
            charCount: document.getElementById('charCount'),
            closeEditor: document.getElementById('closeEditor'),
            closeSettings: document.getElementById('closeSettings'),
            loadScript: document.getElementById('loadScript'),
            clearScript: document.getElementById('clearScript'),
            saveSettings: document.getElementById('saveSettings'),
            speedDown: document.getElementById('speedDown'),
            speedUp: document.getElementById('speedUp'),
            fontDown: document.getElementById('fontDown'),
            fontUp: document.getElementById('fontUp'),
            defaultSpeed: document.getElementById('defaultSpeed'),
            defaultFontSize: document.getElementById('defaultFontSize'),
            readingZonePos: document.getElementById('readingZonePos'),
            showGuides: document.getElementById('showGuides'),
            defaultSpeedValue: document.getElementById('defaultSpeedValue'),
            defaultFontValue: document.getElementById('defaultFontValue'),
            readingZoneValue: document.getElementById('readingZoneValue'),
            guideLines: document.querySelectorAll('.guide-line'),
            loadingOverlay: document.getElementById('loadingOverlay'),
            overlayToggle: document.getElementById('overlayToggle'),
            overlayInstructions: document.getElementById('overlayInstructions')
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadSavedScript();
        this.updateSettingsUI();
        this.checkOrientation();
        this.updateReadingZone();
        this.setupScrollingMode(); // New: Setup scrolling mode for iPhone
        this.hideUI();
    }
    
    setupScrollingMode() {
        // iPhone Safari: Set up position-based scrolling
        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (isIOS) {
            this.elements.promptText.style.position = 'absolute';
            this.elements.promptText.style.top = '0px';
            this.elements.promptText.style.left = '0';
            this.elements.promptText.style.width = '100%';
        }
    }
    
    setupEventListeners() {
        // Play/Pause button
        this.elements.playBtn.addEventListener('click', () => this.togglePlayback());
        
        // Speed controls
        this.elements.speedDown.addEventListener('click', () => this.adjustSpeed(-0.1));
        this.elements.speedUp.addEventListener('click', () => this.adjustSpeed(0.1));
        
        // Font size controls
        this.elements.fontDown.addEventListener('click', () => this.adjustFont(-2));
        this.elements.fontUp.addEventListener('click', () => this.adjustFont(2));
        
        // Mirror toggle
        this.elements.mirrorToggle.addEventListener('change', (e) => this.toggleMirror(e.target.checked));
        
        // Overlay toggle
        this.elements.overlayToggle.addEventListener('change', (e) => this.toggleOverlay(e.target.checked));
        
        // Modal controls
        this.elements.editBtn.addEventListener('click', () => this.openEditor());
        this.elements.settingsBtn.addEventListener('click', () => this.openSettings());
        this.elements.closeEditor.addEventListener('click', () => this.closeModal(this.elements.editorModal));
        this.elements.closeSettings.addEventListener('click', () => this.closeModal(this.elements.settingsModal));
        
        // Script editor
        this.elements.scriptInput.addEventListener('input', () => this.updateCharCount());
        this.elements.loadScript.addEventListener('click', () => this.loadScript());
        this.elements.clearScript.addEventListener('click', () => this.clearScript());
        
        // Settings
        this.elements.saveSettings.addEventListener('click', () => this.saveSettings());
        this.elements.defaultSpeed.addEventListener('input', (e) => this.updateSettingValue('defaultSpeedValue', e.target.value + 'x'));
        this.elements.defaultFontSize.addEventListener('input', (e) => this.updateSettingValue('defaultFontValue', e.target.value + 'pt'));
        this.elements.readingZonePos.addEventListener('input', (e) => this.updateSettingValue('readingZoneValue', e.target.value + '%'));
        
        // Touch interactions on canvas
        this.elements.canvas.addEventListener('click', (e) => this.handleCanvasClick(e));
        this.elements.canvas.addEventListener('dblclick', () => this.resetScroll());
        
        // Prevent context menu
        this.elements.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
        
        // Orientation change
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.checkOrientation();
                this.updateReadingZone();
            }, 100);
        });
        
        window.addEventListener('resize', () => {
            this.checkOrientation();
            this.updateReadingZone();
        });
        
        // Settings sliders
        this.elements.defaultSpeed.addEventListener('input', (e) => this.elements.defaultSpeedValue.textContent = e.target.value + 'px/s');
        this.elements.defaultFontSize.addEventListener('input', (e) => this.elements.defaultFontValue.textContent = e.target.value + 'pt');
        this.elements.readingZonePos.addEventListener('input', (e) => this.elements.readingZoneValue.textContent = e.target.value + '%');
        
        // Close modals on overlay click
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal);
                }
            });
        });
        
        // Keyboard shortcuts (for debugging)
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }
    
    checkOrientation() {
        this.isLandscape = window.innerHeight < window.innerWidth && window.innerHeight < 500;
        this.elements.canvas.classList.toggle('landscape', this.isLandscape);
    }
    
    togglePlayback() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
        this.hapticFeedback();
    }
    
    play() {
        if (this.isPlaying) return;
        
        this.isPlaying = true;
        this.elements.playIcon.classList.add('hidden');
        this.elements.pauseIcon.classList.remove('hidden');
        
        // Hide UI when playing
        this.hideUI();
        
        this.lastTime = performance.now();
        this.startAnimation();
    }
    
    pause() {
        this.isPlaying = false;
        this.elements.playIcon.classList.remove('hidden');
        this.elements.pauseIcon.classList.add('hidden');
        
        // Show UI when paused
        this.showUI();
        
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }
    }
    
    startAnimation() {
        if (!this.isPlaying) return;
        
        const currentTime = performance.now();
        const deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;
        
        // Scroll the text - much faster for teleprompting
        this.scrollPosition += this.scrollSpeed * deltaTime;
        
        // iPhone Safari: Use position-based scrolling instead of transforms
        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (isIOS) {
            // Position-based scrolling for iPhone (more reliable)
            this.elements.promptText.style.top = `${-this.scrollPosition}px`;
            this.elements.promptText.style.position = 'absolute';
        } else {
            // Transform-based for desktop (still works well there)
            this.elements.promptText.style.transform = `translateY(-${this.scrollPosition}px)`;
        }
        
        // Check if we've scrolled through all content
        const textHeight = this.elements.promptText.scrollHeight;
        const containerHeight = window.innerHeight;
        
        // Calculate when to stop: when we've scrolled past all text
        const totalScrollNeeded = textHeight + containerHeight + 200;
        
        if (this.scrollPosition > totalScrollNeeded) {
            this.pause();
            this.resetScroll();
            return;
        }
        
        this.animationFrame = requestAnimationFrame(() => this.startAnimation());
    }
    
    resetScroll() {
        this.scrollPosition = 0;
        // iPhone Safari: Reset using position-based scrolling
        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (isIOS) {
            // Position-based reset for iPhone
            this.elements.promptText.style.top = '0px';
            this.elements.promptText.style.position = 'absolute';
        } else {
            // Transform-based reset for desktop
            this.elements.promptText.style.transform = 'translateY(0)';
        }
    }
    
    adjustSpeed(delta) {
        // Much wider speed range for proper teleprompting (10-300 pixels/sec)
        const newSpeed = Math.max(10, Math.min(300, this.scrollSpeed + delta));
        this.scrollSpeed = parseFloat(newSpeed.toFixed(0));
        this.elements.speedValue.textContent = this.scrollSpeed + 'px/s';
        this.hapticFeedback();
    }
    
    adjustFont(delta) {
        const newSize = Math.max(24, Math.min(96, this.fontSize + delta));
        this.fontSize = newSize;
        this.elements.promptText.style.fontSize = this.fontSize + 'pt';
        this.elements.fontValue.textContent = this.fontSize + 'pt';
        this.hapticFeedback();
    }
    
    toggleMirror(enabled) {
        this.isMirrored = enabled;
        this.elements.canvas.classList.toggle('mirrored', enabled);
        this.hapticFeedback();
    }
    
    toggleOverlay(enabled) {
        this.isOverlayMode = enabled;
        
        if (enabled) {
            // Enable overlay mode - Better solution for iPhone
            document.body.style.position = 'fixed';
            document.body.style.top = '0';
            document.body.style.left = '0';
            document.body.style.width = '100vw';
            document.body.style.height = '100vh';
            document.body.style.zIndex = '2147483647'; // Higher z-index
            document.body.style.pointerEvents = 'auto';
            document.body.style.background = 'transparent';
            
            // Hide action bar and show enhanced instructions
            this.elements.actionBar.style.display = 'none';
            this.elements.overlayInstructions.classList.remove('hidden');
            
            // Make control deck smaller for overlay use
            this.elements.controlDeck.style.transform = 'scale(0.7)';
            this.elements.controlDeck.style.bottom = '15px';
            
            this.hapticFeedback();
            
            // Show instructions for 15 seconds
            setTimeout(() => {
                this.elements.overlayInstructions.classList.add('hidden');
            }, 15000);
        } else {
            // Disable overlay mode
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.width = '';
            document.body.style.height = '';
            document.body.style.zIndex = '';
            document.body.style.pointerEvents = '';
            document.body.style.background = '';
            
            // Restore normal UI
            this.elements.actionBar.style.display = 'flex';
            this.elements.controlDeck.style.transform = 'translateX(-50%)';
            this.elements.controlDeck.style.bottom = '32px';
            
            this.hapticFeedback();
        }
    }
    
    openEditor() {
        this.elements.scriptInput.value = this.savedScript;
        this.updateCharCount();
        this.openModal(this.elements.editorModal);
        this.hapticFeedback();
    }
    
    openSettings() {
        this.updateSettingsUI();
        this.openModal(this.elements.settingsModal);
        this.hapticFeedback();
    }
    
    openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        this.hapticFeedback();
    }
    
    loadScript() {
        const script = this.elements.scriptInput.value.trim();
        
        if (!script) {
            alert('Please enter some text to load.');
            return;
        }
        
        this.showLoading();
        
        // Simulate loading time for smooth UX
        setTimeout(() => {
            this.savedScript = script;
            localStorage.setItem('teleprompter_script', script);
            this.elements.promptText.textContent = script;
            this.resetScroll();
            this.closeModal(this.elements.editorModal);
            this.hideLoading();
            this.hapticFeedback();
        }, 500);
    }
    
    clearScript() {
        if (confirm('Are you sure you want to clear the script?')) {
            this.elements.scriptInput.value = '';
            this.updateCharCount();
            this.hapticFeedback();
        }
    }
    
    loadSavedScript() {
        if (this.savedScript) {
            this.elements.promptText.textContent = this.savedScript;
        }
    }
    
    updateCharCount() {
        const count = this.elements.scriptInput.value.length;
        this.elements.charCount.textContent = `${count} / 10000`;
    }
    
    updateSettingsUI() {
        this.elements.defaultSpeed.value = this.settings.defaultSpeed;
        this.elements.defaultFontSize.value = this.settings.defaultFontSize;
        this.elements.readingZonePos.value = this.settings.readingZonePos;
        this.elements.showGuides.checked = this.settings.showGuides;
        
        this.elements.defaultSpeedValue.textContent = this.settings.defaultSpeed + 'px/s';
        this.elements.defaultFontValue.textContent = this.settings.defaultFontSize + 'pt';
        this.elements.readingZoneValue.textContent = this.settings.readingZonePos + '%';
    }
    
    saveSettings() {
        this.settings = {
            defaultSpeed: parseFloat(this.elements.defaultSpeed.value),
            defaultFontSize: parseInt(this.elements.defaultFontSize.value),
            readingZonePos: parseInt(this.elements.readingZonePos.value),
            showGuides: this.elements.showGuides.checked
        };
        
        localStorage.setItem('teleprompter_settings', JSON.stringify(this.settings));
        this.closeModal(this.elements.settingsModal);
        this.hapticFeedback();
        
        // Apply settings immediately
        this.scrollSpeed = this.settings.defaultSpeed;
        this.fontSize = this.settings.defaultFontSize;
        this.elements.speedValue.textContent = this.scrollSpeed + 'px/s';
        this.elements.fontValue.textContent = this.fontSize + 'pt';
        this.elements.promptText.style.fontSize = this.fontSize + 'pt';
        this.updateReadingZone();
        this.updateGuideVisibility();
    }
    
    loadSettings() {
        const saved = localStorage.getItem('teleprompter_settings');
        if (saved) {
            return JSON.parse(saved);
        }
        
        return {
            defaultSpeed: 80,
            defaultFontSize: 48,
            readingZonePos: 30,
            showGuides: true
        };
    }
    
    updateSettingValue(elementId, value) {
        document.getElementById(elementId).textContent = value;
    }
    
    updateReadingZone() {
        const zone = document.getElementById('readingZone');
        const topPercent = this.isLandscape ? 50 - (this.settings.readingZonePos / 2) : 50 - (this.settings.readingZonePos / 2);
        zone.style.top = `${topPercent}%`;
    }
    
    updateGuideVisibility() {
        this.elements.guideLines.forEach(line => {
            line.classList.toggle('hidden', !this.settings.showGuides);
        });
    }
    
    handleCanvasClick(e) {
        // Only toggle play/pause if clicking on the canvas background
        if (e.target === this.elements.canvas || e.target === this.elements.readingZone) {
            this.togglePlayback();
        }
    }
    
    hideUI() {
        this.elements.actionBar.classList.add('hidden');
        this.elements.controlDeck.classList.add('hidden');
        this.updateGuideVisibility();
    }
    
    showUI() {
        this.elements.actionBar.classList.remove('hidden');
        this.elements.controlDeck.classList.remove('hidden');
        this.updateGuideVisibility();
    }
    
    showLoading() {
        this.elements.loadingOverlay.classList.remove('hidden');
    }
    
    hideLoading() {
        this.elements.loadingOverlay.classList.add('hidden');
    }
    
    hapticFeedback() {
        // iOS haptic feedback if supported
        if ('vibrate' in navigator) {
            navigator.vibrate(10);
        }
    }
    
    handleKeyboard(e) {
        // Prevent keyboard shortcuts when in input fields
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        switch (e.code) {
            case 'Space':
                e.preventDefault();
                this.togglePlayback();
                break;
            case 'KeyR':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    this.resetScroll();
                }
                break;
            case 'KeyM':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    this.toggleMirror(!this.isMirrored);
                    this.elements.mirrorToggle.checked = this.isMirrored;
                }
                break;
        }
    }
    
    // Public API methods
    getCurrentScript() {
        return this.elements.promptText.textContent;
    }
    
    setScript(text) {
        this.elements.promptText.textContent = text;
        this.resetScroll();
        localStorage.setItem('teleprompter_script', text);
    }
    
    getSettings() {
        return { ...this.settings };
    }
    
    setSpeed(speed) {
        this.scrollSpeed = Math.max(0.1, Math.min(5.0, speed));
        this.elements.speedValue.textContent = this.scrollSpeed + 'x';
    }
    
    setFontSize(size) {
        this.fontSize = Math.max(24, Math.min(96, size));
        this.elements.promptText.style.fontSize = this.fontSize + 'pt';
        this.elements.fontValue.textContent = this.fontSize + 'pt';
    }
    
    // Utility method to export script
    exportScript() {
        const script = this.getCurrentScript();
        const blob = new Blob([script], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'teleprompter-script.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
    // Utility method to import script from file
    importScript(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.setScript(e.target.result);
        };
        reader.readAsText(file);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.cinePrompter = new CinePrompter();
});

// Service Worker registration for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Service worker registration failed - app still works
        });
    });
}

// Export for testing purposes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CinePrompter;
}