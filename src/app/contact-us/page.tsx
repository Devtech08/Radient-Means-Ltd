'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export default function ContactUsPage() {
  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to help. Reach out to us with any inquiries or to discuss your next project.
          </p>
        </div>
      </section>

      {/* Contact Details and Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold text-primary">Get in Touch</h2>
                <p className="text-muted-foreground mt-2">
                  Our team is ready to assist you. Contact us through any of the channels below, or use the form to send us a direct message.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex flex-col items-center gap-2 lg:flex-row lg:items-center lg:text-left">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Telephone</h4>
                    <a href="tel:0593743244" className="text-muted-foreground hover:text-primary transition-colors">
                      059 374 3244
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 lg:flex-row lg:items-center lg:text-left">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:radiantmeansltd@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      radiantmeansltd@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:text-left">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Kpone Industrial Area</p>
                    <p className="text-muted-foreground text-sm">GPS Address: GK-0107-6527</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
               <Card className="shadow-lg bg-secondary/30">
                <CardHeader className="text-center lg:text-left">
                    <CardTitle className="text-2xl">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                    <ContactForm />
                </CardContent>
               </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
