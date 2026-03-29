import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function TrustBanner() {
  const items = [
    "5-Star Rated Service",
    "Mobile Convenience",
    "Premium Products",
    "Trained Professionals",
    "Satisfaction Guaranteed",
    "Orlando & Surrounding Areas",
    "Ceramic Coating Experts",
    "Showroom Quality Results"
  ];

  // Duplicate items to ensure smooth infinite scroll
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="w-full bg-brand-red-dark/20 border-y border-brand-red/20 py-4 overflow-hidden relative flex items-center">
      {/* Gradient masks for smooth fade on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 30 
        }}
      >
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center mx-6 md:mx-12">
            <Star className="text-brand-red fill-brand-red mr-3" size={16} />
            <span className="text-sm md:text-base font-semibold tracking-wider uppercase text-zinc-300">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
