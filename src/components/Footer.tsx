import { Instagram, Facebook } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate(`/${href}`);
    } else {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 md:pb-16 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 inline-block">
              <img 
                src="https://i.imgur.com/oqUClYO.png" 
                alt="Horizon Mobile Detailing" 
                className="h-20 md:h-24 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-zinc-400 max-w-sm mb-6">
              Premium mobile auto detailing and ceramic coating services delivered directly to your location in Central Florida.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/horizondetailingfl" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="/#services" onClick={(e) => handleNavClick(e, '#services')} className="text-zinc-400 hover:text-brand-red transition-colors">Services</a></li>
              <li><a href="/#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="text-zinc-400 hover:text-brand-red transition-colors">Gallery</a></li>
              <li><a href="/#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="text-zinc-400 hover:text-brand-red transition-colors">Reviews</a></li>
              <li><a href="/#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-zinc-400 hover:text-brand-red transition-colors">Book Now</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/full-detail" className="text-zinc-400 hover:text-brand-red transition-colors">Full-Service Detailing</Link></li>
              <li><Link to="/services/ceramic-coating" className="text-zinc-400 hover:text-brand-red transition-colors">Ceramic Coating</Link></li>
              <li><Link to="/services/paint-correction" className="text-zinc-400 hover:text-brand-red transition-colors">Paint Correction</Link></li>
              <li><Link to="/services/interior-detail" className="text-zinc-400 hover:text-brand-red transition-colors">Interior Deep Clean</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm text-center md:text-left">
            &copy; {currentYear} Horizon Mobile Detailing. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
