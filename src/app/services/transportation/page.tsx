import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Shield, ArrowRight, Phone, Mail, Building2, Truck, Users, Package } from 'lucide-react';
import Link from 'next/link';

const transportTypes = [
  {
    icon: Building2,
    title: 'Corporate Transport Solutions',
    description: 'Reliable and professional transportation for executives, staff, and corporate events, ensuring punctuality and comfort.',
  },
  {
    icon: Truck,
    title: 'Logistics & Supply Chain',
    description: 'Efficient management of your goods from origin to destination, including warehousing, and distribution.',
  },
  {
    icon: Users,
    title: 'Vehicle Hire & Fleet Management',
    description: 'A diverse fleet of well-maintained vehicles available for short-term and long-term hire to meet your business needs.',
  },
  {
    icon: Package,
    title: 'Scheduled & On-Demand Delivery',
    description: 'Timely and secure delivery services for documents, parcels, and goods, with scheduling to fit your operations.',
  },
];

const processSteps = [
    {
        step: "01",
        title: "Initial Consultation & Request",
        description: "Contact us with your requirements. We'll discuss your needs to provide a tailored quote."
    },
    {
        step: "02",
        title: "Planning & Due Diligence",
        description: "Our logistics experts plan the most efficient routes and schedules, performing due diligence at every step."
    },
    {
        step: "03",
        title: "Execution & Monitoring",
        description: "We execute the service with professional drivers and real-time monitoring for full transparency."
    },
    {
        step: "04",
        title: "Completion & Reporting",
        description: "Upon successful completion, we provide detailed reports and invoicing for your records."
    }
]

export default function TransportationPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-white">
         <Image
          src="https://picsum.photos/seed/trucks/1800/1200"
          alt="Logistics and Transportation"
          fill
          className="object-cover"
          data-ai-hint="logistics fleet trucks"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Transportation & Logistics Services</h1>
          <p className="mt-4 text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Reliable, Safe, and Efficient Transport Solutions. Service based on Due Diligence.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Partner in Motion</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At Radiant Means Ltd., we understand that reliable transportation is the backbone of any successful enterprise. Our transportation division is built on a foundation of due diligence, ensuring that every journey, delivery, and logistical challenge is managed with the utmost precision and care. We are committed to providing high-quality, dependable transportation services that generate sustainable value for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Transport Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What We Offer</h2>
            <p className="mt-2 text-lg text-muted-foreground">A comprehensive suite of transport services.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportTypes.map((service) => (
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
      
       {/* How It Works Section */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Process</h2>
            <p className="mt-2 text-lg text-muted-foreground">A streamlined approach for maximum efficiency.</p>
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


      {/* Safety & Compliance Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
               <Image
                  src="https://picsum.photos/seed/safety/600/500"
                  width={600}
                  height={500}
                  alt="Safety and Compliance"
                  className="rounded-lg shadow-xl"
                  data-ai-hint="safety inspection checklist"
                />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Safety & Compliance First</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Our commitment to "Service based on Due Diligence" is most evident in our approach to safety. We adhere to the strictest safety and compliance standards in the industry.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Regular Vehicle Maintenance</h4>
                    <p className="text-muted-foreground">Our fleet undergoes rigorous, scheduled inspections and maintenance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Professional, Vetted Drivers</h4>
                    <p className="text-muted-foreground">All drivers are thoroughly screened, trained, and committed to safe driving practices.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Regulatory Adherence</h4>
                    <p className="text-muted-foreground">We stay current with all transportation regulations to ensure compliant and lawful service.</p>
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
          <h2 className="text-3xl font-bold text-primary">Get Your Quote Today</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-xl mx-auto">
            Ready to experience dependable transportation services? Contact us to discuss your needs and get a customized quote.
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
