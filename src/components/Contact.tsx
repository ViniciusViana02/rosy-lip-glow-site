
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Instagram, Clock, Mail } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '(11) 99999-9999',
      action: () => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta.', '_blank')
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@caroline_micropigmentacao',
      action: () => window.open('https://instagram.com/caroline_micropigmentacao', '_blank')
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua das Flores, 123 - Centro, São Paulo - SP',
      action: () => window.open('https://maps.google.com/?q=Rua+das+Flores+123+Centro+São+Paulo+SP', '_blank')
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'caroline@micropigmentacao.com.br',
      action: () => window.open('mailto:caroline@micropigmentacao.com.br', '_blank')
    }
  ];

  const schedule = [
    { day: 'Segunda a Sexta', hours: '09:00 - 18:00' },
    { day: 'Sábado', hours: '09:00 - 16:00' },
    { day: 'Domingo', hours: 'Fechado' }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos prontas para atendê-la e esclarecer todas as suas dúvidas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Fale Conosco
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-none shadow-md" onClick={info.action}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{info.title}</h4>
                          <p className="text-gray-600">{info.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-rose-600" />
                Horário de Funcionamento
              </h3>
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {schedule.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{item.day}</span>
                        <span className="font-medium text-gray-800">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="animate-slide-in">
            <Card className="bg-gradient-to-br from-rose-500 to-pink-500 text-white border-none shadow-xl">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold">
                    Pronta para Transformar Seus Lábios?
                  </h3>
                  <p className="text-rose-100 leading-relaxed">
                    Agende sua consulta agora mesmo e descubra como a micropigmentação 
                    labial pode realçar sua beleza natural e elevar sua autoestima.
                  </p>
                  
                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full bg-white text-rose-600 hover:bg-rose-50 font-semibold"
                      onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta para micropigmentação labial.', '_blank')}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Agendar via WhatsApp
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-white text-white hover:bg-white hover:text-rose-600"
                      onClick={() => window.open('https://instagram.com/caroline_micropigmentacao', '_blank')}
                    >
                      <Instagram className="w-5 h-5 mr-2" />
                      Seguir no Instagram
                    </Button>
                  </div>

                  <div className="pt-6 border-t border-rose-400">
                    <p className="text-sm text-rose-100">
                      <strong>Primeira consulta gratuita!</strong><br />
                      Tire todas as suas dúvidas sem compromisso.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <div className="mt-8">
              <Card className="border-none shadow-md overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center cursor-pointer" onClick={() => window.open('https://maps.google.com/?q=Rua+das+Flores+123+Centro+São+Paulo+SP', '_blank')}>
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-rose-600 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Clique para ver no Google Maps</p>
                    <p className="text-sm text-gray-500">Rua das Flores, 123 - Centro, São Paulo</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
