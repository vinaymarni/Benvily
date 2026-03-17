// 'use client';

// import { useState } from 'react';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceGallery from '@/components/service/ServiceGallery';
import ServiceAbout from '@/components/service/ServiceAbout';
import ServiceInfoCard from '@/components/service/ServiceInfoCard';
import ServiceBenefits from '@/components/service/ServiceBenefits';
import BeforeAfterSection from '@/components/service/BeforeAfterSection';
import RelatedServices from '@/components/service/RelatedServices';
import ContinueBookingButton from '@/components/service/ContinueBookingButton';
import { exampleService, relatedServices } from '@/lib/dummy-data';

export default async function ServiceDetailPage(props: any) {
  // const [selectedService] = useState(exampleService);



  const searchParams = await props.params;
  const id = searchParams.slug;

  const serviceId = id.split("_")[0];
  const styleId = id.split("_")[1];

  const selectedService:any = exampleService.filter((each: any)=>each.serviceId == serviceId && each.styleId == styleId)[0];

  console.log(selectedService)

  if(!selectedService) return <main className="min-h-screen bg-background">Not Found</main>;

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
          />
        </div>
      </section>
    </main>
  );
}
