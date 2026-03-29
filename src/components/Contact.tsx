import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Thank you for your inquiry. We will contact you shortly!');
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <motion.h2 
              className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              BOOK YOUR <span className="text-brand-red">DETAIL</span>
            </motion.h2>
            <motion.p 
              className="text-zinc-400 text-lg mb-12 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Ready for a showroom shine? Contact us today to schedule your mobile detailing appointment. We bring the shop to you.
            </motion.p>

            <div className="space-y-8">
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-red shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Call or Text</h4>
                  <a href="tel:4078618268" className="text-zinc-400 hover:text-brand-red transition-colors text-lg">
                    (407) 861-8268
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-red shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Email Us</h4>
                  <a href="mailto:Info@horizondetailing.com" className="text-zinc-400 hover:text-brand-red transition-colors text-lg">
                    Info@horizondetailing.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-red shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Service Area</h4>
                  <p className="text-zinc-400 text-lg">
                    Orlando, Winter Garden, Winter Haven, Lakeland, Kissimmee & surrounding areas.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-red shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Business Hours</h4>
                  <p className="text-zinc-400 text-lg">Mon–Fri: 9:00 am – 7:00 pm</p>
                  <p className="text-zinc-400 text-lg">Sat: 8:00 am – 7:00 pm</p>
                  <p className="text-brand-red-light font-semibold mt-1">Sun: Closed</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-3xl border-brand-red/20 shadow-[0_0_30px_rgba(140,0,28,0.05)]">
              <h3 className="text-2xl font-bold text-white mb-8">Request an Appointment</h3>
              
              <div className="space-y-6">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-brand-red transition-colors peer placeholder-transparent"
                    placeholder="Full Name"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 top-3 text-zinc-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-red peer-valid:-top-4 peer-valid:text-xs peer-valid:text-brand-red"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-brand-red transition-colors peer placeholder-transparent"
                    placeholder="Phone Number"
                  />
                  <label 
                    htmlFor="phone" 
                    className="absolute left-0 top-3 text-zinc-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-red peer-valid:-top-4 peer-valid:text-xs peer-valid:text-brand-red"
                  >
                    Phone Number
                  </label>
                </div>

                <div className="relative pt-2">
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-brand-red transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-zinc-900 text-zinc-500">Select a Service</option>
                    <option value="full-detail" className="bg-zinc-900">Full-Service Detailing</option>
                    <option value="ceramic" className="bg-zinc-900">Ceramic Coating ($200 OFF)</option>
                    <option value="paint-correction" className="bg-zinc-900">Paint Correction</option>
                    <option value="interior" className="bg-zinc-900">Interior Only</option>
                    <option value="exterior" className="bg-zinc-900">Exterior Only</option>
                  </select>
                </div>

                <div className="relative mt-8">
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-brand-red transition-colors peer placeholder-transparent resize-none"
                    placeholder="Vehicle Make/Model & Location"
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-0 top-3 text-zinc-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-red peer-valid:-top-4 peer-valid:text-xs peer-valid:text-brand-red"
                  >
                    Vehicle Make/Model & Location
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-red hover:bg-brand-red-light text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(140,0,28,0.4)] active:scale-95 mt-8"
                >
                  Send Request
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
