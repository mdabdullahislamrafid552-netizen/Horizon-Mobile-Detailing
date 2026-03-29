import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileCTA from './MobileCTA';
import Cursor from './Cursor';
import Contact from './Contact';
import { Link } from 'react-router-dom';

interface ServicePageProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  image: string;
}

export default function ServicePage({ title, price, description, features, image }: ServicePageProps) {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-brand-red selection:text-white">
      <Cursor />
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h1>
              <div className="text-2xl text-brand-red font-semibold mb-6">{price}</div>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {description}
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-6">What's Included</h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle2 className="w-6 h-6 text-brand-red shrink-0 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-medium text-white bg-brand-red hover:bg-red-700 rounded-full transition-all active:scale-95"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </main>

      <Contact />

      <Footer />
      <MobileCTA />
    </div>
  );
}
