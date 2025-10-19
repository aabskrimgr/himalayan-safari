import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Mountain, Compass, TreePine } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80',
      title: 'Discover the Himalayas',
      subtitle: 'Experience the World\'s Most Majestic Mountains',
      description: 'Trek through pristine landscapes and ancient cultures',
      icon: Mountain,
    },
    {
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80',
      title: 'Adventure Awaits',
      subtitle: 'Journey to Everest Base Camp',
      description: 'Walk in the footsteps of legends',
      icon: Compass,
    },
    {
      image: 'https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?auto=format&fit=crop&w=1920&q=80',
      title: 'Breathtaking Sunrises',
      subtitle: 'Witness Golden Himalayan Views',
      description: 'From Poon Hill to Kala Patthar',
      icon: TreePine,
    },
    {
      image: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?auto=format&fit=crop&w=1920&q=80',
      title: 'Wildlife & Culture',
      subtitle: 'Chitwan to Kathmandu Valley',
      description: 'Experience Nepal\'s diverse beauty',
      icon: Mountain,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image with Ken Burns effect */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 10, ease: 'linear' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />
          </motion.div>
          
          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-5xl">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="mb-6 flex justify-center"
              >
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-full">
                  {(() => {
                    const IconComponent = slides[currentSlide].icon;
                    return <IconComponent className="h-12 w-12 text-white" />;
                  })()}
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, type: 'spring', stiffness: 100 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl"
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl md:text-4xl text-white/95 mb-4 drop-shadow-lg font-light"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg md:text-xl text-white/80 mb-10 drop-shadow-lg"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="/booking"
                  className="group px-8 py-4 bg-himalayan-blue text-white rounded-full font-semibold hover:bg-white hover:text-himalayan-blue transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2"
                >
                  Book Now
                  <Mountain className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                </a>
                <a
                  href="#treks"
                  className="px-8 py-4 bg-transparent backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white hover:text-himalayan-blue border-2 border-white transform hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  View Adventures
                </a>
              </motion.div>
            </div>
          </div>

          {/* Animated overlay particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, -100],
                  x: Math.random() * 100 - 50,
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="absolute bottom-0 w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <motion.button
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 z-10 border border-white/20 group"
      >
        <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 z-10 border border-white/20 group"
      >
        <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
      </motion.button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10 bg-black/20 backdrop-blur-md px-4 py-3 rounded-full">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`relative transition-all duration-300 ${
              index === currentSlide ? 'w-10' : 'w-3'
            }`}
          >
            <div className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white shadow-lg shadow-white/50' 
                : 'bg-white/40 hover:bg-white/60'
            }`} />
            {index === currentSlide && (
              <motion.div
                layoutId="activeSlide"
                className="absolute inset-0 bg-white/20 rounded-full"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
