
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      age: 32,
      text: 'A Caroline é simplesmente incrível! O resultado da micropigmentação ficou muito natural e exatamente como eu queria. Recomendo de olhos fechados!',
      rating: 5,
      service: 'Micropigmentação Natural'
    },
    {
      name: 'Ana Paula',
      age: 28,
      text: 'Sempre tive complexo com meus lábios, mas após o procedimento com a Caroline minha autoestima mudou completamente. Profissional excepcional!',
      rating: 5,
      service: 'Micropigmentação Colorida'
    },
    {
      name: 'Júlia Santos',
      age: 35,
      text: 'Ambiente super limpo, atendimento carinhoso e resultado perfeito. A Caroline é uma artista! Já indiquei para todas as minhas amigas.',
      rating: 5,
      service: 'Retoque'
    },
    {
      name: 'Fernanda Costa',
      age: 29,
      text: 'O cuidado e atenção da Caroline são únicos. Explicou todo o processo, tirou todas as dúvidas e o resultado superou minhas expectativas!',
      rating: 5,
      service: 'Micropigmentação Natural'
    },
    {
      name: 'Camila Oliveira',
      age: 31,
      text: 'Estava insegura sobre fazer o procedimento, mas a Caroline me tranquilizou. Resultado maravilhoso e cicatrização perfeita!',
      rating: 5,
      service: 'Micropigmentação Colorida'
    },
    {
      name: 'Patrícia Lima',
      age: 27,
      text: 'Melhor investimento que fiz para minha autoestima! A Caroline é super profissional e carinhosa. Acordar já maquiada é maravilhoso!',
      rating: 5,
      service: 'Micropigmentação Natural'
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O que nossas <span className="gradient-text">clientes dizem</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Depoimentos reais de clientes que transformaram sua autoestima conosco
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-none shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-rose-300 mb-4" />
                  <p className="text-gray-600 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.age} anos</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="inline-block bg-rose-100 text-rose-700 text-xs px-3 py-1 rounded-full">
                    {testimonial.service}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-600">Clientes Satisfeitas</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">5.0</div>
              <div className="text-gray-600">Avaliação Média</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <div className="text-gray-600">Recomendam</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-600">Segurança</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
