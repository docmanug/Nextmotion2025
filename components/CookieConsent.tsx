"use client";

import { useEffect, useState } from "react";

type CookiePrefs = {
  analytics: boolean;
  ads: boolean;
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cookies_preferences");
      if (!raw) {
        setVisible(true);
      } else {
        const prefs: CookiePrefs = JSON.parse(raw);
        maybeLoadScripts(prefs);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const savePreference = (prefs: CookiePrefs) => {
    localStorage.setItem("cookies_preferences", JSON.stringify(prefs));
    setVisible(false);
    maybeLoadScripts(prefs);
  };

  const maybeLoadScripts = (prefs: CookiePrefs) => {
    if (prefs.ads) {
      // Load Meta Pixel
      if (!(window as any).fbq) {
        (function (f: any, b: any, e: any, n?: any, t?: any, s?: any) {
          if (f.fbq) return;
          n = f.fbq = function () {
            (n as any).callMethod ? (n as any).callMethod.apply(n, arguments) : (n as any).queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          (n as any).push = n;
          (n as any).loaded = true;
          (n as any).version = "2.0";
          (n as any).queue = [];
          t = b.createElement(e);
          t.async = true;
          t.src = "https://connect.facebook.net/en_US/fbevents.js";
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        })(window, document, "script");
        (window as any).fbq("init", "24288009300898224");
        (window as any).fbq("track", "PageView");
      }
    }
    // if (prefs.analytics) { /* load your analytics here */ }
  };

  if (!visible) return null;

  return (
    <div
      id="cookie-consent"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "#222",
        color: "#fff",
        padding: "15px",
        textAlign: "center",
        zIndex: 9999,
      }}
    >
      <span>
        This site uses cookies and third-party tools (Meta Pixel, etc.) for analytics and advertising. You can choose your preferences.
      </span>
      <br />
      <button
        id="accept-analytics"
        style={{ margin: "5px", padding: "5px 10px", background: "#4CAF50", color: "#fff", border: "none", cursor: "pointer" }}
        onClick={() => savePreference({ analytics: true, ads: false })}
      >
        Accept Analytics
      </button>
      <button
        id="accept-ads"
        style={{ margin: "5px", padding: "5px 10px", background: "#2196F3", color: "#fff", border: "none", cursor: "pointer" }}
        onClick={() => savePreference({ analytics: true, ads: true })}
      >
        Accept Ads
      </button>
      <button
        id="reject-cookies"
        style={{ margin: "5px", padding: "5px 10px", background: "#f44336", color: "#fff", border: "none", cursor: "pointer" }}
        onClick={() => savePreference({ analytics: false, ads: false })}
      >
        Reject All
      </button>
      <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "10px", color: "#4CAF50", textDecoration: "underline" }}>
        Privacy Policy
      </a>
    </div>
  );
}


