'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

const locales = ['tr', 'en', 'nl', 'de', 'es', 'ar'];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Pathname'den locale'i çıkar
  const getCurrentLocale = useCallback(() => {
    for (const loc of locales) {
      if (pathname.startsWith(`/${loc}`)) {
        return loc;
      }
    }
    return 'tr'; // Varsayılan
  }, [pathname]);

  const locale = getCurrentLocale();

  // Browser dilini algıla ve localStorage'dan tercih al
  const getPreferredLocale = () => {
    // Önce localStorage'dan tercih kontrol et
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('preferred-locale');
      if (savedLocale && locales.includes(savedLocale)) {
        return savedLocale;
      }
    }

    // Browser dilini kontrol et
    if (typeof window !== 'undefined' && navigator.language) {
      const browserLang = navigator.language.split('-')[0]; // 'en-US' -> 'en'
      
      // Desteklenen dillerle eşleştir
      const supportedBrowserLang = locales.find(loc => 
        browserLang === loc || 
        browserLang.startsWith(loc) || 
        loc.startsWith(browserLang)
      );
      
      if (supportedBrowserLang) {
        return supportedBrowserLang;
      }
    }

    return 'tr'; // Varsayılan
  };

  // Sayfa yüklendiğinde otomatik dil yönlendirmesi
  useEffect(() => {
    const preferredLocale = getPreferredLocale();
    const currentLocale = getCurrentLocale();
    
    // Eğer mevcut locale tercih edilen locale değilse yönlendir
    if (preferredLocale !== currentLocale) {
      let pathWithoutLocale = pathname;
      
      // Mevcut locale'i path'den çıkar
      for (const loc of locales) {
        if (pathname.startsWith(`/${loc}`)) {
          pathWithoutLocale = pathname.replace(`/${loc}`, '');
          break;
        }
      }
      
      // Eğer path boşsa, root'a yönlendir
      if (!pathWithoutLocale || pathWithoutLocale === '') {
        pathWithoutLocale = '/';
      }
      
      const newPath = `/${preferredLocale}${pathWithoutLocale}`;
      router.push(newPath as any);
    }
  }, [pathname, router, getCurrentLocale]);



  const languageFlags = {
    tr: '🇹🇷',
    en: '🇺🇸',
    nl: '🇳🇱',
    de: '🇩🇪',
    es: '🇪🇸',
    ar: '🇸🇦'
  };

  const languageNames = {
    tr: 'Türkçe',
    en: 'English',
    nl: 'Nederlands',
    de: 'Deutsch',
    es: 'Español',
    ar: 'العربية'
  };

  const handleLanguageChange = (newLocale: string) => {
    // Tercihi localStorage'a kaydet
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-locale', newLocale);
    }
    
    // Mevcut path'den locale'i çıkar
    let pathWithoutLocale = pathname;
    
    // Eğer pathname locale ile başlıyorsa, onu çıkar
    for (const loc of locales) {
      if (pathname.startsWith(`/${loc}`)) {
        pathWithoutLocale = pathname.replace(`/${loc}`, '');
        break;
      }
    }
    
    // Eğer path boşsa, root'a yönlendir
    if (!pathWithoutLocale || pathWithoutLocale === '') {
      pathWithoutLocale = '/';
    }
    
    // Yeni path oluştur
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    
    router.push(newPath as any);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
      >
        <Globe className="w-4 h-4" />
        <span className="text-lg">{languageFlags[locale as keyof typeof languageFlags]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {locales.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200 ${
                locale === lang
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              }`}
            >
              <span className="text-lg">{languageFlags[lang as keyof typeof languageFlags]}</span>
              <span>{languageNames[lang as keyof typeof languageNames]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
