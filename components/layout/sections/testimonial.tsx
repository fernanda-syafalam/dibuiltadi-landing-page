'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}
const reviewList: ReviewProps[] = [
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe',
    userName: 'Product Manager',
    comment:
      'The service provided exceeded all my expectations. Everything was handled professionally, and I couldn’t be happier with the results!',
    rating: 5.0
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Sophia Collins',
    userName: 'Cybersecurity Analyst',
    comment: 'Amazing service! The team was incredibly responsive and made the entire process smooth and stress-free. Highly recommended!',
    rating: 4.8
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Adam Johnson',
    userName: 'Chief Technology Officer',
    comment: 'Top-notch service! From start to finish, everything was handled with care and professionalism. I’m thoroughly impressed.',
    rating: 4.9
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Ethan Parker',
    userName: 'Data Scientist',
    comment:
      'I’m extremely satisfied with the service. The team went above and beyond to ensure all my needs were met. Fantastic experience!',
    rating: 5.0
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Ava Mitchell',
    userName: 'IT Project Manager',
    comment: 'Excellent service! The support team was always available and very helpful throughout. I highly recommend working with them.',
    rating: 5.0
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Isabella Reed',
    userName: 'DevOps Engineer',
    comment:
      'I’m absolutely thrilled with the service. It’s rare to find a team this dedicated to delivering quality. Thank you for a wonderful experience!',
    rating: 4.9
  }
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Testimonials</h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Hear What Our 1000+ Clients Say</h2>
      </div>

      <Carousel
        opts={{
          align: 'start'
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map(review => (
            <CarouselItem key={review.name} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://avatars.githubusercontent.com/u/75042455?v=4" alt="radix" />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
