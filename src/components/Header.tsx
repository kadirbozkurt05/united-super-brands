'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { companies } from '../data/companies';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompaniesOpen, setIsCompaniesOpen] = useState(false);
  const t = useTranslations();


  const navigation = [
    { name: t('navigation.home'), href: '#home' },
    { name: t('navigation.about'), href: '#about' },
    { name: t('navigation.companies'), href: '#', hasDropdown: true, dropdownItems: companies },
    { name: t('navigation.contact'), href: '#contact' },
  ];

  return (
    <header className="fixed cursor-pointer top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="United Super Brands Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative flex items-center">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsCompaniesOpen(true)}
                    onMouseLeave={() => setIsCompaniesOpen(false)}
                  >
                    <div className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer">
                      {item.name}
                    </div>
                    
                    {isCompaniesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                        {item.dropdownItems?.map((company) => (
                          <a
                            key={t(`companies.${company.translationKey}.name`)}
                            href={`#${company.id}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {t(`companies.${company.translationKey}.name`)}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.home')}
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.about')}
              </a>
              
              {/* Mobile Companies Dropdown */}
              <div>
                <button
                  onClick={() => setIsCompaniesOpen(!isCompaniesOpen)}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left flex items-center justify-between"
                >
                  {t('navigation.companies')}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isCompaniesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCompaniesOpen && (
                  <div className="pl-4 space-y-1">
                    {companies.map((company) => (
                      <a
                        key={t(`companies.${company.translationKey}.name`)}
                        href={`#${company.id}`}
                        className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-sm font-medium transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t(`companies.${company.translationKey}.name`)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.contact')}
              </a>

              {/* Mobile Language Switcher */}
              <div className="pt-2 border-t border-gray-200">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
