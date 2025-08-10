'use client';

import { motion } from 'framer-motion';
import { 
  Building2, 
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { useTranslations } from 'next-intl';

const Companies = () => {
  const t = useTranslations();

  const companies = [
    {
      id: 'alba-food',
      name: t('companies.albaFood.name'),
      description: t('companies.albaFood.description'),
      image: '/assets/alba-food.jpg',
      features: t.raw('companies.albaFood.features'),
      contact: {
        phone: '+90 (212) 555 0101',
        email: 'info@albafood.com',
        address: 'İstanbul, Türkiye'
      }
    },
    {
      id: 'usb-food',
      name: t('companies.usbFood.name'),
      description: t('companies.usbFood.description'),
      image: '/assets/usb-food.jpg',
      features: t.raw('companies.usbFood.features'),
      contact: {
        phone: '+90 (212) 555 0102',
        email: 'info@usbfood.com',
        address: 'İstanbul, Türkiye'
      }
    },
    {
      id: 'lorem-ipsum-1',
      name: t('companies.loremIpsum1.name'),
      description: t('companies.loremIpsum1.description'),
      image: '/assets/lorem-ipsum-1.jpg',
      features: t.raw('companies.loremIpsum1.features'),
      contact: {
        phone: '+90 (212) 555 0103',
        email: 'info@loremipsum1.com',
        address: 'İstanbul, Türkiye'
      }
    },
    {
      id: 'lorem-ipsum-2',
      name: t('companies.loremIpsum2.name'),
      description: t('companies.loremIpsum2.description'),
      image: '/assets/lorem-ipsum-2.jpg',
      features: t.raw('companies.loremIpsum2.features'),
      contact: {
        phone: '+90 (212) 555 0104',
        email: 'info@loremipsum2.com',
        address: 'İstanbul, Türkiye'
      }
    }
  ];

  return (
    <section id="companies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('companies.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('companies.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-20">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              id={company.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Company Info */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {company.name}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {company.description}
                </p>
                
                {/* Features */}
                <div className="space-y-4 mb-8">
                  {company.features.map((feature: string, featureIndex: number) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('companies.contactInfo')}</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600">{company.contact.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600">{company.contact.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600">{company.contact.address}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">Görsel Eklenecek</p>
                        <p className="text-sm text-gray-500 mt-2">{company.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('companies.cta.title')}
            </h3>
            <p className="text-xl mb-8 opacity-90">
              {t('companies.cta.subtitle')}
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              {t('companies.cta.button')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Companies;
