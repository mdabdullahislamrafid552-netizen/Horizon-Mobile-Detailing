import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function ParallaxBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section ref={ref} className="h-[60vh] min-h-[400px] relative overflow-hidden flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 z-0 w-full h-[140%]"
        style={{ y, scale }}
      >
        <img 
          src="https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/530683978_17850958698530308_2119902438188404963_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=110&ig_cache_key=MzY5NjkzNjQ3MzgyOTE1OTcwMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5oZHIuQzMifQ%3D%3D&_nc_ohc=qdJNKFgbmhoQ7kNvwEQXFcs&_nc_oc=AdpAcUY6oxkuZslhQmOowlVJTRE6tBw2CwY86MYb9iLaJ25kP3VIn02q9A6n2MBJJOQ&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=wOj4kjavZb0IRWlCBJxrUg&_nc_ss=7a32e&oh=00_AfyX64brLpgM571qHf25vQX0QB01ECkqjflC0NpYErrW3Q&oe=69CF4737" 
          alt="Ceramic Coating Detail" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </motion.div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black/40 backdrop-blur-xl p-10 md:p-16 rounded-[2.5rem] inline-block max-w-4xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <h2 className="text-sm md:text-base font-bold tracking-[0.3em] text-zinc-400 uppercase mb-6">
            Exclusive Offer
          </h2>
          <p className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-white mb-6 leading-tight">
            March Special.
          </p>
          <p className="text-2xl md:text-3xl text-zinc-200 font-light tracking-tight mb-8">
            $200 OFF <span className="font-semibold">8-Year Ceramic Coating</span>
          </p>
          <p className="text-zinc-400 mb-10 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Lock in the ultimate protection for your vehicle's paint. Our premium ceramic coating provides long-lasting gloss, hydrophobic properties, and defense against the Florida elements.
          </p>
          <a 
            href="#contact" 
            className="relative inline-flex items-center justify-center bg-white text-black px-12 py-5 rounded-full font-medium text-lg transition-all hover:scale-105 active:scale-95 overflow-hidden group/btn"
          >
            <span className="relative z-10">Claim Offer Now</span>
            <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
