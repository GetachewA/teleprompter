#!/usr/bin/env python3
"""
Simple HTTP server to serve the CinePrompter teleprompter app
Run this on your computer, then access it from your iPhone
"""

import http.server
import socketserver
import os
import webbrowser
from urllib.parse import urlparse

class TeleprompterHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="/workspace", **kwargs)
    
    def end_headers(self):
        # Add CORS headers for iPhone access
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

def start_server(port=8000):
    """Start the HTTP server"""
    try:
        with socketserver.TCPServer(("", port), TeleprompterHandler) as httpd:
            print(f"🎬 CinePrompter Server Started!")
            print(f"📱 On your iPhone, go to: http://YOUR_COMPUTER_IP:{port}/teleprompter.html")
            print(f"🌐 Local access: http://localhost:{port}/teleprompter.html")
            print(f"🔗 Direct link: http://localhost:{port}/")
            print(f"⏹️  Press Ctrl+C to stop the server")
            print(f"")
            print(f"💡 To find your computer's IP address:")
            print(f"   - Mac: System Preferences > Network > Advanced > TCP/IP")
            print(f"   - Windows: ipconfig in Command Prompt")
            print(f"   - Linux: ip addr show or ifconfig")
            
            # Try to open in browser automatically
            try:
                webbrowser.open(f'http://localhost:{port}/teleprompter.html')
                print(f"✅ Opened in your default browser!")
            except:
                pass
                
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print(f"\n🛑 Server stopped")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Port {port} is already in use. Try a different port:")
            print(f"   python server.py --port 8001")
        else:
            print(f"❌ Error starting server: {e}")

if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description='Start CinePrompter server')
    parser.add_argument('--port', type=int, default=8000, help='Port to serve on (default: 8000)')
    args = parser.parse_args()
    
    start_server(args.port)