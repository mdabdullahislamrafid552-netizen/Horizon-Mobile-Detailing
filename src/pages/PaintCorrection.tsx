import ServicePage from '../components/ServicePage';

export default function PaintCorrection() {
  return (
    <ServicePage
      title="Paint Correction"
      price="Starting at $300"
      description="Remove swirl marks, scratches, and oxidation to restore your vehicle's paint to a flawless, mirror-like finish."
      features={[
        "One-Stage Correction",
        "Two-Stage Correction",
        "Multi-Stage Correction"
      ]}
      image="https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80"
    />
  );
}
