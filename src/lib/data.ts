import { Truck, Gem, HardHat, Sparkles, Wrench, Building, Shield } from 'lucide-react';

export const services = [
  {
    icon: Truck,
    title: 'Transportation',
    description: 'Reliable and efficient logistics and transportation solutions tailored to meet your business needs, ensuring timely delivery and safety.',
    href: '/services/transportation',
  },
  {
    icon: Gem,
    title: 'General Trading',
    description: 'Comprehensive import and export services, sourcing high-quality products and managing supply chains with expertise and integrity.',
    href: '/services/general-trading',
  },
  {
    icon: HardHat,
    title: 'Civil Engineering',
    description: 'From infrastructure projects to urban development, we provide top-tier civil engineering services focused on innovation and sustainability.',
    href: '/services/civil-engineering',
  },
  {
    icon: Sparkles,
    title: 'Cleaning Services',
    description: 'Professional and thorough cleaning services for corporate, commercial, and residential properties, maintaining pristine environments.',
    href: '/services/cleaning-services',
  },
  {
    icon: Wrench,
    title: 'Electrical Engineering',
    description: 'Specialized electrical engineering solutions, including installation, maintenance, and system design for various applications.',
    href: '/services/electrical-engineering',
  },
  {
    icon: Building,
    title: 'Real Estate Development',
    description: 'Developing premium residential and commercial properties that combine modern design with functionality and long-term value.',
    href: '/services/real-estate-development',
  },
  {
    icon: Shield,
    title: 'Security Services',
    description: 'Providing comprehensive security solutions, including personnel and technology, to protect your assets and ensure peace of mind.',
    href: '/services/security-services',
  },
];

export const heroImages = [
    {
        src: 'https://picsum.photos/seed/trucks-highway/1800/1200',
        alt: 'Transportation services showing a fleet of trucks on a highway',
        aiHint: 'logistics fleet trucks'
    },
    {
        src: 'https://picsum.photos/seed/cargo-ship/1800/1200',
        alt: 'General trading services with a large cargo ship at a port',
        aiHint: 'container ship port'
    },
    {
        src: 'https://picsum.photos/seed/bridge-construction/1800/1200',
        alt: 'Civil engineering project with a bridge under-construction',
        aiHint: 'bridge construction site'
    },
    {
        src: 'https://picsum.photos/seed/office-cleaning/1800/1200',
        alt: 'Cleaning services team working in a modern office',
        aiHint: 'professional office cleaning'
    },
    {
        src: 'https://picsum.photos/seed/power-lines/1800/1200',
        alt: 'Electrical engineering with a view of power lines at sunset',
        aiHint: 'electrical power grid'
    },
    {
        src: 'https://picsum.photos/seed/city-skyline/1800/1200',
        alt: 'Real estate development showing a modern city skyline',
        aiHint: 'modern city architecture'
    },
    {
        src: 'https://picsum.photos/seed/security-camera/1800/1200',
        alt: 'Security services with a surveillance camera overlooking a facility',
        aiHint: 'security cctv camera'
    }
]
