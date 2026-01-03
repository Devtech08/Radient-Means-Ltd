import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Our Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Delivering a diverse range of expert services with a commitment to quality and due diligence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const isTransportation = service.title === 'Transportation';
              const CardComponent = isTransportation ? Link : 'div';

              return (
              <Card key={service.title} className="flex flex-col shadow-md hover:shadow-xl transition-shadow">
                <CardComponent href={isTransportation ? '/services/transportation' : ''} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full w-fit">
                          <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                  {isTransportation && (
                    <CardContent>
                        <Button variant="link" className="p-0 text-primary">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </CardContent>
                  )}
                </CardComponent>
              </Card>
            )})}
          </div>
        </div>
      </section>
    </div>
  );
}
