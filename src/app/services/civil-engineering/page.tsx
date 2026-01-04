
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Phone, Mail, Building2, HardHat, Wrench, Route, ShieldCheck, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const engineeringServices = [
  {
    icon: Building2,
    title: 'Building Construction',
    description: 'Delivering high-quality residential, commercial, and industrial building projects from the ground up.',
  },
  {
    icon: Route,
    title: 'Road Works & Paving',
    description: 'Specializing in the construction and maintenance of durable roads, highways, and pavements.',
  },
  {
    icon: Wrench,
    title: 'Structural & Renovation Works',
    description: 'Expertise in structural repairs, renovations, and modifications to enhance building integrity and functionality.',
  },
  {
    icon: HardHat,
    title: 'General Construction',
    description: 'Providing a wide range of general construction services to support various project needs and client requirements.',
  },
];

const projectSteps = [
    {
        step: "01",
        title: "Project Consultation & Planning",
        description: "We begin with a detailed consultation to understand project scope, goals, and constraints, followed by meticulous planning."
    },
    {
        step: "02",
        title: "Engineering Design & Feasibility",
        description: "Our technical team develops detailed engineering designs and conducts feasibility studies to ensure viability and efficiency."
    },
    {
        step: "03",
        title: "Execution & Project Management",
        description: "With a solid plan, we execute the project under strict supervision, managing resources and timelines effectively."
    },
    {
        step: "04",
        title: "Quality Assurance & Handover",
        description: "We conduct rigorous quality checks throughout the process, ensuring a successful handover that meets all standards."
    }
]

export default function CivilEngineeringPage() {
  const [animationKey, setAnimationKey] = useState(0);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-start text-white">
        <div className="absolute inset-0 z-0">
            <Image
              src="https://picsum.photos/seed/construction/1800/1200"
              alt="Civil Engineering and Construction Site"
              fill
              className="object-cover bg-primary"
              data-ai-hint="construction site blueprint"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        </div>
        <div className="relative z-20 text-left px-4 md:px-12 lg:px-24 w-full max-w-2xl">
           <div key={animationKey} className={cn("slide-up-fade-in")}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Civil Engineering</h1>
            <p className="mt-4 text-xl md:text-2xl font-light text-primary-foreground/90">
              Building the Future with Precision, Quality, and Durability.
            </p>
            <p className="mt-6 max-w-xl text-base md:text-lg text-primary-foreground">
              Our civil engineering division is committed to delivering durable, cost-effective, and high-quality solutions.
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Engineering Excellence, Delivered</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Radiant Means Ltd.’s Civil Engineering division offers a full spectrum of construction and infrastructure services. Guided by our principle of “Service based on Due Diligence,” we are dedicated to delivering durable, cost-effective, and high-quality engineering solutions for corporate, government, and private sector clients.
            </p>
          </div>
        </div>
      </section>

      {/* Scope of Works Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Scope of Works & Capabilities</h2>
            <p className="mt-2 text-lg text-muted-foreground">Comprehensive solutions for diverse construction needs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {engineeringServices.map((service) => (
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
      
       {/* Project Planning & Execution Section */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Project Approach</h2>
            <p className="mt-2 text-lg text-muted-foreground">A structured process for predictable, high-quality outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectSteps.map(step => (
                <div key={step.step} className="text-center flex flex-col items-center">
                    <h3 className="text-6xl font-bold text-primary/10 mb-2">{step.step}</h3>
                    <h4 className="text-xl font-semibold mb-2 h-12">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>


      {/* Quality & Safety Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="flex justify-center">
               <Image
                  src="https://picsum.photos/seed/engineer/600/500"
                  width={600}
                  height={500}
                  alt="Engineer reviewing plans"
                  className="rounded-lg shadow-xl"
                  data-ai-hint="engineer plans site"
                />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Quality, Safety & Compliance</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Our commitment to due diligence extends to every aspect of our work, ensuring the highest standards are met.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ClipboardCheck className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Rigorous Quality Control</h4>
                    <p className="text-muted-foreground">We implement stringent quality checks at every stage of the project lifecycle.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Uncompromising Safety Standards</h4>
                    <p className="text-muted-foreground">A safe working environment for our team and the public is our top priority.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Full Regulatory Compliance</h4>
                    <p className="text-muted-foreground">We ensure all projects adhere to local and international engineering and building codes.</p>
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
          <h2 className="text-3xl font-bold text-primary">Discuss Your Next Project With Us</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-xl mx-auto">
            Contact us today to learn how our civil engineering expertise can bring your project to life.
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
