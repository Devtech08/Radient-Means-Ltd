
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icons } from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { Menu } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/why-choose-us', label: 'Why Choose Us' },
  { href: '/contact-us', label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-8 w-8" />
            <span className="font-bold hidden sm:inline-block">Radiant Means</span>
            </Link>
        </div>

        <div className="flex items-center">
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
                <Link
                key={link.href}
                href={link.href}
                className={cn(
                    'transition-colors hover:text-foreground/80',
                    pathname === link.href ? 'text-foreground' : 'text-foreground/60'
                )}
                >
                {link.label}
                </Link>
            ))}
            </nav>
           {/* Mobile Menu */}
          <div className="md:hidden ml-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <VisuallyHidden>
                  <SheetTitle>Main Menu</SheetTitle>
                  <SheetDescription>
                    Navigate to different pages of the website.
                  </SheetDescription>
                </VisuallyHidden>
                <div className="flex flex-col space-y-4 p-4">
                  <Link href="/" className="mr-6 flex items-center space-x-2 mb-4">
                    <Icons.logo className="h-8 w-8" />
                    <span className="font-bold">Radiant Means</span>
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-lg transition-colors hover:text-foreground/80',
                        pathname === link.href ? 'text-foreground' : 'text-foreground/60'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
