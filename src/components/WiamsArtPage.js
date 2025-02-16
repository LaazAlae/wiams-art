import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, Instagram } from 'lucide-react';

const WiamsArtPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const artworks = [
    {
      id: 1,
      title: "Mountain Trail",
      description: "Landscape with cherry blossoms",
      image: "/2025-02-15 22-43-2.jpg"
    },
    {
      id: 2,
      title: "Pink Roses",
      description: "Watercolor vase of roses",
      image: "/2025-02-15 22-43-4.jpg"
    },
    {
      id: 3,
      title: "Spring Horses",
      description: "Horses under cherry blossoms",
      image: "/2025-02-15 22-43-3.jpg"
    },
    {
      id: 4,
      title: "Moroccan Dreams",
      description: "Interior scene with collage",
      image: "/2025-02-15 22-43-1.jpg"
    },
    {
      id: 5,
      title: "Nature's Poetry",
      description: "Bird among roses, pencil on paper",
      image: "/2025-02-15 22-43-5.jpg"
    }
  ];

  const handleNavigation = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = artworks.length - 1;
    if (newIndex >= artworks.length) newIndex = 0;
    setCurrentIndex(newIndex);
    setSelectedImage(artworks[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-950 to-rose-200 text-neutral-200">
      {/* Instagram Link */}
      <motion.a
        href="https://instagram.com/wiamsartpage"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
      >
        <Instagram className="text-rose-600/90" size={20} />
        <span className="text-neutral-700/90 font-medium">@wiamsartpage</span>
      </motion.a>

      {/* Enhanced Header */}
      <header className="pt-20 pb-16 px-4 text-center border-b border-rose-200">
        <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="space-y-4"
        >
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-rose-200 mb-2 tracking-tight">
            Wiam's Art
            </h1>
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-rose-200 font-light text-lg max-w-2xl mx-auto tracking-tight"
            >
            Where Nature Meets Imagination
            </motion.p>
        </motion.div>
        </header>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div 
          className="flex flex-wrap justify-center gap-8"
          layout
        >
          {artworks.map((artwork, index) => (
            <motion.article
              key={artwork.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, rotate: -1 }}
              className="relative group cursor-pointer w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-md"
              onClick={() => {
                setSelectedImage(artwork);
                setCurrentIndex(index);
              }}
              layoutId={`card-${artwork.id}`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white/95">
                    <h3 className="text-xl font-medium mb-1 tracking-tight">{artwork.title}</h3>
                    <p className="text-sm font-light opacity-90 tracking-tight">{artwork.description}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3} }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-6xl w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex gap-4">
              <motion.button
  onClick={() => handleNavigation(-1)}
  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 hover:scale-110 transition-transform z-10"
>
  <ArrowLeft size={40} />
</motion.button>
                
                <div className="relative">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-[80vh] object-contain rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-8 pt-16">
                    <div className="max-w-2xl mx-auto text-center">
                      <h2 className="text-3xl font-serif text-white/95 mb-2 tracking-tight">
                        {selectedImage.title}
                      </h2>
                      <p className="text-neutral-300/95 font-light mb-4 tracking-tight">
                        {selectedImage.description}
                      </p>
                      <div className="flex justify-center gap-2">
                        {artworks.map((_, idx) => (
                          <div 
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-rose-400/90' : 'bg-white/30'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleNavigation(1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 hover:scale-110 transition-transform"
                >
                  <ArrowRight size={40} />
                </button>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-16 right-0 text-white/80 hover:text-white transition-colors hover:scale-110"
              >
                <X size={36} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle Footer */}
      <footer className="pb-8 text-center">
        <p className="text-neutral-500/80 text-sm font-light tracking-tight">
          © 2025 Wiam's Art. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default WiamsArtPage;