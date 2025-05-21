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
    name: 'Surya Himawan',
    userName: 'Manager',
    comment:
      'We are very satisfied with Dibuiltadi’s services. They understood our needs and delivered solutions on time with high quality.',
    rating: 5.0
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Cecep Ardiyanto P',
    userName: 'Director',
    comment:
      'Working with Dibuiltadi has taken our business to the next level. The mobile app they developed greatly helped us improve customer interaction.',
    rating: 5.0
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Mohammad Aziz',
    userName: 'CEO',
    comment: 'Dibuiltadi created a scalable e-commerce platform for us. It increased our online sales by 40% within the first six months!',
    rating: 5.0
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Arif Wicaksan',
    userName: 'IT Manager',
    comment:
      'The ERP system implemented by Dibuiltadi automated our business processes and increased operational efficiency by 30%. Highly recommend their services!',
    rating: 5.0
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Dr. Puspa Wijaya N',
    userName: 'Healthcare Institution Representative',
    comment:
      'The healthcare management system developed by Dibuiltadi significantly reduced patient waiting times and improved overall patient satisfaction.',
    rating: 5.0
  }
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Testimonials</h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">What Our Clients Say</h2>
        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Read stories from satisfied clients who have benefited from our innovative solutions.
        </h3>
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
                    {Array.from({ length: Math.floor(review.rating) }).map((_, index) => (
                      <Star key={index} className="size-4 fill-primary text-primary" />
                    ))}
                    {review.rating % 1 !== 0 && <Star className="size-4 text-primary opacity-50" />}
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>{review.name.slice(0, 2)}</AvatarFallback>
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
