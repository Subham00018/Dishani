
'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import { HelpCircle, Send } from 'lucide-react';

const faqData = [
  {
    question: 'How is the college data updated?',
    answer: 'The college information is periodically reviewed and updated based on publicly available data from official college websites and other reliable sources. However, for the most current details, always refer to the official college website.',
  },
  {
    question: 'How do I compare colleges?',
    answer: 'Navigate to the "Colleges" page. You can select up to two colleges for comparison by clicking the "Compare" button on their respective cards. Once you have selected two, a "Compare Selected" button will become active, which will take you to the comparison page.',
  },
  {
    question: 'Can I suggest a college to be added or report an error?',
    answer: 'Currently, there isn\'t a direct feature for suggestions or error reporting. Please use the "Contact Us" form on this page for any feedback or suggestions. We appreciate your help in keeping our information accurate!',
  },
  {
    question: 'Is the information on this website official?',
    answer: 'This website aims to provide helpful information for college selection. While we strive for accuracy, the data is aggregated from various sources and should be used as a guide. Always confirm details with the official college websites or admission offices.',
  },
];

export default function HelpSupportPage() {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleContactSubmit = (event: FormEvent) => {
    event.preventDefault();
    // In a real application, you would handle form submission here (e.g., send data to a backend API)
    console.log('Contact form submission:', { name, email, subject, message });
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you shortly.',
    });
    // Reset form fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <HelpCircle className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold text-primary">Help & Support</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Find answers to common questions or get in touch with our team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
            <CardDescription>Find quick answers to common queries.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Contact Us</CardTitle>
            <CardDescription>Have a specific question? Send us a message.</CardDescription>
          </CardHeader>
          <form onSubmit={handleContactSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="contact-name">Full Name</Label>
                <Input
                  id="contact-name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-email">Email Address</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-subject">Subject</Label>
                <Input
                  id="contact-subject"
                  placeholder="Question about..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Your detailed message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
