
import React from 'react';
import { Heart, Instagram, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"></div>
              <span className="font-playfair font-bold text-xl">Caroline Santos</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Especialista em micropigmentação labial, dedicada a realçar a beleza natural 
              e elevar a autoestima de cada cliente.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => window.open('https://instagram.com/caroline_micropigmentacao', '_blank')}
                className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { label: 'Início', id: 'home' },
                { label: 'Sobre', id: 'about' },
                { label: 'Serviços', id: 'services' },
                { label: 'Galeria', id: 'gallery' },
                { label: 'Depoimentos', id: 'testimonials' },
                { label: 'Contato', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-rose-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Instagram className="w-5 h-5" />
                <span>@caroline_micropigmentacao</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1" />
                <span>Rua das Flores, 123<br />Centro, São Paulo - SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © 2024 Caroline Santos - Micropigmentação Labial. Feito com 
            <Heart className="w-4 h-4 mx-2 text-rose-500" />
            para realçar sua beleza.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
