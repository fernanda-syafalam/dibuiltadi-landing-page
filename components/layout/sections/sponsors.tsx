'use client';

import { Icon } from '@/components/ui/icon';
import { Marquee } from '@devnomic/marquee';
import '@devnomic/marquee/dist/index.css';
import { icons } from 'lucide-react';

interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: 'Briefcase',
    name: 'Arthaprada'
  },
  {
    icon: 'Building',
    name: 'Asastaindonesia'
  },
  {
    icon: 'Archive',
    name: 'Ptikb'
  },
  {
    icon: 'Dumbbell',
    name: 'Poundfit'
  },
  {
    icon: 'Settings',
    name: 'CRM System'
  },
  {
    icon: 'Wallet',
    name: 'Intrajasa'
  }
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-2xl text-center mb-6">Our Featured Clients and Projects</h2>

      <div className="mx-auto">
        <Marquee className="gap-[3rem]" fade innerClassName="gap-[3rem]" pauseOnHover>
          {sponsors.map(({ icon, name }) => (
            <div key={name} className="flex items-center text-xl md:text-2xl font-medium">
              <Icon name={icon as keyof typeof icons} size={32} color={`hsl(var(--primary))`} className="mr-2" />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
