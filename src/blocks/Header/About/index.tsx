'use client';

import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { NewsCard } from '@/blocks/NewsBlock/NewsCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/libs/utils';
import { useNewsList } from '@/services/api/dto/News/News.query';

type AboutTabKeys = 'technology' | 'sustainability' | 'news';

const ABOUT_TABS_CONFIG: Record<AboutTabKeys, {
  title: string;
  content?: {
    title: string;
    items: { title: string; description: string; href: string }[];
  };
}> = {
  technology: {
    title: 'Technology',
    content: {
      title: 'Core Technologies',
      items: [
        {
          title: 'Tough Solar',
          href: '/tough-solar',
          description: 'Solar-powered technology that converts light into energy, eliminating the need for battery changes.',
        },
        {
          title: 'Multi-Band 6',
          href: '/multi-band-6',
          description: 'Radio-controlled timekeeping system that receives calibration signals from atomic clocks worldwide.',
        },
        {
          title: 'Carbon Core Guard',
          href: '/carbon-core-guard',
          description: 'Carbon-fiber reinforced case structure providing superior shock resistance and durability.',
        },
        {
          title: 'Bluetooth® Link',
          href: '/bluetooth-link',
          description: 'Smartphone connectivity for automatic time adjustment and enhanced functionality.',
        },
      ],
    },
  },
  sustainability: {
    title: 'Sustainability',
    content: {
      title: 'Environmental Initiatives',
      items: [
        {
          title: 'Sustainable Manufacturing',
          href: '/sustainable-manufacturing',
          description: 'Our manufacturing facilities utilize renewable energy sources and implement waste reduction programs.',
        },
        {
          title: 'Product Longevity',
          href: '/product-longevity',
          description: 'Solar-powered watches and durable designs reduce battery waste and extend product lifecycle.',
        },
        {
          title: 'Packaging Innovation',
          href: '/packaging-innovation',
          description: 'Transition to recycled and biodegradable packaging materials across our product lines.',
        },
      ],
    },
  },
  news: {
    title: 'News',
  },
} as const;

export default function AboutContent() {
  const { data: news } = useNewsList();
  const [activeTab, setActiveTab] = React.useState<AboutTabKeys>('technology');

  const getContent = () => (
    <>
      {activeTab !== 'news' && ABOUT_TABS_CONFIG[activeTab].content && (
        <div className="max-h-[336px] overflow-y-auto p-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">{ABOUT_TABS_CONFIG[activeTab].content.title}</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {ABOUT_TABS_CONFIG[activeTab].content.items.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h3 className="mb-1 text-sm font-medium">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
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
          </div>
        </div>
      )}

      {activeTab === 'news' && (
        <div className="flex gap-8 p-8">
          <div className="flex min-w-[170px] items-end justify-center border-gray-200">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-base font-normal text-gray-900 underline transition-colors hover:text-gray-600"
            >
              View All
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grow grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news?.slice(0, 3).map((card, index) => (
              <NewsCard
                key={index}
                {...card}
                href={`/news/${card.href}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className="flex w-full">
      {/* Sidebar Navigation */}
      <nav className="w-64 border-r">
        <Tabs
          value={activeTab}
          onValueChange={activeTab => setActiveTab(activeTab as AboutTabKeys)}
          orientation="vertical"
          className="h-full"
        >
          <TabsList className="flex size-full flex-col items-stretch justify-start">
            {Object.entries(ABOUT_TABS_CONFIG).map(([id, { title }]) => (
              <TabsTrigger
                key={id}
                value={id}
                onMouseOver={() => setActiveTab(id as AboutTabKeys)}
                className="relative justify-start text-left font-medium"
              >
                {title}
                <ChevronRight
                  className={cn(activeTab === id ? 'visible' : 'hidden', 'absolute right-0 mr-4')}
                  aria-hidden="true"
                />
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </nav>

      {/* Main Content */}
      <main className="min-h-[318px] flex-1">
        {getContent()}
      </main>
    </div>
  );
}
