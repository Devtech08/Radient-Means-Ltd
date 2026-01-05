'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { services } from '@/lib/data';
import { HeroCarousel } from '@/components/hero-carousel';
import Image from 'next/image';
import { cn } from '@/lib/utils';


export default function HomePage() {
   const [animationKey, setAnimationKey] = useState(0);

  const handleImageChange = () => {
    setAnimationKey(prevKey => prevKey + 1);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-start text-white">
        <HeroCarousel onImageChange={handleImageChange} />
        <div className="relative z-20 text-left px-4 md:px-12 lg:px-24 w-full max-w-2xl">
           <div key={animationKey} className={cn("slide-up-fade-in")}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Radiant Means Ltd.</h1>
            <p className="mt-4 text-xl md:text-2xl font-light italic text-accent">
              “Service based on Due Diligence.”
            </p>
            <p className="mt-6 max-w-xl text-base md:text-lg text-primary-foreground">
              Radiant Means Ltd. is committed to generating sustainable income through the provision of high-quality and reliable services to customers across diverse sectors.
            </p>
            <div className="mt-8 flex justify-start gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:text-accent">
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Services</h2>
            <p className="mt-2 text-lg text-muted-foreground">Excellence in every sector we operate.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <Link key={service.title} href={service.href} className="flex">
                <Card className="flex flex-col w-full text-center shadow-md hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-2">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description.substring(0, 100)}...</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary text-lg">
              <Link href="/services">View All Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

       {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center lg:text-left">Why Choose Radiant Means Ltd.?</h2>
              <p className="text-muted-foreground mb-6 text-center lg:text-left">
                Our commitment to excellence and client satisfaction sets us apart. We deliver reliable and high-quality solutions tailored to your needs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start justify-center text-center lg:justify-start lg:text-left">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Proven Experience</h4>
                    <p className="text-muted-foreground">A track record of success across multiple industries.</p>
                  </div>
                </li>
                <li className="flex items-start justify-center text-center lg:justify-start lg:text-left">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Commitment to Due Diligence</h4>
                    <p className="text-muted-foreground">Ensuring every project is executed with precision and care.</p>
                  </div>
                </li>
                <li className="flex items-start justify-center text-center lg:justify-start lg:text-left">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Unmatched Quality Service</h4>
                    <p className="text-muted-foreground">We uphold the highest standards in every service we provide.</p>
                  </div>
                </li>
              </ul>
               <div className="flex justify-center lg:justify-start">
                <Button asChild size="lg" className="mt-8 bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground">
                  <Link href="/about-us">Learn More About Us</Link>
                </Button>
               </div>
            </div>
            <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden group">
              <Image
                  src="/images/Commercial a.jpg"
                  fill
                  alt="Marketing strategy session"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
