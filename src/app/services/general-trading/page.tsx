import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Package, Search, Truck, Shield, HardHat, Wrench, Sparkles, Phone } from 'lucide-react';
import Link from 'next/link';

const goodsCategories = [
  {
    icon: HardHat,
    title: 'Industrial & Construction Materials',
    description: 'Sourcing and supplying a wide range of materials including cement, steel, aggregates, and other essential construction supplies.',
  },
  {
    icon: Wrench,
    title: 'Electrical Components',
    description: 'Providing certified electrical products like cables, transformers, switchgears, and lighting fixtures for projects of all scales.',
  },
  {
    icon: Sparkles,
    title: 'Cleaning Materials & Equipment',
    description: 'A complete range of professional-grade cleaning chemicals, tools, and machinery for commercial and industrial use.',
  },
  {
    icon: Shield,
    title: 'Safety Equipment (PPE)',
    description: 'Supplying certified Personal Protective Equipment (PPE) such as helmets, gloves, safety footwear, and high-visibility clothing.',
  },
];

const processSteps = [
    {
        step: "01",
        title: "Requirement Analysis",
        description: "We work with you to understand your specific needs, quality standards, and delivery timelines."
    },
    {
        step: "02",
        title: "Ethical Sourcing & Vetting",
        description: "Our team identifies and vets suppliers who meet our strict criteria for quality and ethical practices."
    },
    {
        step: "03",
        title: "Rigorous Quality Assurance",
        description: "Goods are inspected to ensure they meet specifications and quality benchmarks before procurement."
    },
    {
        step: "04",
        title: "Efficient Logistics & Delivery",
        description: "We manage the entire supply chain to ensure timely and reliable delivery to your location."
    }
]

export default function GeneralTradingPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-white">
         <Image
          src="https://picsum.photos/seed/trading-hero/1800/1200"
          alt="Global Trade and Logistics"
          fill
          className="object-cover"
          data-ai-hint="global logistics shipping"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">General Trading Services</h1>
          <p className="mt-4 text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Your Trusted Partner in Sourcing and Supplying Quality Goods Across Industries.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Efficient Procurement & Dependable Supply Chains</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Radiant Means Ltd. excels in the sourcing, distribution, and supply of premium goods. Our general trading division is committed to generating sustainable income by providing high-quality products and reliable services to corporate, institutional, and individual clients, all underpinned by our motto: “Service based on Due Diligence.”
            </p>
          </div>
        </div>
      </section>

      {/* Categories of Goods Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Categories of Goods Supplied</h2>
            <p className="mt-2 text-lg text-muted-foreground">Quality products for diverse industrial and commercial needs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {goodsCategories.map((category) => (
              <Card key={category.title} className="text-center shadow-md hover:shadow-xl transition-shadow bg-background">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
       {/* Procurement & Quality Control Process Section */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Procurement & Quality Process</h2>
            <p className="mt-2 text-lg text-muted-foreground">A meticulous process that guarantees quality and reliability.</p>
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


      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="flex justify-center">
               <Image
                  src="https://picsum.photos/seed/handshake/600/500"
                  width={600}
                  height={500}
                  alt="Business Partnership Handshake"
                  className="rounded-lg shadow-xl"
                  data-ai-hint="business handshake deal"
                />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Partner with Radiant Means Ltd.?</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Our trading services are built on a foundation of trust, integrity, and an unwavering commitment to our clients' success.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Ethical Sourcing</h4>
                    <p className="text-muted-foreground">We partner with reputable suppliers to ensure all goods are sourced responsibly.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Competitive Pricing</h4>
                    <p className="text-muted-foreground">Leveraging our network to provide you with the best market rates without compromising on quality.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Timely & Reliable Delivery</h4>
                    <p className="text-muted-foreground">Our robust logistics ensure your supplies arrive on schedule, every time.</p>
                  </div>
                </li>
                 <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Unmatched Customer Satisfaction</h4>
                    <p className="text-muted-foreground">We are dedicated to building long-term partnerships through exceptional service.</p>
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
          <h2 className="text-3xl font-bold text-primary">Place an Inquiry for Your Supply Needs</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-xl mx-auto">
            Whether for a large-scale project or regular operational supplies, our team is ready to assist. Contact us for a customized quote.
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
