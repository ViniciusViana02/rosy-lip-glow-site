
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: '/lovable-uploads/204dbbe9-8557-48c1-97a4-1ae28b70ae33.png',
      alt: 'Micropigmentação Labial - Resultado 1',
      category: 'Natural'
    },
    {
      src: '/lovable-uploads/1ac8595e-8491-4329-83d9-cef0bc6caab6.png',
      alt: 'Micropigmentação Labial - Resultado 2',
      category: 'Natural'
    },
    {
      src: '/lovable-uploads/0b4f039f-6844-4bbc-9672-23f5846c2eb4.png',
      alt: 'Micropigmentação Labial - Resultado 3',
      category: 'Colorida'
    },
    {
      src: '/lovable-uploads/532e298c-3b65-4d70-b6b6-ffd32ed1dfb9.png',
      alt: 'Micropigmentação Labial - Antes e Depois',
      category: 'Antes/Depois'
    },
    {
      src: '/lovable-uploads/f8ec50d1-e7b8-4723-bfc1-0011e5d42dc6.png',
      alt: 'Micropigmentação Labial - Resultado 5',
      category: 'Natural'
    },
    {
      src: '/lovable-uploads/36e9542c-1730-4728-936d-6ab437ff8692.png',
      alt: 'Micropigmentação Labial - Resultado 6',
      category: 'Colorida'
    },
    {
      src: '/lovable-uploads/7167a36b-cd2b-4048-a095-7104c8e7a107.png',
      alt: 'Micropigmentação Labial - Resultado 7',
      category: 'Colorida'
    },
    {
      src: '/lovable-uploads/c625b10f-faf1-4ccb-98ba-b503352088cd.png',
      alt: 'Micropigmentação Labial - Resultado 8',
      category: 'Natural'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Galeria de <span className="gradient-text">Trabalhos</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos e se inspire para sua transformação
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-medium">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">Gostou do que viu? Agende sua consulta!</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
            onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Vi a galeria e gostaria de agendar uma consulta.', '_blank')}
          >
            Agendar Consulta
          </Button>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-full">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
