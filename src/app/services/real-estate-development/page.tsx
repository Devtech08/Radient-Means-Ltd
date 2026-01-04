
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Map, Building, Home, GanttChart, ShieldCheck, Leaf, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';


const developmentServices = [
  {
    icon: Map,
    title: 'Land Acquisition & Feasibility',
    description: 'Identifying and acquiring strategic land parcels, conducting thorough feasibility studies to ensure project viability and profitability.',
  },
  {
    icon: Building,
    title: 'Commercial & Mixed-Use Development',
    description: 'Developing state-of-the-art office buildings, retail centers, and mixed-use properties that create vibrant community hubs.',
  },
  {
    icon: Home,
    title: 'Residential Community Development',
    description: 'Creating master-planned residential communities and housing estates with a focus on quality living and modern amenities.',
  },
  {
    icon: GanttChart,
    title: 'Project & Construction Management',
    description: 'Overseeing every phase of the construction process to ensure projects are completed on time, within budget, and to the highest standards.',
  },
];

const processSteps = [
    {
        step: "01",
        title: "Site Selection & Analysis",
        description: "We identify prime locations and perform rigorous due diligence, including market analysis and zoning assessments."
    },
    {
        step: "02",
        title: "Design & Planning",
        description: "Collaborating with top architects and engineers, we create designs that are innovative, functional, and sustainable."
    },
    {
        step: "03",
        title: "Financing & Project Management",
        description: "We secure project financing and implement robust project management to control costs and timelines effectively."
    },
    {
        step: "04",
        title: "Construction & Delivery",
        description: "Our team manages the construction process, ensuring quality workmanship and timely delivery of the final property."
    }
]

export default function RealEstateDevelopmentPage() {
  const [animationKey, setAnimationKey] = useState(0);

  return (
    <div className="bg-background">
      {/* Hero Section */}
       <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-start text-white">
        <div className="absolute inset-0 z-0">
            <Image
              src="/images/real estate development.jpg"
              alt="Modern Real Estate Development"
              fill
              className="object-cover bg-primary"
              data-ai-hint="modern architecture building"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        </div>
        <div className="relative z-20 text-left px-4 md:px-12 lg:px-24 w-full max-w-2xl">
           <div key={animationKey} className={cn("slide-up-fade-in")}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Real Estate Development</h1>
            <p className="mt-4 text-xl md:text-2xl font-light text-primary-foreground/90">
              Building Value, Creating Communities.
            </p>
            <p className="mt-6 max-w-xl text-base md:text-lg text-primary-foreground">
              We are dedicated to creating spaces that are not only profitable but also sustainable and valuable to the communities they serve.
            </p>
            <div className="mt-8 flex justify-start gap-4">
              <Button asChild size="lg" variant="secondary">
                 <Link href="/contact-us">Inquire Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Shaping the Future of Urban &amp; Residential Spaces</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Radiant Means Ltd.’s Real Estate division specializes in the end-to-end development of high-quality residential, commercial, and mixed-use properties. Guided by our principle of “Service based on Due Diligence,” we are dedicated to creating spaces that are not only profitable but also sustainable and valuable to the communities they serve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Development Capabilities</h2>
            <p className="mt-2 text-lg text-muted-foreground">From concept to completion, we manage every detail.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentServices.map((service) => (
              <Card key={service.title} className="text-center shadow-md hover:shadow-xl transition-shadow bg-background">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
       {/* Our Development Process Section */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Development Process</h2>
            <p className="mt-2 text-lg text-muted-foreground">A meticulous four-stage process for guaranteed success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map(step => (
                <div key={step.step} className="text-center flex flex-col items-center">
                    <h3 className="text-6xl font-bold text-primary/10 mb-2">{step.step}</h3>
                    <h4 className="text-xl font-semibold mb-2 h-12">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>


      {/* Quality, Sustainability & Investment Value Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="flex justify-center">
               <Image
                  src="https://picsum.photos/seed/blueprint/600/500"
                  width={600}
                  height={500}
                  alt="Architectural blueprint"
                  className="rounded-lg shadow-xl"
                  data-ai-hint="architectural blueprint plans"
                />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Quality, Sustainability &amp; Value</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Our approach integrates quality construction, sustainable practices, and long-term investment value into every project.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Uncompromising Quality & Compliance</h4>
                    <p className="text-muted-foreground">We adhere to the strictest building codes and quality standards to deliver durable and safe properties.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Leaf className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Sustainable & Eco-Friendly Design</h4>
                    <p className="text-muted-foreground">We incorporate green building materials and energy-efficient designs to minimize environmental impact.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Long-Term Investment Value</h4>
                    <p className="text-muted-foreground">Our focus on strategic locations and quality construction ensures strong returns on investment for our clients.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary">Partner with Us on Your Next Real Estate Venture</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-xl mx-auto">
            Whether you are an investor or a landowner, contact us to discuss how we can create value together.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground">
              <Link href="/contact-us">
                Inquire Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
