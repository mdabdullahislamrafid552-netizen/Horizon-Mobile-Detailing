import ServicePage from '../components/ServicePage';

export default function FleetServices() {
  return (
    <ServicePage
      title="Fleet Services"
      price="Contact for Pricing"
      description="Keep your business vehicles looking professional and well-maintained with our customized fleet detailing packages."
      features={[
        "Customized Maintenance Plans",
        "On-Site Service",
        "Volume Discounts"
      ]}
      image="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80"
    />
  );
}
