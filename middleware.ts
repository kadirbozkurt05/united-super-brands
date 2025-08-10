import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Desteklenen diller
  locales: ['tr', 'en', 'nl', 'de', 'es', 'ar'],
  
  // Varsayılan dil
  defaultLocale: 'tr',
  
  // Locale detection aktif
  localeDetection: true,
  
  // Locale prefix her zaman gerekli
  localePrefix: 'always'
});

export const config = {
  // Middleware'in çalışacağı path'ler
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
