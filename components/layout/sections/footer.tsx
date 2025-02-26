import { Separator } from '@/components/ui/separator';
import { ChevronsDownIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-24">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-x-12 gap-y-8">
          {/* Logo and Company Name */}
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <Image src="/logo.png" alt="Dibuiltadi Logo" width={35} height={35} className="rounded-lg mr-2" />
              <h3 className="text-2xl">Dibuiltadi</h3>
            </Link>
            <p className="mt-4 text-sm opacity-80">
              Empowering businesses with innovative software solutions. Your trusted partner in technology.
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <Link href="mailto:admin@dibuiltadi.com" className="opacity-60 hover:opacity-100">
                Email Us
              </Link>
            </div>
            <div>
              <Link href="tel:+6285711315972" className="opacity-60 hover:opacity-100">
                Call Us
              </Link>
            </div>
            <div>
              <Link href="https://dibuiltadi.com" target="_blank" className="opacity-60 hover:opacity-100">
                Website
              </Link>
            </div>
          </div>

          {/* Platforms Section */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforms</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                iOS
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Android
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Web
              </Link>
            </div>
          </div>

          {/* Help Section */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>
            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Feedback
              </Link>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Social Media</h3>
            <div>
              <Link href="https://twitter.com" target="_blank" className="opacity-60 hover:opacity-100">
                Twitter
              </Link>
            </div>
            <div>
              <Link href="https://linkedin.com" target="_blank" className="opacity-60 hover:opacity-100">
                LinkedIn
              </Link>
            </div>
            <div>
              <Link href="https://instagram.com" target="_blank" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>
          </div>
          {/* PSE Section */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-items-start">
              <Image src="https://a.m.dana.id/resource/danaweb-v2/footer-kominfo-logo.svg" alt="PSE Logo" width={40} height={40} />
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Footer Credits */}
        <section className="text-center">
          <h3 className="text-sm opacity-70">
            &copy; 2024 Designed and developed by
            <Link
              target="_blank"
              href="https://dibuiltadi.com"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              PT Dibuiltadi Teknologi Kreatif
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
