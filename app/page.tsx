'use client';

import { Header } from '@/components/header';
import { GenderFilterToggle } from '@/components/gender-filter-toggle';
import { Button } from '@/components/ui/button';
import { useAtom } from 'jotai';
import { genderAtom, selectedSalonAtom, selectedServiceAtom, selectedStyleAtom } from '@/lib/atoms';
import Link from 'next/link';
import { Scissors, Star, MapPin, Clock } from 'lucide-react';
import { salons, services, styles } from '@/lib/dummy-data';
import Image from 'next/image';
import CardsCarousal from '@/components/commonComponents/CardsCarousal';
import { styleSections } from '@/components/data';
import { useRouter } from 'next/navigation';

function ProductCard({ style }: any) {
  const [,setSelectedService] = useAtom(selectedServiceAtom);
  const [,setSelectedStyle] = useAtom(selectedStyleAtom);

  const getService = () => {
    const list = services.filter((s) => s.id === style.serviceId) ?? []
    return list.length > 0 ? list[0] : null
  }
  
  const route = useRouter();

  function onSelectStyle(){
    const service:any = getService();
    setSelectedService(service);
    setSelectedStyle(style);
    setTimeout(()=>{
      route.push("/services/booking/salon")
    }, 200);
  }

  return (
      <div onClick={()=>onSelectStyle()} className='group cursor-pointer flex flex-col '>
        <div className='  cursor-pointer w-50 h-40 min-w-30 rounded-xl relative flex justify-center items-center overflow-hidden    '>
          <Image
            alt={style.name}
            src={style.image}
            fill
            className=' object-fill rounded-sm transform transition duration-300 hover:scale-105  '
          />
          <span className=' flex items-center gap-[2px] absolute bottom-[10px] right-[10px] z-1 bg-white rounded-sm text-[10px] px-[4px] font-bold '>
            <Star className="h-3 w-3 fill-accent text-accent" />
            {style.rating}
          </span>
        </div>
        <h3 className='  bottom-[6px] z-1 font-bold text-[12px] px-[4px] mt-[4px] '>{style.name}</h3>
      </div>
  )
}

function SalonCard({ salon }: any) {
  const [, setSelectedSalon] = useAtom(selectedSalonAtom);
  // const getService = () => {
  //   const list = services.filter((s) => s.id === salon.id) ?? []
  //   return list.length > 0 ? list[0] : null
  // }
  
  const route = useRouter();

  function onSelectStyle(){
    // const service:any = getService();
    setSelectedSalon(salon);

    setTimeout(()=>{
      route.push("/services/booking/stylist")
    }, 200);
  }

  const avalServices = salon.services.map((each:string) => styleSections[each].title )

  return (
      <div onClick={()=>onSelectStyle()} className='max-w-50 group cursor-pointer flex flex-col '>
        <div className='  cursor-pointer w-50 h-40 min-w-50 rounded-xl relative flex justify-center items-center overflow-hidden    '>
          <Image
            alt={salon.name}
            src={salon.image}
            fill
            className=' object-fill rounded-sm transform transition duration-300 hover:scale-105  '
          />
          <span className=' flex items-center gap-[2px] absolute bottom-[10px] right-[10px] z-1 bg-white rounded-sm text-[10px] px-[4px] font-bold '>
            <Star className="h-3 w-3 fill-accent text-accent" />
            {salon.rating}-({salon.reviews})
          </span>
        </div>
        <h3 className='  bottom-[6px] font-bold text-[14px] px-[4px] mt-[4px] '>{salon.name}</h3>
        <p className='font-semibold text-[12px] '>{salon.location}</p>
        <p className='font-semibold text-[12px] text-wrap '>{avalServices.join(" / ")}</p>
      </div>
  )
}

export default function Home() {
  const [gender] = useAtom(genderAtom);
  const sectionKeys = Object.keys(styleSections);

  const getDataList = (section: string) => {
    return styles.filter((s) => s.serviceId === section && (gender === null || s.availableGenders.includes(gender)))
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-r from-gray-200 via-white to-gray-100
            bg-[length:200%_200%] animate-floatBg">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Luxury Salon Experiences
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Discover and book premium grooming and styling services at the finest salons in your area. 
              Personalized service selection tailored to your preferences.
            </p>

            {/* Gender Filter */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-foreground">Filter by preference:</p>
              <GenderFilterToggle />
              {gender && (
                <p className="text-sm text-muted-foreground">
                  Showing services for <span className="font-semibold text-accent">{gender}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <div className='mt-[2rem] px-[1rem] mx-[3%] rounded-b-3xl pb-[1rem]  '>
        <h2 className='text-xl font-bold'>What you are looking for?</h2>
        <CardsCarousal  
          key={`CardsCarousal_`}
          gap={40}
          scrollSize={170}
          containerClass='pt-[1rem] '
          dataLength={services.length}
          allCards={services.map((service) => {
            return(
              <div className='group cursor-pointer max-w-50 flex flex-col' key={`service_card_${service.id}`}>
                <Image
                  alt={service.name}
                  src={service.image}
                  width={100}
                  height={100}
                  className=' group-hover:shadow-xl cursor-pointer rounded-3xl w-[150px] h-[150px] min-w-[150px] '
                />
                <h3 className=' cursor-pointer font-bold text-[16px] text-center px-[4px] mt-[4px] '>{service.name}</h3>
              </div>
            )})}
        />
      </div>

      {/* Salons */}
      <div className='mt-[2rem] px-[1rem] mx-[3%] rounded-b-3xl pb-[1rem]  '>
        <h2 className='text-xl font-bold'>Top Salons in Bangalore</h2>
        <CardsCarousal  
          key={`CardsCarousal_`}
          gap={40}
          scrollSize={170}
          containerClass='pt-[1rem] '
          dataLength={salons.length}
          allCards={salons.map((salon) => {
            return(
              <SalonCard key={`salon_card_${salon.id}`} salon={salon} />
            )})}
        />
      </div>

      {/* Styles */}
      {sectionKeys.map((section:any)=>{
        const eachStyleSection = getDataList(section);
        const dataObj:any = styleSections[section];
        if(eachStyleSection.length === 0) return;
        const genderText = 
            gender === "Male" ? ` for Gents(${eachStyleSection.length})` :
            gender === "Female" ? ` for Ladies(${eachStyleSection.length})`:
            gender === "Unisex" ? ` for Unisex(${eachStyleSection.length})` : ""
        return(
          <div key={`CardsCarousal_main_${section}`} className='mt-[2rem] px-[1rem] mx-[3%] rounded-b-3xl pb-[1rem] bg-gradient-to-t from-gray-200 to-transparent '>
            <h2 className='text-xl font-bold'>{dataObj.title}{genderText}</h2>
            <CardsCarousal  
              key={`CardsCarousal_${section}`}
              gap={30}
              scrollSize={100}
              containerClass='pt-[1rem] '
              dataLength={eachStyleSection.length}
              allCards={eachStyleSection.map((style) => (
                <ProductCard key={`card_${section}_${style.id}`} style={style} />
              ))}
            />
          </div>
        )
      })}

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {/* Service-Based Booking */}
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <Scissors className="h-8 w-8 text-accent" />
            <h2 className="text-2xl font-bold">Browse by Service</h2>
            <p className="text-muted-foreground">
              Choose from haircuts, coloring, styling, and more. Find the perfect service for you.
            </p>
            <Link href="/services" className="inline-block">
              <Button className="w-full">Explore Services</Button>
            </Link>
          </div>

          {/* Salon-Based Booking */}
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <MapPin className="h-8 w-8 text-accent" />
            <h2 className="text-2xl font-bold">Browse by Salon</h2>
            <p className="text-muted-foreground">
              Discover premium salons near you. Check ratings, reviews, and available stylists.
            </p>
            <Link href="/salons" className="inline-block">
              <Button className="w-full">Find Salons</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Benvily</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3 text-center">
              <Star className="h-8 w-8 text-accent mx-auto" />
              <h3 className="font-semibold text-lg">Premium Stylists</h3>
              <p className="text-muted-foreground">
                Book with highly-rated professionals at luxury salons
              </p>
            </div>
            <div className="space-y-3 text-center">
              <Clock className="h-8 w-8 text-accent mx-auto" />
              <h3 className="font-semibold text-lg">Convenient Booking</h3>
              <p className="text-muted-foreground">
                Real-time availability and instant confirmations
              </p>
            </div>
            <div className="space-y-3 text-center">
              <MapPin className="h-8 w-8 text-accent mx-auto" />
              <h3 className="font-semibold text-lg">Multiple Locations</h3>
              <p className="text-muted-foreground">
                Access the best salons across multiple premium locations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Loved by Customers</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                &quot;Amazing experience! The booking process was seamless and the service exceeded my expectations.&quot;
              </p>
              <p className="font-semibold">Customer {i}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Benvily. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
