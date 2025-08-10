import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');
  
  // Desteklenen diller
  const supportedLocales = ['tr', 'en', 'nl', 'de', 'es', 'ar'];
  
  // Browser dilini algıla
  let preferredLocale = 'tr'; // Varsayılan
  
  if (acceptLanguage) {
    const browserLang = acceptLanguage.split(',')[0].split('-')[0]; // 'en-US,en;q=0.9' -> 'en'
    
    // Desteklenen dillerle eşleştir
    const matchedLocale = supportedLocales.find(loc => 
      browserLang === loc || 
      browserLang.startsWith(loc) || 
      loc.startsWith(browserLang)
    );
    
    if (matchedLocale) {
      preferredLocale = matchedLocale;
    }
  }
  
  redirect(`/${preferredLocale}`);
}
