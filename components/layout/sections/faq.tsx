import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'What services does PT Dibuiltadi Teknologi Kreatif provide?',
    answer:
      'We specialize in custom software development, mobile app development, UI/UX design, ERP and CRM systems, virtual account integration, and IT consulting.',
    value: 'item-1'
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We provide tailored solutions for various industries, including retail, financial services, manufacturing, healthcare, and more.',
    value: 'item-2'
  },
  {
    question: 'How do you approach software development projects?',
    answer:
      'Our process includes requirement analysis, prototyping, development, thorough testing, deployment, and ongoing maintenance to ensure quality and efficiency.',
    value: 'item-3'
  },
  {
    question: 'Can you develop a mobile app for both iOS and Android?',
    answer: 'Yes, we develop mobile apps for both platforms with a focus on performance, user experience, and seamless functionality.',
    value: 'item-4'
  },
  {
    question: 'Do you offer post-launch support and updates?',
    answer:
      'Yes, we provide continuous support and updates to keep your software secure, efficient, and aligned with evolving business needs.',
    value: 'item-5'
  },
  {
    question: 'What technologies does your team use?',
    answer:
      'Our team works with modern technologies like ReactJS, NextJS, Laravel, Python, Flutter, and cloud platforms such as AWS and Azure.',
    value: 'item-6'
  },
  {
    question: 'Do you provide ERP and CRM solutions?',
    answer:
      'Yes, we specialize in developing and implementing ERP and CRM systems tailored to your business requirements, ensuring improved productivity and streamlined operations.',
    value: 'item-7'
  },
  {
    question: 'How can we contact you for a project discussion?',
    answer:
      'You can reach us at admin@dibuiltadi.com or call us at +62 857 1131 5972. Visit our website at https://dibuiltadi.com for more information.',
    value: 'item-8'
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-24">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">FAQS</h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">Frequently Asked Questions</h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
