import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { icons } from 'lucide-react';

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: 'Code',
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your unique business challenges and enhance operational efficiency.'
  },
  {
    icon: 'Smartphone',
    title: 'Mobile App Development',
    description: 'Create engaging and user-friendly mobile applications for iOS and Android to reach your customers effectively.'
  },
  {
    icon: 'Server',
    title: 'Enterprise Integration',
    description: 'Implement ERP and CRM solutions that seamlessly integrate your business operations and boost productivity.'
  },
  {
    icon: 'Brush',
    title: 'UI/UX Design',
    description: 'Deliver intuitive and aesthetically pleasing user interfaces for websites and applications.'
  },
  {
    icon: 'BarChart2',
    title: 'Data-Driven Insights',
    description: 'Leverage advanced analytics to make informed decisions and optimize business processes.'
  },
  {
    icon: 'LifeBuoy',
    title: 'IT Consulting',
    description: 'Receive strategic guidance to implement technology solutions that align with your long-term goals.'
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Features</h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Why Choose Our Services</h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We specialize in delivering cutting-edge software solutions that empower your business with innovation and efficiency.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon name={icon as keyof typeof icons} size={24} color="hsl(var(--primary))" className="text-primary" />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">{description}</CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
