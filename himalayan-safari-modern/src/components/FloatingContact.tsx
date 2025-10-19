import { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="mb-4 flex flex-col gap-3"
          >
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/977123456789?text=Hi!%20I%27m%20interested%20in%20booking%20a%20trek"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-semibold text-sm">WhatsApp</span>
            </a>

            {/* Call Button */}
            <a
              href="tel:+977123456789"
              className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold text-sm">Call Now</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all ${
          isOpen
            ? 'bg-gray-700 hover:bg-gray-800'
            : 'bg-gradient-to-r from-himalayan-blue to-blue-600 hover:from-blue-600 hover:to-himalayan-blue'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </motion.button>

      {/* Pulse Animation when closed */}
      {!isOpen && (
        <span className="absolute top-0 right-0 flex h-14 w-14 -z-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-himalayan-blue opacity-75"></span>
        </span>
      )}
    </div>
  );
};

export default FloatingContact;
