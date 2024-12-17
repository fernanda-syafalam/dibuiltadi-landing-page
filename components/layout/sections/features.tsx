import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}
const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Mobile Friendly",
    description:
      "With a focus on mobile-first design, we ensure that your website looks great and works well on any device.",
  },
  {
    icon: "BadgeCheck",
    title: "Social Proof",
    description:
      "We use customer testimonials and reviews to build trust and credibility with potential customers.",
  },
  {
    icon: "Goal",
    title: "Targeted Content",
    description:
      "We help you create content that speaks directly to your target audience and addresses their pain points.",
  },
  {
    icon: "PictureInPicture",
    title: "Strong Visuals",
    description:
      "We use high-quality images and graphics to make your website stand out and capture visitors' attention.",
  },
  {
    icon: "MousePointerClick",
    title: "Clear CTA",
    description:
      "We make sure your call-to-action is clear and stands out, making it easy for visitors to take the next step.",
  },
  {
    icon: "Newspaper",
    title: "Clear Headline",
    description:
      "We help you craft a headline that effectively communicates your value proposition and resonates with your target audience.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We believe in user-friendly design and mobile-friendliness, so we built our
        landing page builder with a drag and drop interface and fully responsive
        templates.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
