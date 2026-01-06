"use client";

import { useState, useEffect } from "react";

export interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  performance: boolean;
}

const COOKIE_STORAGE_KEY = "cookie-consent-preferences";

export const useCookiePreferences = () => {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(
    null
  );

  useEffect(() => {
    // Load preferences from localStorage
    if (typeof window !== "undefined") {
      const savedPreferences = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (savedPreferences) {
        try {
          setPreferences(JSON.parse(savedPreferences));
        } catch (error) {
          console.error("Error parsing cookie preferences:", error);
        }
      }
    }
  }, []);

  const hasConsent = (category: keyof CookiePreferences): boolean => {
    if (!preferences) return false;
    return preferences[category] ?? false;
  };

  const hasAnyConsent = (): boolean => {
    if (!preferences) return false;
    return (
      preferences.functional ||
      preferences.analytics ||
      preferences.performance
    );
  };

  return {
    preferences,
    hasConsent,
    hasAnyConsent,
  };
};

