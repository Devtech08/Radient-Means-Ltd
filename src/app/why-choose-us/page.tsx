import { Button } from '@/components/ui/button';
import { Award, CheckSquare, Users, Star, BarChart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WhyChooseUsPage() {
  const reasons = [
    {
      icon: Award,
      title: 'Extensive Experience',
      description:
        'With years of proven experience across multiple sectors, we have the expertise to handle complex projects and deliver outstanding results.',
    },
    {
      icon: CheckSquare,
      title: 'Service Based on Due Diligence',
      description:
        'Our motto is our promise. We meticulously plan and execute every task, ensuring precision, compliance, and risk mitigation from start to finish.',
    },
    {
      icon: Star,
      title: 'Commitment to Quality Service',
      description:
        'We are dedicated to upholding the highest standards of quality in all our services, ensuring that we not only meet but exceed client expectations.',
    },
    {
      icon: Users,
      title: 'Unwavering Customer Satisfaction',
      description:
        'Your satisfaction is our ultimate goal. We build lasting partnerships by listening to our clients and tailoring our services to their unique needs.',
    },
  ];

  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Why Choose Us</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our dedication to diligence, quality, and customer satisfaction makes us the ideal partner for your success.
          </p>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex items-start">
                <div className="bg-primary/10 p-4 rounded-full mr-6">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-primary text-primary-foreground p-10 md:p-16 rounded-lg shadow-xl">
            <div className='md:w-2/3 text-center md:text-left'>
              <h2 className="text-3xl font-bold mb-4">Ready to Partner with Excellence?</h2>
              <p className="text-lg text-primary-foreground/80">
                Let's discuss how Radiant Means Ltd. can contribute to your goals. Contact us today for a consultation.
              </p>
            </div>
            <div className='flex-shrink-0'>
              <Button asChild size="lg" variant="secondary" className="text-lg font-bold">
                <Link href="/contact-us">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
