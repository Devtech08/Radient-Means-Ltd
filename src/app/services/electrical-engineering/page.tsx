
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Zap, Cable, Lightbulb, CircuitBoard, Wrench, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const electricalServices = [
  {
    icon: Zap,
    title: 'Power Distribution',
    description: 'Design and installation of efficient and safe power distribution networks for buildings and industrial facilities.',
  },
  {
    icon: Cable,
    title: 'Electrical Wiring',
    description: 'Professional wiring for new constructions and existing buildings, ensuring safety and compliance with all codes.',
  },
  {
    icon: Lightbulb,
    title: 'Lighting Systems',
    description: 'Installation of modern, energy-efficient indoor and outdoor lighting solutions for commercial and residential spaces.',
  },
  {
    icon: CircuitBoard,
    title: 'Panel Installation & Upgrades',
    description: 'Expert installation and upgrading of electrical panels to support your power needs safely and reliably.',
  },
    {
    icon: Wrench,
    title: 'Maintenance & Fault Diagnosis',
    description: 'Scheduled maintenance and rapid fault diagnosis to minimize downtime and ensure system longevity.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Compliance Inspections',
    description: 'Thorough electrical safety audits and inspections to ensure your systems meet all regulatory standards.',
  },
];

const projectSteps = [
    {
        step: "01",
        title: "Consultation & System Design",
        description: "We start by understanding your electrical needs to design a safe, efficient, and scalable system."
    },
    {
        step: "02",
        title: "Professional Installation",
        description: "Our certified electricians carry out the installation with precision, adhering to the highest safety and quality standards."
    },
    {
        step: "03",
        title: "Testing & Commissioning",
        description: "We rigorously test all components of the electrical system to ensure it is functioning correctly and safely before handover."
    },
    {
        step: "04",
        title: "Ongoing Maintenance & Support",
        description: "We offer tailored maintenance plans and responsive support to ensure your systems remain reliable and efficient."
    }
]

export default function ElectricalEngineeringPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-white">
         <Image
          src="https://picsum.photos/seed/electrician/1800/1200"
          alt="Electrical engineer working on a panel"
          fill
          className="object-cover"
          data-ai-hint="electrical panel wiring"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Electrical Engineering Services</h1>
          <p className="mt-4 text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Safe, Efficient, and Compliant Electrical Solutions. Service based on Due Diligence.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Powering Your World with Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Radiant Means Ltd.’s Electrical Engineering division provides comprehensive electrical services grounded in safety, reliability, and technical excellence. Our commitment to “Service based on Due Diligence” ensures that every project, from simple wiring to complex industrial installations, is executed to the highest standards of quality and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Scope of Works Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Electrical Expertise</h2>
            <p className="mt-2 text-lg text-muted-foreground">A full spectrum of services for any electrical need.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {electricalServices.map((service) => (
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
      
       {/* Our Approach Section */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Approach to Electrical Works</h2>
            <p className="mt-2 text-lg text-muted-foreground">A systematic process for safe and reliable outcomes.</p>
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


      {/* Safety & Compliance Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="flex justify-center">
               <Image
                  src="https://picsum.photos/seed/safety-first/600/500"
                  width={600}
                  height={500}
                  alt="Engineer with safety gear"
                  className="rounded-lg shadow-xl"
                  data-ai-hint="engineer safety gear"
                />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Uncompromising on Safety</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Safety is not just a policy; it's the core of our electrical engineering practice. We ensure every project is safe for our clients and our team.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Adherence to Regulations</h4>
                    <p className="text-muted-foreground">We strictly follow all national and international electrical codes and safety standards.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">High-Quality Materials</h4>
                    <p className="text-muted-foreground">We use only certified, high-quality materials and components to guarantee safety and durability.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Certified & Trained Professionals</h4>
                    <p className="text-muted-foreground">Our team consists of licensed and continuously trained electricians and engineers.</p>
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
          <h2 className="text-3xl font-bold text-primary">Need an Electrical Solution?</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-xl mx-auto">
            Contact us today for a consultation and let our experts handle your electrical engineering needs with diligence and care.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground">
              <Link href="/contact-us">
                Request Service <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

    