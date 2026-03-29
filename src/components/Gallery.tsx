import { motion } from 'motion/react';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const images = [
  {
    src: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/532453224_17851559214530308_6633483901163768411_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=MzY5OTgxMzEzODUzNjIzMjQ5Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5oZHIuQzMifQ%3D%3D&_nc_ohc=SAU12ORCYNsQ7kNvwGCVedA&_nc_oc=AdoF2oAVoG-YFqQsMRV0C4lq0D2j1qND2BfUAr-YjYvLdgU0Q9YgEwVZH71h49D0eN0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=wOj4kjavZb0IRWlCBJxrUg&_nc_ss=7a32e&oh=00_AfxsgKtZLS9tU6WS1vz71NUss-reouEWF2U0DXCCKYbasw&oe=69CF460D',
    alt: 'Detailing Work 1',
    span: 'md:col-span-1 md:row-span-2'
  },
  {
    src: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/541578579_17854260594530308_4605883409625647966_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=104&ig_cache_key=MzcxMzgzOTA3MjE1MTM4MTEzNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5oZHIuQzMifQ%3D%3D&_nc_ohc=fysEkZEpx48Q7kNvwFkDE9D&_nc_oc=AdoQSStIl74QrCYv06XBptNtdmIcooOA2f0Qvg0j7TwlB6dVmMfel2pA9-Oohf4DhkU&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=0_T0Rt3ldgP-Unh0I0bz3A&_nc_ss=7a32e&oh=00_AfzQLQSl6UzapgbCNOMAM0t2yuTbnDx1JtOA8Jw9ZeqN4w&oe=69CF3DB3',
    alt: 'Detailing Work 2',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    src: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/651027204_17878082856530308_4989585958356003701_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=111&ig_cache_key=Mzg1MTM4OTM1MjQzNDI4NjcyNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5oZHIuQzMifQ%3D%3D&_nc_ohc=rSX6IUf7cDQQ7kNvwEmUTiL&_nc_oc=Adqs8gToeddaiy45AU_yc4MDuHrrfNBpwmWq1rO1qPLaHjSLlKYHnsWKx-4RIwlrf7c&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=kWvMv9431-qNlSLk_3QdbA&_nc_ss=7a32e&oh=00_Afz880AaIjM2mRTcJ7vE_ljFuCCHwnZH5Un7XNJ5gNTYDA&oe=69CF1DB8',
    alt: 'Detailing Work 3',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    src: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/588635831_17864304642530308_4575925314441105530_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=Mzc3NTQwMDYwODYxMTMyMDMwOTE3ODY0MzA0NjM5NTMwMzA4.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjkzNHgxNjU4LnNkci5DMyJ9&_nc_ohc=pc94Bs_Z9qYQ7kNvwElBNaF&_nc_oc=AdraQTCziND8YtHkLDFw0AyZebRHrOczmFUES8-XCrKc6v5TKIndEfNx4TR7g57BoVQ&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=kWvMv9431-qNlSLk_3QdbA&_nc_ss=7a32e&oh=00_Afw9lrydzEfxqKf86hAVsQeJDVVX5gYXC44ljmHzyw_bgA&oe=69CF3613',
    alt: 'Detailing Work 4',
    span: 'md:col-span-2 md:row-span-1'
  },
  {
    src: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/591143616_17864289039530308_2243899835449659741_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=Mzc3NTI4MTUwNzAzNzQ0Njk4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=izxumTJVlWUQ7kNvwHlAw3F&_nc_oc=Adqy34BHFwI-vVXe5wEltlpPrkdPtUK7uV64cpj78dEx1E5BliCI0FaflxfAgtP76XA&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=kWvMv9431-qNlSLk_3QdbA&_nc_ss=7a32e&oh=00_AfwWr2A4HgkUtk2AI-wn2gGzZHidYDgvgjJhAZuJ4qSLRQ&oe=69CF2C20',
    alt: 'Detailing Work 5',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    src: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/653870781_17879052633530308_3460427096582955317_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=108&ig_cache_key=Mzg1NTgxNjE5NTUzNDE0NjkwMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=6sHcU_3DU1gQ7kNvwF6P0Qg&_nc_oc=AdqkMSFETzITdagPs8gx6nGz9Oj68HZcz7B2akJEdgntqmu-EPuU2-azHBqYOooNIM0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=kWvMv9431-qNlSLk_3QdbA&_nc_ss=7a32e&oh=00_Afx08Ci_Y5wX2hs6cG6KuIbaqb9TnM81GJ9fUYZkPw47QQ&oe=69CF14BF',
    alt: 'Detailing Work 6',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    src: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/657595267_17880323724530308_355128517412353346_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=110&ig_cache_key=Mzg2MDc4MDg1NjcwNDYzMjI4Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=7MgX5JOiU50Q7kNvwEDHodX&_nc_oc=AdoM8IiicTSQrQXAN8GieLDIfO97PlUsQD-Vvs479kVBXMZrAff3D_PVqoVgyPbeui8&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=kWvMv9431-qNlSLk_3QdbA&_nc_ss=7a32e&oh=00_Afz6VGgxd7G054TzSb8dc6rcctEePWCQo_NOVf6WCg3UJw&oe=69CF2A99',
    alt: 'Detailing Work 7',
    span: 'md:col-span-1 md:row-span-2'
  },
  {
    src: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/656850969_17880709437530308_2142954177762950621_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=110&ig_cache_key=Mzg2MjM0MDY3MzU0Mjk1NDEwMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHg5NjAuc2RyLkMzIn0%3D&_nc_ohc=Igjw6BHazW0Q7kNvwHe_8Qt&_nc_oc=Adp4v9uA8NDXgbGD0V678TDYP7UGvQBWaXAvCvxe9WyT3p52Q3_ZExB_7-FB3EcMLks&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=kWvMv9431-qNlSLk_3QdbA&_nc_ss=7a32e&oh=00_Afyw36ASOcLxp1lDJwM21OWcyxLURBQq7BWa7E54Xy-AEQ&oe=69CF3A00',
    alt: 'Detailing Work 8',
    span: 'md:col-span-1 md:row-span-1'
  }
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-24 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              OUR <br className="md:hidden" />
              <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-500">
                Work.
              </span>
            </motion.h2>
            <motion.p 
              className="text-zinc-400 max-w-xl text-lg font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Before and after transformations. We take pride in restoring every vehicle to its absolute best condition.
            </motion.p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2 mr-4">
              <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                <ChevronRight size={20} />
              </button>
            </div>
            <motion.a 
              href="https://instagram.com/horizondetailingfl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors font-medium tracking-wide group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Instagram size={20} className="group-hover:scale-110 transition-transform duration-500" />
              @horizondetailingfl
            </motion.a>
          </div>
        </div>

        {/* Mobile Swipe / Desktop Grid */}
        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 hide-scrollbar md:auto-rows-[250px]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer flex-none w-[85vw] sm:w-[60vw] md:w-auto h-[450px] md:h-auto snap-center ${img.span} border border-white/5`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Instagram size={18} className="text-white" />
                  </div>
                  <span className="text-white font-medium tracking-wide text-sm">View on Instagram</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
