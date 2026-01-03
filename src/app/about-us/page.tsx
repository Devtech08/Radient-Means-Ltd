import Image from 'next/image';
import { Globe, Target, CheckCircle, Award, Users, Shield } from 'lucide-react';

export default function AboutUsPage() {
  const corporateValues = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in every service we deliver.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct our business with unwavering honesty and transparency.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our clients are at the heart of everything we do.',
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: 'We are committed to being a dependable partner for all our clients.',
    },
  ];

  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">About Radiant Means Ltd.</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our mission, our goals, and the core values that drive our commitment to excellence.
          </p>
        </div>
      </section>

      {/* Mission and Goal Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="pr-8">
              <h2 className="text-3xl font-bold text-primary flex items-center mb-4">
                <Globe className="h-8 w-8 mr-3 text-accent" />
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                To be a leading diversified service provider, recognized for our commitment to due diligence, quality, and sustainable value creation for our stakeholders.
              </p>

              <h2 className="text-3xl font-bold text-primary flex items-center mb-4">
                <Target className="h-8 w-8 mr-3 text-accent" />
                Our Goal
              </h2>
              <p className="text-muted-foreground text-lg">
                Radiant Means Ltd. is committed to generating sustainable income through the provision of high-quality and reliable services to customers, thereby ensuring long-term growth and profitability.
              </p>
            </div>
            <div>
              <Image
                src="https://picsum.photos/seed/mission/600/450"
                width={600}
                height={450}
                alt="Corporate Mission"
                data-ai-hint="business strategy meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Corporate Values</h2>
            <p className="mt-2 text-lg text-muted-foreground">The principles that guide our actions.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporateValues.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
