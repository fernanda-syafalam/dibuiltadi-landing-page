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
    name: 'Fintech PJP3',
    description: 'A secure and reliable payment integration with PJP3.',
    link: '#',
    image: '/portfolio/fintech.jpeg'
  },
  {
    name: 'Bursa Exchange System',
    description: 'An advanced trading platform designed for digital transformation in Indonesia',
    link: '#',
    image: '/portfolio/bursa-exchange.jpeg'
  },
  {
    name: 'Supply Chain System',
    description: 'A powerful platform streamlining logistics operations and optimizing supply chain management.',
    link: '#',
    image: '/portfolio/suply-chain-system.jpeg'
  },
  {
    name: 'CRM System',
    description: 'A custom CRM system to optimize client relationship management.',
    link: '#',
    image: '/portfolio/crm-system.jpeg'
  },
  {
    name: 'WhatsApp Blasts',
    description: 'A digital marketing tool for broadcasting messages to WhatsApp users.',
    link: '#',
    image: '/portfolio/wa-blast.jpeg'
  }
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-lg text-primary tracking-wider mb-2">Portfolio</h2>
        <h3 className="text-3xl md:text-4xl font-bold">Our Featured Projects</h3>
        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
          Discover how we have empowered businesses across various industries with cutting-edge solutions.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolios.map(({ name, description, link, image }) => (
          <div key={name} className="group bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            {/* <Link href={link} target="_blank"> */}
              <div className="relative w-full h-48">
                <Image src={image} alt={name} fill className="object-cover transition-transform group-hover:scale-105 blur-sm" />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold">{name}</h4>
                <p className="text-sm opacity-80 mt-2">{description}</p>
              </div>
            {/* </Link> */}
          </div>
        ))}
      </div>
    </section>
  );
};
