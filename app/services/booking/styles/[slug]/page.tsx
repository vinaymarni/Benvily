'use client';

import { useState } from 'react';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceGallery from '@/components/service/ServiceGallery';
import ServiceAbout from '@/components/service/ServiceAbout';
import ServiceInfoCard from '@/components/service/ServiceInfoCard';
import ServiceBenefits from '@/components/service/ServiceBenefits';
import BeforeAfterSection from '@/components/service/BeforeAfterSection';
import RelatedServices from '@/components/service/RelatedServices';
import ContinueBookingButton from '@/components/service/ContinueBookingButton';

// Example service data - in production this would come from your state management (Jotai)
const exampleService = {
  id: 'wolf-cut',
  name: 'Wolf Cut',
  category: 'Hair Style',
  rating: 4.7,
  reviewCount: 328,
  duration: '45 mins',
  price: 1200,
  description: 'The Wolf Cut is a modern, edgy hairstyle that combines the best of both mullets and shag cuts. It features longer layers on top with volume and movement, shorter sides, and a distinctive disconnected, textured look. Perfect for those seeking a bold, trendy transformation.',
  benefits: [
    'Modern trendy look that turns heads',
    'Versatile styling options - sleek or textured',
    'Works great for all hair types',
    'Long lasting results with minimal fading',
    'Easy maintenance between appointments',
    'Creates instant dimension and movement'
  ],
  suitableFor: 'Both',
  hairType: ['Straight', 'Wavy', 'Curly'],
  maintenanceLevel: 'Moderate',
  recommendedFrequency: '4-6 weeks',
  images: [
    '/service-1.jpg',
    '/service-2.jpg',
    '/service-3.jpg',
    '/service-4.jpg',
    '/service-5.jpg'
  ],
  beforeImage: '/before.jpg',
  afterImage: '/after.jpg',
};

const relatedServices = [
  { id: 'textured-fade', name: 'Textured Fade', category: 'Hair Cut', price: 800, image: '/related-1.jpg' },
  { id: 'undercut', name: 'Undercut', category: 'Hair Cut', price: 750, image: '/related-2.jpg' },
  { id: 'pompadour', name: 'Pompadour', category: 'Hair Style', price: 900, image: '/related-3.jpg' },
  { id: 'quiff', name: 'Quiff', category: 'Hair Style', price: 850, image: '/related-4.jpg' },
];

export default async function ServiceDetailPage(props: any) {
  const [selectedService] = useState(exampleService);

  const handleContinueBooking = () => {
    // Navigate to salon selection page
    console.log('Continue to salon selection');
  };

  const searchParams = await props.params;
  const id = searchParams.slug;

  console.log(id)


  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero service={selectedService} />

      {/* Image Gallery */}
      <section className="bg-background py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceGallery images={selectedService.images} />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ServiceAbout description={selectedService.description} />
            </div>
            <div>
              <ServiceInfoCard service={selectedService} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceBenefits benefits={selectedService.benefits} />
        </div>
      </section>

      {/* Before/After Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BeforeAfterSection
            beforeImage={selectedService.beforeImage}
            afterImage={selectedService.afterImage}
          />
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RelatedServices services={relatedServices} />
        </div>
      </section>

      {/* Continue Booking Button */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContinueBookingButton
            serviceName={selectedService.name}
            onContinue={handleContinueBooking}
          />
        </div>
      </section>
    </main>
  );
}
