
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Início', id: 'home' },
    { label: 'Sobre', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Galeria', id: 'gallery' },
    { label: 'Depoimentos', id: 'testimonials' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"></div>
            <span className="font-playfair font-bold text-xl text-gray-800">Caroline Santos</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-rose-600 transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://instagram.com/caroline_micropigmentacao', '_blank')}
              className="border-rose-300 text-rose-600 hover:bg-rose-50"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Instagram
            </Button>
            <Button
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta para micropigmentação labial.', '_blank')}
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
            >
              <Phone className="w-4 h-4 mr-2" />
              Agendar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <nav className="py-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-rose-300 text-rose-600 hover:bg-rose-50"
                  onClick={() => window.open('https://instagram.com/caroline_micropigmentacao', '_blank')}
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
                  onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta para micropigmentação labial.', '_blank')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Agendar Consulta
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
