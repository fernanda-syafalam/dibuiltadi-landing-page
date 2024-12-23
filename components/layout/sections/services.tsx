import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

enum ProService {
  YES = 1,
  NO = 0
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: 'Custom Software Development',
    description: 'Develop tailored software solutions that align perfectly with your business needs, ensuring efficiency and scalability.',
    pro: ProService.YES
  },
  {
    title: 'Mobile App Development',
    description: 'Create seamless and user-friendly mobile applications for iOS and Android to connect with your audience effectively.',
    pro: ProService.YES
  },
  {
    title: 'Enterprise Solutions',
    description: 'Implement ERP and CRM systems to streamline business operations and enhance productivity.',
    pro: ProService.YES
  },
  {
    title: 'UI/UX Design Services',
    description: 'Craft intuitive and visually appealing user interfaces to provide excellent user experiences across platforms.',
    pro: ProService.NO
  },
  {
    title: 'IT Consulting',
    description: 'Receive strategic guidance and advice on implementing technology solutions to achieve your business goals.',
    pro: ProService.NO
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Services</h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Empower Your Business with Our Expertise</h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From custom software and mobile apps to enterprise solutions, we deliver services designed to help your business succeed.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card key={title} className="bg-muted/60 dark:bg-card h-full relative">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge data-pro={ProService.YES === pro} variant="secondary" className="absolute -top-2 -right-3 data-[pro=false]:hidden">
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
