import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight, Star } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center overflow-hidden bg-black">
      {/* Background Image with Parallax & Slow Zoom */}
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        style={{ y, opacity }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <img 
          src="https://images.squarespace-cdn.com/content/v1/68793edd05fbc21b41bf1e17/865350ba-1e2b-4fcd-a312-963e335ba1a3/audi+edited.jpg" 
          alt="Luxury Car Detailing" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Dark Gradient Overlay - adjusted for left alignment */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-noise z-20" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-30 pt-20">
        <div className="max-w-3xl text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-red/30 mb-8"
          >
            <Star className="text-brand-red fill-brand-red" size={14} />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-300">
              5-Star Mobile Detailing in Central FL
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter text-white mb-6 leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            SHOWROOM SHINE.<br />
            <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-400 tracking-tight">
              Delivered.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Premium mobile auto detailing and ceramic coating services brought directly to your home or office in Orlando and surrounding areas.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto relative group overflow-hidden bg-white text-black px-10 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Your Detail
                <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
            </motion.a>
            <motion.a 
              href="#services" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto glass hover:bg-white/10 text-white px-10 py-4 rounded-full font-medium text-lg flex items-center justify-center transition-all"
            >
              View Services
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">Scroll</span>
        <div className="w-px h-12 bg-zinc-800 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-red"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
