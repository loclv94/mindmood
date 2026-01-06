"use client";

import { useState, useEffect, startTransition } from "react";
import { X, ChevronRight, ChevronDown } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  performance: boolean;
}

const COOKIE_STORAGE_KEY = "cookie-consent-preferences";
const COOKIE_CONSENT_KEY = "cookie-consent-given";

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  performance: false,
};

export const CookieConsent = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );
  const [preferences, setPreferences] =
    useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    // Only run on client after mount to avoid hydration mismatch
    // Use startTransition to batch state updates and avoid cascading renders
    startTransition(() => {
      setIsMounted(true);

      // Check if user has already given consent
      const consentGiven = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consentGiven) {
        setIsOpen(true);
      } else {
        // Load saved preferences
        const savedPreferences = localStorage.getItem(COOKIE_STORAGE_KEY);
        if (savedPreferences) {
          try {
            setPreferences(JSON.parse(savedPreferences));
          } catch (error) {
            console.error("Error parsing cookie preferences:", error);
          }
        }
      }
    });
  }, []);

  const toggleCategory = (category: keyof CookiePreferences) => {
    if (category === "necessary") return; // Cannot toggle necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const toggleExpand = (category: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      performance: true,
    };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
    setIsOpen(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      functional: false,
      analytics: false,
      performance: false,
    };
    setPreferences(onlyNecessary);
    savePreferences(onlyNecessary);
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
    setIsOpen(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(prefs));
      localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    }
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!isMounted || !isOpen) {
    return null;
  }

  const cookieCategories = [
    {
      id: "necessary",
      name: "Necessary",
      description:
        "Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.",
      alwaysActive: true,
    },
    {
      id: "functional",
      name: "Functional",
      description:
        "Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.",
      alwaysActive: false,
    },
    {
      id: "analytics",
      name: "Analytics",
      description:
        "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
      alwaysActive: false,
    },
    {
      id: "performance",
      name: "Performance",
      description:
        "Performance cookies are used to understand and analyse the key performance indexes of the website which helps in delivering a better user experience for the visitors.",
      alwaysActive: false,
    },
  ];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200 bg-white">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
            Customise Consent Preferences
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-6 overflow-y-auto flex-1">
          {/* Introduction Text */}
          <div className="mb-8 text-sm text-gray-700 leading-relaxed">
            <p className="mb-3">
              We use cookies to help you navigate efficiently and perform
              certain functions. You will find detailed information about all
              cookies under each consent category below.
            </p>
            <p className="mb-3">
              The cookies that are categorised as{" "}
              <strong className="font-semibold text-gray-900">
                &ldquo;Necessary&rdquo;
              </strong>{" "}
              are stored on your browser as they are essential for enabling the
              basic functionalities of the site.
            </p>
            {showMore ? (
              <>
                <p className="mb-3">
                  We also use third-party cookies that help us analyse how you
                  use this website, store your preferences, and provide the
                  content and advertisements that are relevant to you. These
                  cookies will only be stored in your browser with your prior
                  consent.
                </p>
                <p className="mb-3">
                  You can choose to enable or disable some or all of these
                  cookies but disabling some of them may affect your browsing
                  experience.
                </p>
                <button
                  onClick={() => setShowMore(false)}
                  className="text-brand hover:text-brand/80 underline font-medium transition-colors"
                >
                  Show less
                </button>
              </>
            ) : (
              <p className="mb-3">
                <span className="text-gray-500">...</span>{" "}
                <button
                  onClick={() => setShowMore(true)}
                  className="text-brand hover:text-brand/80 underline font-medium transition-colors"
                >
                  Show more
                </button>
              </p>
            )}
          </div>

          {/* Cookie Categories */}
          <div className="space-y-4">
            {cookieCategories.map((category) => {
              const isExpanded = expandedCategories.has(category.id);
              const isEnabled =
                preferences[category.id as keyof CookiePreferences];

              return (
                <div
                  key={category.id}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggleExpand(category.id)}
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-gray-900 text-base">
                        {category.name}:
                      </span>
                      {category.alwaysActive && (
                        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                          Always Active
                        </span>
                      )}
                    </div>
                    {isExpanded ? (
                      <ChevronDown
                        size={20}
                        className="text-gray-400 shrink-0"
                      />
                    ) : (
                      <ChevronRight
                        size={20}
                        className="text-gray-400 shrink-0"
                      />
                    )}
                  </button>

                  {/* Category Content */}
                  {isExpanded && (
                    <div className="px-5 pb-5 border-t border-gray-100 bg-gray-50/30">
                      <p className="text-sm text-gray-600 mt-4 mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      {!category.alwaysActive && (
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <div className="relative flex items-center">
                            <input
                              type="checkbox"
                              checked={isEnabled}
                              onChange={() =>
                                toggleCategory(
                                  category.id as keyof CookiePreferences
                                )
                              }
                              className="w-5 h-5 text-brand border-gray-300 rounded focus:ring-2 focus:ring-brand focus:ring-offset-2 cursor-pointer transition-colors"
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                            Enable {category.name} cookies
                          </span>
                        </label>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-8 py-6 border-t border-gray-200 bg-gray-50/50">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleRejectAll}
              className="flex-1 px-6 py-3.5 bg-brand text-white rounded-lg hover:bg-brand/90 transition-all font-semibold text-sm shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              Reject All
            </button>
            <button
              onClick={handleSavePreferences}
              className="flex-1 px-6 py-3.5 bg-brand text-white rounded-lg hover:bg-brand/90 transition-all font-semibold text-sm shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              Save My Preferences
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex-1 px-6 py-3.5 bg-brand text-white rounded-lg hover:bg-brand/90 transition-all font-semibold text-sm shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
