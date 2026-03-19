import Image from 'next/image'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Heart, Zap, Star } from 'lucide-react'
import { Header } from '@/components/header'

export default function AboutPage() {
  const team = [
    { name: 'Sophie Laurent', role: 'Creative Director', image: '/salon.jpg' },
    { name: 'Marcus Rivera', role: 'Lead Stylist', image: '/salon.jpg' },
    { name: 'Elena Rodriguez', role: 'Master Colorist', image: '/salon.jpg' },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Passion for Beauty',
      description: 'We are passionate about helping our clients feel beautiful and confident.',
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and professionalism.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of trends and constantly improve our services.',
    },
  ]

  return (
    <>      
      {/* Header */}
      <Header />
      <section className="bg-secondary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-foreground mb-4">
            About Benvily
          </h1>
          <p className="text-secondary-foreground/80 text-lg">
            Discover our story, mission, and the team behind your perfect look
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Brand Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/salon.jpg"
                alt="Benvily Story"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Our Story
              </h2>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Founded in 2026, Benvily was born from a simple vision: to connect people with the best beauty professionals in their area. What started as a single salon location has grown into a thriving network of premium salons and independent stylists.
              </p>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                We believe that everyone deserves to feel beautiful and confident. Our platform makes it easy to find, compare, and book appointments with top-rated salons and stylists near you.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, we serve thousands of clients monthly and continue to expand our network to bring premium beauty services to more communities.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              To empower beauty professionals and clients by providing a seamless platform that connects them, celebrates creativity, and makes quality beauty services accessible to everyone.
            </p>
          </div>
          <div className="bg-accent rounded-2xl p-8 text-accent-foreground">
            <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              To become the leading platform for beauty services, known for our commitment to excellence, innovation, and customer satisfaction.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-all"
                >
                  <div className="flex justify-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Team */}
        {/* <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* CTA */}
        <section className="bg-secondary rounded-3xl px-6 md:px-12 py-12 text-center">
          <h2 className="text-3xl font-serif font-bold text-secondary-foreground mb-4">
            Experience the Difference
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8">
            Join thousands of satisfied clients who trust Benvily
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-base"
          >
            <Link href="/services">Explore Services</Link>
          </Button>
        </section>
      </main>

      <Footer />
    </>
  )
}
