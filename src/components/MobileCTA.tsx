import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-0 left-0 w-full z-40 md:hidden pb-6 px-4 pointer-events-none"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="glass-panel rounded-full p-2 flex items-center justify-between gap-2 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] pointer-events-auto border-brand-red/30">
            <a 
              href="tel:4078618268" 
              className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-full flex items-center justify-center gap-2 font-semibold text-sm active:scale-95 transition-transform"
            >
              <Phone size={16} />
              Call
            </a>
            <a 
              href="https://wa.me/14078618268" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-brand-red hover:bg-brand-red-light text-white py-3 rounded-full flex items-center justify-center gap-2 font-semibold text-sm active:scale-95 transition-transform shadow-[0_0_15px_rgba(140,0,28,0.4)]"
            >
              <MessageCircle size={16} />
              Text Us
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
