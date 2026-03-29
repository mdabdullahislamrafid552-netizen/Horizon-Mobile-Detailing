import Cursor from '../components/Cursor';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBanner from '../components/TrustBanner';
import About from '../components/About';
import Services from '../components/Services';
import ParallaxBreak from '../components/ParallaxBreak';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MobileCTA from '../components/MobileCTA';

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-brand-red selection:text-white">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <TrustBanner />
        <About />
        <Services />
        <ParallaxBreak />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
