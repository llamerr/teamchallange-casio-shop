import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  const technologies = [
    {
      title: 'Core Technologies',
      items: [
        {
          name: 'Tough Solar',
          description:
            'Solar-powered technology that converts light into energy, eliminating the need for battery changes.',
          href: '/tough-solar',
        },
        {
          name: 'Multi-Band 6',
          description:
            'Radio-controlled timekeeping system that receives calibration signals from atomic clocks worldwide.',
          href: '/multi-band-6',
        },
        {
          name: 'Carbon Core Guard',
          description: 'Carbon-fiber reinforced case structure providing superior shock resistance and durability.',
          href: '/carbon-core-guard',
        },
        {
          name: 'Bluetooth® Link',
          description: 'Smartphone connectivity for automatic time adjustment and enhanced functionality.',
          href: '/bluetooth-link',
        },
      ],
    },
    {
      title: 'Environmental Initiatives',
      items: [
        {
          name: 'Sustainable Manufacturing',
          description:
            'Our manufacturing facilities utilize renewable energy sources and implement waste reduction programs.',
          href: '/sustainable-manufacturing',
        },
        {
          name: 'Product Longevity',
          description: 'Solar-powered watches and durable designs reduce battery waste and extend product lifecycle.',
          href: '/product-longevity',
        },
        {
          name: 'Packaging Innovation',
          description: 'Transition to recycled and biodegradable packaging materials across our product lines.',
          href: '/packaging-innovation',
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-12 text-center text-4xl font-bold">Casio Innovation Hub</h1>

      {technologies.map(section => (
        <div key={section.title} className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">{section.title}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {section.items.map(item => (
              <Card key={item.name} className="border-zinc-800 bg-zinc-900 text-white">
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-zinc-400">{item.description}</p>
                  <Link href={`/promo${item.href}`}>
                    <Button variant="secondary" className="w-full">
                      Learn More
                      {' '}
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
