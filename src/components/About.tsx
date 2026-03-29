import { motion } from 'motion/react';
import { Smartphone, Car, ThumbsUp } from 'lucide-react';

export default function About() {
  const steps = [
    {
      icon: <Smartphone className="w-10 h-10 text-brand-red" />,
      title: "1. Book & Confirm",
      description: "Book online or over the phone and receive updates about your appointment."
    },
    {
      icon: <Car className="w-10 h-10 text-brand-red" />,
      title: "2. We Detail",
      description: "We arrive to inspect & detail your vehicle with top-rated products and tools."
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-brand-red" />,
      title: "3. Satisfaction Guaranteed",
      description: "We ensure you are fully satisfied with the service & collect payment."
    }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* About Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[1.1]">
              PREMIUM DETAILING <br />
              <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-500">
                At Your Doorstep.
              </span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
              <p>
                At Horizon Detailing, we deliver a 5-star auto detailing experience right to your doorstep—serving Orlando and the greater Central Florida area.
              </p>
              <p>
                Whether you’re at home, the office, or anywhere in between, our mobile team arrives with one of the most advanced setups in the region. We prioritize your convenience by working around your schedule and keeping you informed every step of the way.
              </p>
              <p>
                Our trained professionals use premium detailing products and proven techniques to safely clean, restore, and protect your vehicle. Whether you need a one-time deep clean or routine maintenance to keep your car looking its best, we’ve got you covered.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-red/20 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            <img 
              src="https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/655040708_17879821656530308_8427618637765833056_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=108&ig_cache_key=Mzg1ODczMjU2NDgzOTgwMjEzNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=hnaTPx-CzP4Q7kNvwGPz1vG&_nc_oc=AdoA3HQxVXWy2ryzFt5wmu8obFeijgJYbVHXfrD1ofMIFdxU1-EdKtYc-cM43fo9lDM&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=kWvMv9431-qNlSLk_3QdbA&_nc_ss=7a32e&oh=00_AfyYwmCLGUsarnOJ8FRAtjZDDIIxYsS5KNW00iNfLSvh-w&oe=69CF208B" 
              alt="Mobile Auto Detailing Setup" 
              className="rounded-3xl relative z-10 border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Process / Why Choose Us */}
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            WHY CHOOSE <br className="md:hidden" />
            <span className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-500">
              Us.
            </span>
          </motion.h2>
          <motion.p 
            className="text-zinc-500 text-sm md:text-base uppercase tracking-[0.2em] font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Detailing Done Right—In Just 3 Simple Steps
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-red/30 to-transparent -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900/50 backdrop-blur-sm p-10 rounded-3xl text-center relative z-10 border border-white/5 hover:border-white/20 hover:bg-zinc-900/80 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-20 h-20 mx-auto bg-black rounded-full flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/30 transition-colors duration-500 shadow-[0_0_30px_rgba(255,255,255,0.03)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-zinc-200 transition-colors">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed font-light">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}