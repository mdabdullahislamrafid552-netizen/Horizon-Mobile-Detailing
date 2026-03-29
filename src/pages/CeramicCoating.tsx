import ServicePage from '../components/ServicePage';

export default function CeramicCoating() {
  return (
    <ServicePage
      title="Ceramic Coating"
      price="Starting at $600"
      description="Long-lasting, high-gloss protection that shields your vehicle's paint from the elements and makes maintenance a breeze."
      features={[
        "3-Year Coating",
        "5-Year Coating",
        "8-Year Coating"
      ]}
      image="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80"
    />
  );
}
