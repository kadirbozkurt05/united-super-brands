export interface Company {
  id: string;
  translationKey: string;
  image: string;
  bgColor: string;
  contact: {
    phone: string;
    email: string;
    website: string;
    address: string;
    fax?: string;
  };
}

export const companies: Company[] = [
  {
    id: 'alba-food-trading',
    translationKey: 'albaFoodTrading',
    image: '/assets/companies/albaBv.png',
    bgColor: '#FFFFFF',
    contact: {
      phone: '+31 17 255 1736',
      email: 'info@albafood.nl',
      website: 'www.albafood.nl',
      address: 'Magazijnweg 12R, 2404 CE Alphen aan den Rijn, Netherlands'
    }
  },
  {
    id: 'alba-food-amsterdam',
    translationKey: 'albaFoodAmsterdam',
    bgColor: '#FFFFFF',
    image: '/assets/companies/alba.png',
    contact: {
      phone: '+31 20 488 9351',
      email: 'info@albafood.nl',
      website: 'www.albafood.nl',
      address: 'Jan van Galenstraat 4, 1051 KM Amsterdam, Netherlands'
    }
  },
  {
    id: 'usb-food',
    translationKey: 'usbFood',
    bgColor: '#EDF3F5',
    image: '/assets/companies/usbfood.png',
    contact: {
      phone: '+31 20 488 9351',
      email: 'info@usbfood.nl',
      website: 'www.usbfood.nl',
      address: 'Jan van Galenstraat 4, 1051 KM Amsterdam, Netherlands'
    }
  },
  {
    id: 'dutcheys',
    translationKey: 'dutcheys',
    bgColor: '#F05C21',
    image: '/assets/companies/dutcheys.jpeg',
    contact: {
      phone: '010-318 1008',
      fax: '010-318 1008',
      email: 'info@dutcheys.com',
      website: 'www.dutcheys.com',
      address: 'Barbizonlaan 70, 2908 ME Capelle aan den IJssel'
    }
  }
];
