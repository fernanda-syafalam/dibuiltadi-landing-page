import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { icons } from 'lucide-react';

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}
const benefitList: BenefitsProps[] = [
  {
    icon: 'Code',
    title: 'Customized Software Solutions',
    description: 'Tailored software development designed to meet your unique business needs, ensuring scalability and security.'
  },
  {
    icon: 'Smartphone',
    title: 'Mobile App Development',
    description: 'Seamless and engaging mobile applications to connect with your customers effectively on iOS and Android.'
  },
  {
    icon: 'Database',
    title: 'Enterprise Integration',
    description: 'Comprehensive ERP and CRM solutions that streamline operations and enhance productivity across your organization.'
  },
  {
    icon: 'Paintbrush',
    title: 'UI/UX Design Excellence',
    description: 'Intuitive and visually appealing designs that provide exceptional user experiences across all platforms.'
  }
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose PT Dibuiltadi Teknologi Kreatif?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Unlock your business potential with our innovative solutions, designed to empower your organization with efficiency,
            scalability, and reliability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card key={title} className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number">
              <CardHeader>
                <div className="flex justify-between">
                  <Icon name={icon as keyof typeof icons} size={32} color="hsl(var(--primary))" className="mb-6 text-primary" />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">{description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
