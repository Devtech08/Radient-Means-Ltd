
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, ShieldCheck, UserCheck, KeyRound, Camera, Building, Siren, Users } from 'lucide-react';
import Link from 'next/link';

const securitySolutions = [
  {
    icon: UserCheck,
    title: 'Manned Guarding',
    description: 'Providing trained, professional security personnel for on-site protection of assets, property, and people.',
  },
  {
    icon: KeyRound,
    title: 'Access Control Systems',
    description: 'Managing and monitoring entry and exit points to ensure only authorized individuals can access your facility.',
  },
  {
    icon: Camera,
    title: 'Surveillance & Monitoring',
    description: 'Utilizing modern technology to provide 24/7 surveillance support and rapid response to any incidents.',
  },
  {
    icon: Building,
    title: 'Site & Facility Security',
    description: 'Comprehensive security strategies for industrial sites, corporate buildings, and residential complexes.',
  },
  {
    icon: Siren,
    title: 'Mobile Patrol Services',
    description: 'Scheduled and random patrols to provide a visible security presence and deter potential threats.',
  },
  {
    icon: Users,
    title: 'Event Security Management',
    description: 'Ensuring the safety and smooth operation of corporate events, public gatherings, and private functions.',
  },
];

const processSteps = [
    {
        step: "01",
        title: "Risk Assessment & Planning",
        description: "We conduct a thorough on-site risk assessment to identify vulnerabilities and develop a tailored security plan."
    },
    {
        step: "02",
        title: "Officer Deployment & Briefing",
        description: "Our vetted and trained security personnel are deployed with clear instructions specific to your site's needs."
    },
    {
        step: "03",
        title: "Active Monitoring & Reporting",
        description: "We employ continuous monitoring and provide regular, transparent reports on security activities and incidents."
    },
    {
        step: "04",
        title: "Review & Continuous Improvement",
        description: "We regularly review our performance and client feedback to adapt and enhance our security protocols."
    }
]

export default function SecurityServicesPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
       <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-start text-white">
        <div className="absolute inset-0 z-0">
            <Image
              src="/images/Security services.jpg"
              alt="Professional Security Guard"
              fill
              className="object-cover bg-primary"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        </div>
        <div className="relative z-20 text-left px-4 md:px-12 lg:px-24 w-full max-w-2xl">
           <div className="slide-up-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Security Services</h1>
            <p className="mt-4 text-xl md:text-2xl font-light text-primary-foreground/90">
              Your Trusted Partner in Protection and Peace of Mind.
            </p>
            <p className="mt-6 max-w-xl text-base md:text-lg text-primary-foreground">
              We are committed to ensuring the safety of your assets, property, and personnel through professionalism, vigilance, and integrity.
            </p>
            <div className="mt-8 flex justify-start gap-4">
              <Button asChild size="lg" variant="secondary">
                 <Link href="/contact-us">Request a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Proactive Protection, Unwavering Reliability</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Radiant Means Ltd.’s Security Services division provides comprehensive and dependable security solutions tailored to the unique needs of our clients. Guided by our principle, “Service based on Due Diligence,” we are committed to ensuring the safety of your assets, property, and personnel through professionalism, vigilance, and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Scope of Works Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Security Solutions</h2>
            <p className="mt-2 text-lg text-muted-foreground">A full spectrum of services for complete security coverage.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {securitySolutions.map((service) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Operational Approach</h2>
            <p className="mt-2 text-lg text-muted-foreground">A systematic process that ensures effective protection.</p>
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


      {/* Professional Standards Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="flex justify-center">
               <Image
                  src="/images/sec.training.jpg"
                  width={600}
                  height={500}
                  alt="Security team in training"
                  className="rounded-lg shadow-xl"
                />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Training, Compliance & Professionalism</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Our security personnel are our greatest asset. We invest heavily in their training and professional development to provide you with the best service.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Rigorous Training Programs</h4>
                    <p className="text-muted-foreground">All officers undergo extensive training in security protocols, emergency response, and customer service.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Full Legal & Regulatory Compliance</h4>
                    <p className="text-muted-foreground">We operate in strict compliance with all national and local security regulations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Vetted and Professional Personnel</h4>
                    <p className="text-muted-foreground">Every member of our team is thoroughly vetted, background-checked, and trained to be professional and discreet.</p>
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
          <h2 className="text-3xl font-bold text-primary">Secure Your Peace of Mind Today</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-xl mx-auto">
            Contact us for a confidential consultation and a customized security proposal for your business, property, or event.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground">
              <Link href="/contact-us">
                Request a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
