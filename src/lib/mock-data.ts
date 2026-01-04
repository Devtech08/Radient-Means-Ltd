
import { Truck, Gem, HardHat, Sparkles, Wrench, Building, Shield } from 'lucide-react';
import type { Article } from './types';


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
      "src": "/images/my trading.jpg",
      "alt": "Radiant Means Ltd. General Trading",
      "aiHint": "general trading"
    },
    {
      "src": "/images/my-transport.jpg",
      "alt": "Transportation services showing a fleet of trucks on a highway",
      "aiHint": "logistics fleet trucks"
    },
    {
      "src": "/images/my civil engineering.jpg",
      "alt": "Civil Engineering and Construction Site",
      "aiHint": "construction site"
    },
    {
      "src": "/images/cleaning services.jpg",
      "alt": "Professional Cleaning Services in a modern building",
      "aiHint": "professional cleaning"
    },
    {
      "src": "/images/my electrical engineering.jpg",
      "alt": "Electrical Engineering infrastructure",
      "aiHint": "electrical power grid"
    },
    {
      "src": "/images/my Real Estate development.jpg",
      "alt": "Modern real-estate development skyline",
      "aiHint": "modern city architecture"
    },
    {
      "src": "/images/my security services_.jpg",
      "alt": "Security services with a surveillance camera",
      "aiHint": "security cctv camera"
    }
  ];
  
export const articles: Article[] = [
    { 
        title: 'The Importance of a Balanced Diet', 
        description: 'Learn how a balanced diet can improve your overall health and well-being.',
        image: 'https://picsum.photos/seed/diet/600/400',
        aiHint: 'healthy food'
    },
    { 
        title: 'Benefits of Regular Exercise', 
        description: 'Discover the many benefits of incorporating regular physical activity into your routine.',
        image: 'https://picsum.photos/seed/exercise/600/400',
        aiHint: 'person running'
    },
    { 
        title: 'Managing Stress for a Healthier Life', 
        description: 'Tips and techniques to effectively manage stress and improve your mental health.',
        image: 'https://picsum.photos/seed/stress/600/400',
        aiHint: 'calm meditation'
    },
     { 
        title: 'Understanding Cholesterol', 
        description: 'An in-depth look at cholesterol, its effects on your body, and how to manage it.',
        image: 'https://picsum.photos/seed/cholesterol/600/400',
        aiHint: 'medical chart'
    },
    { 
        title: 'The Guide to a Good Night\'s Sleep', 
        description: 'Having trouble sleeping? This guide will help you understand the importance of sleep and how to improve its quality.',
        image: 'https://picsum.photos/seed/sleep/600/400',
        aiHint: 'person sleeping'
    },
    { 
        title: 'Allergies: Causes, Symptoms, and Treatment', 
        description: 'A comprehensive overview of common allergies and the best ways to manage them.',
        image: 'https://picsum.photos/seed/allergies/600/400',
        aiHint: 'flowers pollen'
    },
];
