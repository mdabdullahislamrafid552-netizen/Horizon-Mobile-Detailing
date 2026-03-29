import ServicePage from '../components/ServicePage';

export default function ExteriorDetail() {
  return (
    <ServicePage
      title="Exterior Detail"
      price="Starting at $100"
      description="Restore your vehicle's exterior shine with a thorough wash, decontamination, and protective finish."
      features={[
        "Foam Bath",
        "Bug & Tar Removal",
        "Tires, Rims, Wheel Wells, & Fenders Detailed",
        "Scratch-Free Hand Wash & Dry",
        "Ceramic Spray (3-5 mo)",
        "Tire Shine"
      ]}
      image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
    />
  );
}
