'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const t = useTranslations();

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.png"
          alt="United Super Brands Hero"
          fill
          className="object-cover hidden md:block"
          priority
        />
        <Image
          src="/assets/hero-mobil.png"
          alt="United Super Brands Hero Mobile"
          fill
          className="object-cover md:hidden"
          priority
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: -40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="#alba-food-trading">          
          <button  className=" cursor-pointer bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            {t('hero.discoverButton')}
            <ArrowRight className="w-5 h-5" />
          </button></Link>  

          <Link href="#contact">          <button className=" cursor-pointer border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
            {t('hero.contactButton')}
          </button></Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
