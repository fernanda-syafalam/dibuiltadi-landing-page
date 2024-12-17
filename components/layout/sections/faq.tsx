import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}
const FAQList: FAQProps[] = [
  {
    question: 'What services does your software house provide?',
    answer:
      'We offer custom software development, web and mobile app development, UI/UX design, system integration, and ongoing support and maintenance.',
    value: 'item-1'
  },
  {
    question: 'How long does it take to develop a software project?',
    answer:
      'The timeline depends on the complexity and scope of the project. A simple project may take a few weeks, while a more complex one could take several months. We provide clear timelines after assessing your requirements.',
    value: 'item-2'
  },
  {
    question: 'Do you provide post-launch support and maintenance?',
    answer: 'Yes, we offer ongoing support, maintenance, and updates to ensure your software remains efficient, secure, and up-to-date.',
    value: 'item-3'
  },
  {
    question: 'Can you help improve an existing application or software?',
    answer:
      'Absolutely. We specialize in upgrading and optimizing existing applications to enhance performance, security, and user experience.',
    value: 'item-4'
  },
  {
    question: 'What technologies do you use for development?',
    answer:
      'We work with modern technologies, including but not limited to ReactJS, NextJS, Angular, NodeJS, Laravel, Python, Flutter, and various cloud platforms such as AWS and Azure.',
    value: 'item-5'
  },
  {
    question: 'How do you ensure the quality of your software?',
    answer:
      'We follow industry best practices, including agile development, code reviews, automated testing, and continuous feedback to ensure high-quality and reliable software.',
    value: 'item-6'
  },
  {
    question: 'How much does a custom software project cost?',
    answer:
      'The cost varies based on the project size, features, and complexity. We offer transparent pricing and will provide you with a detailed estimate after understanding your needs.',
    value: 'item-7'
  },
  {
    question: 'Can you work with clients from different time zones?',
    answer: 'Yes, we work with clients globally and adjust our communication and collaboration schedules to accommodate your time zone.',
    value: 'item-8'
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">FAQS</h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">Common Questions</h2>
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
