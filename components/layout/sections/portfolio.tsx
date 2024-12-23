import Image from 'next/image';
import Link from 'next/link';

interface PortfolioProps {
  name: string;
  description: string;
  link: string;
  image: string;
}

const portfolios: PortfolioProps[] = [
  {
    name: 'Arthaprada Remittansi Indonesia',
    description: 'A secure and reliable payment integration with PJP3.',
    link: 'https://www.arthaprada.co.id',
    image: '/portfolio/arthaprada.png'
  },
  {
    name: 'Assasta Indonesia',
    description: 'An innovative platform tailored for digital transformation in Indonesia.',
    link: '#',
    image: '/portfolio/asasta.png'
  },
  {
    name: 'Ptikb',
    description: 'A comprehensive ERP system designed to improve manufacturing processes.',
    link: 'https://ptikb.co.id',
    image: '/portfolio/ptikb.png'
  },
  {
    name: 'Poundfit.org',
    description: 'A collaborative tool aimed at enhancing team productivity and communication.',
    link: 'https://poundfit.org',
    image: '/portfolio/poundfit.png'
  },
  {
    name: 'CRM System',
    description: 'A custom CRM system to optimize client relationship management.',
    link: '#',
    image: '/portfolio/crm.png'
  },
  {
    name: 'Intrajasa.id',
    description: 'A fintech platform delivering secure and efficient digital payment solutions.',
    link: 'https://intrajasa.id',
    image: '/portfolio/intrajasa.png'
  }
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-lg text-primary tracking-wider mb-2">Portfolio</h2>
        <h3 className="text-3xl md:text-4xl font-bold">Our Featured Projects</h3>
        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Discover how we have empowered businesses across various industries with cutting-edge solutions.</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolios.map(({ name, description, link, image }) => (
          <div key={name} className="group bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <Link href={link} target="_blank">
              <div className="relative w-full h-48">
                <Image src={image} alt={name} fill className="object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold">{name}</h4>
                <p className="text-sm opacity-80 mt-2">{description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
