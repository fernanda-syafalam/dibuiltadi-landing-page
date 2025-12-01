"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

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
            {`At PT Dibuiltadi Solusi Teknologi, we deliver high-quality, scalable, and secure software solutions tailored to your business needs.`}
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
      </div>
    </section>
  );
};
