
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Phone, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-rose-50 via-pink-50 to-nude-50 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Micropigmentação Labial</span>
                <br />
                <span className="text-gray-800">Que Realça Sua</span>
                <br />
                <span className="text-gray-800">Beleza Natural</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Transforme seus lábios com técnicas modernas e seguras. 
                Especializada em realçar a autoestima feminina através da micropigmentação labial.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">+500 clientes satisfeitas</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8"
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta para micropigmentação labial.', '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Agendar Consulta
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-rose-300 text-rose-600 hover:bg-rose-50 px-8"
                onClick={() => window.open('https://instagram.com/caroline_micropigmentacao', '_blank')}
              >
                <Instagram className="w-5 h-5 mr-2" />
                Ver Trabalhos
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in">
            <div className="relative">
              <img
                src="/lovable-uploads/5750e738-5543-424e-b227-a24cda13dddf.png"
                alt="Caroline Santos - Especialista em Micropigmentação"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600">5+</div>
                  <div className="text-sm text-gray-600">Anos de</div>
                  <div className="text-sm text-gray-600">Experiência</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600">100%</div>
                  <div className="text-sm text-gray-600">Segurança</div>
                  <div className="text-sm text-gray-600">e Qualidade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
