import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Locale kontrolü
  if (!locale) {
    locale = 'tr';
  }

  // Desteklenen diller kontrolü
  const supportedLocales = ['tr', 'en', 'nl', 'de', 'es', 'ar'];
  if (!supportedLocales.includes(locale)) {
    locale = 'tr';
  }

  try {
    const messages = (await import(`./messages/${locale}.json`)).default;
    
    return {
      locale,
      messages
    };
  } catch {
    // Fallback to Turkish
    const fallbackMessages = (await import(`./messages/tr.json`)).default;
    
    return {
      locale: 'tr',
      messages: fallbackMessages
    };
  }
});
