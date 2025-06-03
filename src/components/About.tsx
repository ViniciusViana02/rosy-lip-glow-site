
import React from 'react';
import { Heart, Award, Users, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Clientes Atendidas' },
    { icon: Award, number: '5+', label: 'Anos de Experiência' },
    { icon: Heart, number: '100%', label: 'Satisfação' },
    { icon: Shield, number: '100%', label: 'Segurança' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src="/lovable-uploads/5750e738-5543-424e-b227-a24cda13dddf.png"
                alt="Caroline Santos"
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-slide-in">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Sobre <span className="gradient-text">Caroline Santos</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"></div>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Olá! Sou a <strong>Caroline Santos</strong>, tenho 29 anos, sou casada e mãe de dois filhos. 
                Minha paixão pela área da beleza me levou a me especializar em micropigmentação labial.
              </p>
              
              <p>
                Acredito que cada mulher merece se sentir linda e confiante. Por isso, dedico meu trabalho 
                a realçar a beleza natural através de técnicas modernas e seguras, sempre priorizando 
                o bem-estar e a autoestima das minhas clientes.
              </p>

              <p>
                Com mais de 5 anos de experiência na área, tenho o privilégio de transformar a vida 
                de centenas de mulheres, oferecendo resultados naturais e duradouros que destacam 
                a beleza única de cada uma.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-rose-50 rounded-xl">
                  <stat.icon className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-rose-600">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
