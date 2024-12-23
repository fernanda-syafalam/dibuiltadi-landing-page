'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-36 my-2">
        <div className="text-center space-y-8">
          <div className=" mx-auto text-center text-2xl md:text-6xl font-bold">
            <h1>
              Empowering Your Business with
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Innovative Software Solutions
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`At PT Dibuiltadi Teknologi Kreatif, we deliver high-quality, scalable, and secure software solutions tailored to your business needs.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button
              asChild
              className="relative inline-flex h-13 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Link href="#contact">
                <span className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2542B_0%,#393BB2_50%,#E2542B_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-lg font-medium text-white backdrop-blur-3xl">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rounded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src={theme === 'light' ? '/hero-image-light.jpeg' : '/hero-image-dark.jpeg'}
            alt="Dibuiltadi Hero"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
