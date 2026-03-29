import ServicePage from '../components/ServicePage';

export default function InteriorDetail() {
  return (
    <ServicePage
      title="Interior Detail"
      price="Starting at $120"
      description="Refresh your vehicle's interior with a deep clean, including leather care, for a pristine and refreshed interior."
      features={[
        "Detail Door Jambs",
        "Wipe Down Disinfection",
        "Detail Floor Mats & Protectant",
        "Deep Vacuum of Interior",
        "Streak Free Windows",
        "Leather Cleaning",
        "Leather Conditioning",
        "UV Protectants for Leather, Vinyl, & Plastics"
      ]}
      image="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80"
    />
  );
}
