
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Sparkles, Building, HardHat, Trash2, Wrench, ShieldCheck, Leaf, HeartPulse } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';


const cleaningSolutions = [
  {
    icon: Building,
    title: 'Corporate & Office Cleaning',
    description: 'Scheduled cleaning services to maintain a professional, clean, and productive work environment for your employees and clients.',
  },
  {
    icon: HardHat,
    title: 'Post-Construction Cleaning',
    description: 'Thorough cleaning of newly built or renovated spaces to remove dust, debris, and construction residue, making them move-in ready.',
  },
  {
    icon: Wrench,
    title: 'Industrial & Facility Cleaning',
    description: 'Specialized cleaning for factories, warehouses, and industrial facilities, adhering to safety protocols and operational needs.',
  },
  {
    icon: Trash2,
    title: 'Janitorial & Sanitation Services',
    description: 'Comprehensive janitorial solutions, including waste management and restroom sanitation, for daily facility maintenance.',
  },
];

const processSteps = [
    {
        step: "01",
        title: "Site Assessment & Consultation",
        description: "We begin with a thorough assessment of your premises to develop a customized cleaning plan tailored to your specific needs."
    },
    {
        step: "02",
        title: "Service Deployment & Execution",
        description: "Our trained and vetted cleaning professionals are deployed with state-of-the-art equipment to execute the plan efficiently."
    },
    {
        step: "03",
        title: "Quality Assurance Checks",
        description: "Regular inspections and client feedback loops are used to monitor service quality and ensure we meet our high standards."
    },
    {
        step: "04",
        title: "Consistent Client Support",
        description: "We provide ongoing support and flexible scheduling to adapt to your changing needs, ensuring continuous satisfaction."
    }
]

export default function CleaningServicesPage() {
  const [animationKey, setAnimationKey] = useState(0);

  return (
    <div className="bg-background">
      {/* Hero Section */}
       <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-start text-white">
        <div className="absolute inset-0 z-0">
            <Image
              src="/images/my cleaning services.jpg"
              alt="Professional Cleaning Services"
              fill
              className="object-cover bg-primary"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        </div>
        <div className="relative z-20 text-left px-4 md:px-12 lg:px-24 w-full max-w-2xl">
           <div key={animationKey} className={cn("slide-up-fade-in")}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Professional Cleaning Services</h1>
            <p className="mt-4 text-xl md:text-2xl font-light text-primary-foreground/90">
              Reliable, Hygienic, and High-Quality Cleaning Solutions.
            </p>
            <p className="mt-6 max-w-xl text-base md:text-lg text-primary-foreground">
              Driven by our motto, “Service based on Due Diligence,” we are dedicated to creating clean, safe, and healthy environments.
            </p>
            <div className="mt-8 flex justify-start gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact-us">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">A New Standard of Clean</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Radiant Means Ltd.’s Cleaning Services division provides comprehensive, high-quality cleaning solutions for residential, commercial, and industrial clients. Driven by our motto, “Service based on Due Diligence,” we are dedicated to creating clean, safe, and healthy environments through meticulous attention to detail and unwavering reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Cleaning Solutions Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Cleaning Solutions</h2>
            <p className="mt-2 text-lg text-muted-foreground">Tailored services for every type of space.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cleaningSolutions.map((service) => (
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
      
       {/* Our Process Section */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Cleaning Process</h2>
            <p className="mt-2 text-lg text-muted-foreground">A systematic approach to guarantee exceptional results.</p>
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


      {/* Health & Safety Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="flex justify-center">
               <Image
                  src="https://picsum.photos/seed/green-cleaning/600/500"
                  width={600}
                  height={500}
                  alt="Eco-friendly cleaning products"
                  className="rounded-lg shadow-xl"
                  data-ai-hint="eco-friendly products"
                />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Health, Safety & Environment</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                We prioritize the well-being of your people and our planet with responsible cleaning practices.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Strict Safety Protocols</h4>
                    <p className="text-muted-foreground">Our teams are trained in OSHA standards and follow strict safety procedures at all times.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Leaf className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Eco-Friendly Products</h4>
                    <p className="text-muted-foreground">We use environmentally responsible and non-toxic cleaning agents wherever possible.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <HeartPulse className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Focus on Hygiene & Health</h4>
                    <p className="text-muted-foreground">Our services reduce allergens and bacteria, contributing to a healthier indoor environment.</p>
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
          <h2 className="text-3xl font-bold text-primary">Get a Custom Cleaning Quote</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-xl mx-auto">
            Contact us today for a free consultation and a detailed quote for our professional cleaning services.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground">
              <Link href="/contact-us">
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
