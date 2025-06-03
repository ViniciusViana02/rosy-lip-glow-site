
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Palette, Sparkles, Heart, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Micropigmentação Labial Natural',
      description: 'Técnica que realça a cor natural dos lábios, proporcionando um resultado discreto e elegante.',
      duration: '2-3 horas',
      features: ['Cor natural', 'Resultado discreto', 'Longa duração'],
      icon: Heart
    },
    {
      title: 'Micropigmentação Labial Colorida',
      description: 'Para quem deseja mais intensidade, oferecemos cores vibrantes e modernas.',
      duration: '2-3 horas', 
      features: ['Cores vibrantes', 'Efeito batom', 'Personalizado'],
      icon: Palette
    },
    {
      title: 'Retoque e Manutenção',
      description: 'Mantenha seus lábios sempre perfeitos com nosso serviço de retoque.',
      duration: '1-2 horas',
      features: ['Renovação da cor', 'Correções', 'Durabilidade'],
      icon: Sparkles
    }
  ];

  const benefits = [
    'Resultados naturais e duradouros',
    'Técnicas modernas e seguras',
    'Materiais de alta qualidade',
    'Ambiente higienizado',
    'Atendimento personalizado',
    'Acompanhamento pós-procedimento'
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos técnicas modernas de micropigmentação labial para realçar sua beleza natural
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-none shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 text-center">{service.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      Duração:
                    </span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
                  onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o serviço: ' + service.title, '_blank')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Agendar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Por que escolher nossos serviços?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
