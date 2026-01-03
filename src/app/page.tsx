import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Briefcase, Building, Shield, Truck, Wrench, Gem } from 'lucide-react';
import { services } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-primary/90 z-10" />
         <Image
          src="https://picsum.photos/seed/corporate/1800/1200"
          alt="Radiant Means Ltd. Corporate Environment"
          fill
          style={{objectFit: "cover"}}
          className="bg-primary"
          data-ai-hint="corporate building"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Radiant Means Ltd.</h1>
          <p className="mt-4 text-xl md:text-2xl font-light italic text-accent">
            “Service based on Due Diligence.”
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-primary-foreground/90">
            Radiant Means Ltd. is committed to generating sustainable income through the provision of high-quality and reliable services to customers across diverse sectors.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:text-accent">
              <Link href="/contact-us">Contact Us</Link>
            </Button>
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
              <Card key={service.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-2">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description.substring(0, 100)}...</p>
                </CardContent>
              </Card>
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
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Radiant Means Ltd.?</h2>
              <p className="text-muted-foreground mb-6">
                Our commitment to excellence and client satisfaction sets us apart. We deliver reliable and high-quality solutions tailored to your needs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Proven Experience</h4>
                    <p className="text-muted-foreground">A track record of success across multiple industries.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Commitment to Due Diligence</h4>
                    <p className="text-muted-foreground">Ensuring every project is executed with precision and care.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Unmatched Quality Service</h4>
                    <p className="text-muted-foreground">We uphold the highest standards in every service we provide.</p>
                  </div>
                </li>
              </ul>
               <Button asChild size="lg" className="mt-8 bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground">
                 <Link href="/about-us">Learn More About Us</Link>
              </Button>
            </div>
            <div className="flex justify-center">
               <Image
                  src="https://picsum.photos/seed/teamwork/600/500"
                  width={600}
                  height={500}
                  alt="Professional Team"
                  className="rounded-lg shadow-xl"
                  data-ai-hint="teamwork collaboration"
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
