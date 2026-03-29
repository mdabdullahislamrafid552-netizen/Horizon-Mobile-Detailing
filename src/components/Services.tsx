import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Wrench, MapPin, Droplets, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Full Detail',
    subtitle: 'Most Popular',
    description: 'The ultimate package for a complete vehicle transformation, combining our interior and exterior detailing services.',
    icon: <Sparkles size={24} className="text-brand-red" />,
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2940&auto=format&fit=crop',
    colSpan: 'md:col-span-2 lg:col-span-2',
    rowSpan: 'md:row-span-2',
    link: '/services/full-detail'
  },
  {
    title: 'Ceramic Coating',
    subtitle: 'Professional Protection',
    description: 'Long-lasting paint protection against elements, UV rays, and minor scratches. March Special: $200 OFF 8-Year Coating.',
    icon: <ShieldCheck size={24} className="text-brand-red" />,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2940&auto=format&fit=crop',
    colSpan: 'md:col-span-1 lg:col-span-1',
    rowSpan: 'md:row-span-1',
    link: '/services/ceramic-coating'
  },
  {
    title: 'Paint Correction',
    subtitle: 'Flawless Finish',
    description: 'Expert scratch and swirl removal. Restores depth, clarity, and ultimate shine to your vehicle\'s clear coat.',
    icon: <Wrench size={24} className="text-brand-red" />,
    image: 'https://images.unsplash.com/photo-1552930294-6b595f4c2974?q=80&w=2940&auto=format&fit=crop',
    colSpan: 'md:col-span-1 lg:col-span-1',
    rowSpan: 'md:row-span-1',
    link: '/services/paint-correction'
  },
  {
    title: 'Interior Detail',
    subtitle: 'Deep Clean',
    description: 'Refresh your vehicle\'s interior with a deep clean, including leather care, for a pristine and refreshed interior.',
    icon: <Sparkles size={24} className="text-brand-red" />,
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2940&auto=format&fit=crop',
    colSpan: 'md:col-span-1 lg:col-span-1',
    rowSpan: 'md:row-span-1',
    link: '/services/interior-detail'
  },
  {
    title: 'Exterior Detail',
    subtitle: 'Shine & Protect',
    description: 'Restore your vehicle\'s exterior shine with a thorough wash, decontamination, and protective finish.',
    icon: <Droplets size={24} className="text-brand-red" />,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop',
    colSpan: 'md:col-span-1 lg:col-span-1',
    rowSpan: 'md:row-span-1',
    link: '/services/exterior-detail'
  },
  {
    title: 'Fleet Services',
    subtitle: 'Business Solutions',
    description: 'Keep your business vehicles looking professional and well-maintained with our customized fleet detailing packages.',
    icon: <Truck size={24} className="text-brand-red" />,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2940&auto=format&fit=crop',
    colSpan: 'md:col-span-2 lg:col-span-2',
    rowSpan: 'md:row-span-1',
    link: '/services/fleet-services'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 md:text-center">
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            PREMIUM <br className="md:hidden" />
            <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-500">
              Services.
            </span>
          </motion.h2>
          <motion.p 
            className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Expert detailing delivered directly to your location. We use top-rated products and advanced equipment for guaranteed satisfaction.
          </motion.p>
        </div>

        {/* Desktop Bento Grid / Mobile Horizontal Scroll */}
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
          {services.map((service, index) => (
            <Link to={service.link} key={service.title} className={`min-w-[85vw] md:min-w-0 snap-center block ${service.colSpan} ${service.rowSpan}`}>
              <motion.div
                className={`relative rounded-3xl overflow-hidden group cursor-pointer h-full min-h-[450px] md:min-h-[400px] border border-white/5 bg-zinc-950`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                  <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                </div>

                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-60 group-hover:opacity-80 transition-opacity duration-700">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
                  <div className="mb-6 w-14 h-14 rounded-full glass flex items-center justify-center border-white/10 group-hover:border-white/30 transition-colors duration-500">
                    {service.icon}
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-zinc-200 transition-colors">{service.title}</h3>
                    {service.subtitle === 'Most Popular' && (
                      <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-white text-black rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-zinc-400 font-medium mb-4 uppercase tracking-[0.15em] text-xs">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-zinc-300 leading-relaxed max-w-md font-light opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    {service.description}
                  </p>

                  {/* Hover Reveal Button */}
                  <div className="mt-8 overflow-hidden h-0 group-hover:h-12 transition-all duration-500 ease-[0.16,1,0.3,1] opacity-0 group-hover:opacity-100 hidden md:block">
                    <span className="inline-flex items-center text-white font-medium tracking-wide hover:text-zinc-300 transition-colors">
                      Explore Service <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
