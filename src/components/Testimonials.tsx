import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael R.',
    location: 'Orlando, FL',
    text: 'Horizon Detailing did an incredible job on my Tesla. The ceramic coating looks wet and glossy, and they came right to my office. Highly recommend their mobile service!',
    rating: 5,
  },
  {
    name: 'Sarah T.',
    location: 'Winter Garden, FL',
    text: 'I had deep scratches on my black SUV. Their paint correction service completely removed them. The car looks better than when I bought it off the lot.',
    rating: 5,
  },
  {
    name: 'David L.',
    location: 'Kissimmee, FL',
    text: 'Professional, punctual, and meticulous. The interior detail made my 5-year-old truck smell and look brand new. The leather seat treatment is top-notch.',
    rating: 5,
  },
  {
    name: 'Jessica W.',
    location: 'Lakeland, FL',
    text: 'Booking was super easy, and they kept me updated on their arrival time. The convenience of having them detail my car in my driveway is unbeatable.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            CLIENT <span className="text-brand-red">REVIEWS</span>
          </motion.h2>
          <motion.p 
            className="text-zinc-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Don't just take our word for it. See what our satisfied customers in Central Florida have to say about our 5-star detailing services.
          </motion.p>
        </div>

        {/* Horizontal Scroll on Mobile / Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="min-w-[85vw] md:min-w-0 snap-center glass p-8 rounded-3xl relative group hover:border-brand-red/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="absolute top-6 right-6 text-brand-red/20 w-12 h-12 rotate-180 group-hover:text-brand-red/40 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-brand-red fill-brand-red" />
                ))}
              </div>
              
              <p className="text-zinc-300 mb-8 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto">
                <p className="font-bold text-white text-lg">{testimonial.name}</p>
                <p className="text-brand-red-light text-sm font-medium">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
