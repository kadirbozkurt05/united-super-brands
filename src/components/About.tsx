'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Target, Users, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations();

  const features = [
    {
      icon: Target,
      title: t('about.features.unity.title'),
      description: t('about.features.unity.description')
    },
    {
      icon: Users,
      title: t('about.features.team.title'),
      description: t('about.features.team.description')
    },
    {
      icon: Globe,
      title: t('about.features.network.title'),
      description: t('about.features.network.description')
    },
    {
      icon: CheckCircle,
      title: t('about.features.quality.title'),
      description: t('about.features.quality.description')
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('about.vision')}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('about.visionText')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('about.visionText2')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('about.stats.companies')}</h4>
                  <p className="text-gray-600">{t('about.stats.companiesDesc')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">∞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('about.stats.unlimited')}</h4>
                  <p className="text-gray-600">{t('about.stats.unlimitedDesc')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">100%</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('about.stats.customer')}</h4>
                  <p className="text-gray-600">{t('about.stats.customerDesc')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
