'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useHashParam from '@/hooks/useHashParam';
import { cn } from '@/lib/utils';
import type { ProductDetailsDTO } from '@/services/api/dto/Product/Product.dto';

const tabsData = [
  {
    id: 'basic-information',
    label: 'Basic Information',
  },
  {
    id: 'specifications',
    label: 'Specifications',
  },
  {
    id: 'delivery',
    label: 'Delivery & Returns',
  },
  {
    id: 'manual',
    label: 'Instruction Manual',
  },
];

type SpecSectionProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  direction?: 'row' | 'column';
};

export function SpecSection({ title, description, children, direction }: SpecSectionProps) {
  return (
    <section
      className={cn(
        'flex min-w-[250px] lg:max-w-[568px] flex-col px-4 pt-2 pb-1',
        direction === 'row' ? 'flex-row' : 'flex-col',
      )}
    >
      {title && <h2 className="mb-4 overflow-hidden text-ellipsis font-[400] leading-8 text-[#3F4664]">{title}</h2>}
      {description && (
        <p
          className={cn(
            'leading-8 font-[500] text-[#111321]',
            direction === 'row' && 'ml-2',
          )}
        >
          {description}
        </p>
      )}
      {children}
    </section>
  );
}

type ProductTabsProps = {
  data: ProductDetailsDTO;
};

export function ProductTabs({ data }: ProductTabsProps) {
  const { hashParam } = useHashParam();
  const [selectedLanguage, setSelectedLanguage] = React.useState('');

  const [activeTab, setActiveTab] = React.useState('basic-information');
  useEffect(() => {
    if (hashParam) {
      setActiveTab(hashParam);
    }
  }, [hashParam]);

  if (!data) {
    return null;
  }

  return (
    <Tabs
      defaultValue="basic-information"
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full"
    >
      <TabsList className="h-auto w-full justify-start">
        {tabsData.map(tab => (
          <Link href={`#${tab.id}`} key={tab.id}>
            <TabsTrigger value={tab.id}>
              {tab.label}
            </TabsTrigger>
          </Link>
        ))}
      </TabsList>

      {/* Basic Information Tab */}
      <TabsContent value="basic-information" className="pt-8">
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          {data.basicInformation.sections.map((section, index) => (
            <SpecSection key={index} title={section.title} description={section.description} />
          ))}
        </div>
      </TabsContent>

      {/* Specifications Tab */}
      <TabsContent value="specifications" className="pt-8">
        <div className="flex max-h-full w-full flex-row flex-wrap gap-2 overflow-hidden md:max-h-[675px] md:flex-col lg:max-h-[354px]">
          {data.specifications.specs.map((spec, index) => (
            <SpecSection key={index} title={`${spec.label}:`} description={spec.value} direction="row" />
          ))}
          <SpecSection title="Features:" direction="row">
            <ul>
              {data.specifications.features.map((feature, index) => (
                <li key={index} className="list-none leading-8 text-slate-600">{feature}</li>
              ))}
            </ul>
          </SpecSection>
        </div>
      </TabsContent>

      {/* Delivery & Returns Tab */}
      <TabsContent value="delivery" className="pt-8">
        <div className="flex max-h-full w-full flex-row flex-wrap gap-2 overflow-hidden md:max-h-[675px] md:flex-col lg:max-h-[354px] lg:flex-row">
          <SpecSection title={data.deliveryAndReturns.shipping.title} direction="column">
            <ul className="mx-4 space-y-2">
              {data.deliveryAndReturns.shipping.options.map((option, index) => (
                <li key={index} className="list-disc font-[500] text-[#111321]">{option}</li>
              ))}
            </ul>
          </SpecSection>
          <SpecSection title={data.deliveryAndReturns.payment.title} direction="column">
            <ul className="mx-4 space-y-2">
              {data.deliveryAndReturns.payment.options.map((option, index) => (
                <li key={index} className="list-disc font-[500] text-[#111321]">{option}</li>
              ))}
            </ul>
          </SpecSection>
          <SpecSection title={data.deliveryAndReturns.returns.title} direction="column" description={data.deliveryAndReturns.returns.description} />
        </div>
      </TabsContent>

      {/* Manual Tab */}
      <TabsContent value="manual" className="pt-8">
        <div className="flex max-h-full w-full flex-row flex-wrap gap-2 overflow-hidden md:max-h-[675px] md:flex-col lg:max-h-[354px] lg:flex-row">
          <SpecSection description={data.manual.description} />
          <SpecSection>
            <p className="font-[500] leading-8 text-[#111321]">
              Select your preferred language. Click "Download" to save the manual to your device.
            </p>
            <div className="flex flex-col sm:flex-row">
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-[380px]">
                  <SelectValue placeholder="Choose the manual's language" />
                </SelectTrigger>
                <SelectContent>
                  {data.manual.list.map((manual, index) => (
                    <SelectItem key={index} value={manual.language}>
                      {manual.language}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                disabled={!selectedLanguage}
                onClick={() => window.open(data.manual.list.find(manual => manual.language === selectedLanguage)?.url, '_blank')}
                className="bg-[#111321] text-[#F3F3F3]"
              >
                Download (PDF)
              </Button>
            </div>
          </SpecSection>
        </div>
      </TabsContent>
    </Tabs>
  );
}
