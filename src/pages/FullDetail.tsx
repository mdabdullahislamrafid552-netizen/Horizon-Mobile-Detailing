import ServicePage from '../components/ServicePage';

export default function FullDetail() {
  return (
    <ServicePage
      title="Full Detail"
      price="Starting at $200"
      description="The ultimate package for a complete vehicle transformation, combining our interior and exterior detailing services."
      features={[
        "Detail Door Jambs",
        "Wipe Down Disinfection",
        "Detail Floor Mats & Protectant",
        "Deep Vacuum of Interior",
        "Streak Free Windows",
        "Leather Cleaning",
        "Leather Conditioning",
        "UV Protectants for Leather, Vinyl, & Plastics",
        "Foam Bath",
        "Bug & Tar Removal",
        "Tires, Rims, Wheel Wells, & Fenders Detailed",
        "Scratch-Free Hand Wash & Dry",
        "Ceramic Spray (3-5 mo)",
        "Tire Shine"
      ]}
      image="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80"
    />
  );
}
