'use client';

import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/libs/utils';

import Contact from './contact';
import InstructionManuals from './instruction-manuals';
import OfflineStores from './offline-stores';
import Returns from './returns';
import Shipping from './shipping';
import WarrantyRepair from './warranty-repair';

const TABS_CONFIG = {
  'contact': 'Contact Us',
  'instruction-manuals': 'Instruction Manuals',
  'offline-stores': 'Offline Stores',
  'returns': 'Returns',
  'shipping': 'Shipping',
  'warranty-repair': 'Warranty & Repair',
};

export default function SupportContent() {
  const [activeTab, setActiveTab] = useState('instruction-manuals');

  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <nav className="w-64 border-r">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          orientation="vertical"
          className="h-full"
        >
          <TabsList className="flex size-full flex-col items-stretch justify-start">
            {Object.entries(TABS_CONFIG).map(([id, title]) => (
              <TabsTrigger
                key={id}
                value={id}
                onMouseOver={() => setActiveTab(id)}
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
      <main className="flex-1">
        {activeTab === 'instruction-manuals' && <InstructionManuals />}
        {activeTab === 'warranty-repair' && <WarrantyRepair />}
        {activeTab === 'shipping' && <Shipping />}
        {activeTab === 'returns' && <Returns />}
        {activeTab === 'offline-stores' && <OfflineStores />}
        {activeTab === 'contact' && <Contact />}
      </main>
    </div>
  );
}
