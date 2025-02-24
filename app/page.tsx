import { BenefitsSection } from '@/components/layout/sections/benefits';
import { CommunitySection } from '@/components/layout/sections/community';
import { ContactSection } from '@/components/layout/sections/contact';
import { FAQSection } from '@/components/layout/sections/faq';
import { FeaturesSection } from '@/components/layout/sections/features';
import { FooterSection } from '@/components/layout/sections/footer';
import { HeroSection } from '@/components/layout/sections/hero';
import { PortfolioSection } from '@/components/layout/sections/portfolio';
import { PricingSection } from '@/components/layout/sections/pricing';
import { ServicesSection } from '@/components/layout/sections/services';
import { SponsorsSection } from '@/components/layout/sections/sponsors';
import { TestimonialSection } from '@/components/layout/sections/testimonial';
import Head from 'next/head';

export const metadata = {
  title: 'Dibuiltadi - Software House and Development Agency',
  description:
    'We are a team of expert software developers and designers with a passion for delivering high-quality solutions. We specialize in web and mobile application development, UI/UX design, and software consulting.',
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    type: 'website',
    url: 'https://dibuiltadi.vercel.app',
    title: 'Dibuiltadi - Software House and Development Agency',
    description:
      'We are a team of expert software developers and designers with a passion for delivering high-quality solutions. We specialize in web and mobile application development, UI/UX design, and software consulting.',
    images: [
      {
        url: 'https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/dibuiltadi.jpg',
        width: 1200,
        height: 630,
        alt: 'Dibuiltadi - Software House and Development Agency'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://dibuiltadi.vercel.app',
    title: 'Dibuiltadi - Software House and Development Agency',
    description:
      'We are a team of expert software developers and designers with a passion for delivering high-quality solutions. We specialize in web and mobile application development, UI/UX design, and software consulting.',
    images: ['https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/dibuiltadi.jpg']
  }
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <PortfolioSection />
      {/* <TeamSection /> */}
      {/* <CommunitySection /> */}
      {/* <PricingSection /> */}
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
