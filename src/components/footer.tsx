import Link from 'next/link';
import { Icons } from './ui/icons';
import { Mail, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { href: '/about-us', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/why-choose-us', label: 'Why Choose Us' },
  { href: '/contact-us', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 justify-center md:justify-start mb-4">
              <Icons.logo className="h-10 w-10" />
              <span className="text-xl font-bold">Radiant Means</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Service based on Due Diligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">Transportation</Link></li>
              <li><Link href="/services" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">Engineering</Link></li>
              <li><Link href="/services" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">Real Estate</Link></li>
              <li><Link href="/services" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">Security Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="h-4 w-4 mr-2" />
                <span>059 374 3244</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="h-4 w-4 mr-2" />
                <span>radiantmeansltd@gmail.com</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                    <span>Kpone Industrial Area</span>
                    <span className="text-primary-foreground/80">GPS Address: GK-0107-6527</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Radiant Means Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
