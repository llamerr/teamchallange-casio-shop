'use client';

import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import AboutContent from './About';
import CollectionsContent from './Collections';
import SupportContent from './Support';
import WatchesContent from './Watches';

const navigationItems: Record<string, string> = {
  collections: 'Collections',
  watches: 'Watches',
  about: 'About Casio',
  support: 'Support',
};

export function NavigationDropdowns() {
  const [value, setValue] = React.useState('collections');

  const getContent = (section: string) => {
    switch (section) {
      case 'collections':
        return <CollectionsContent />;
      case 'watches':
        return <WatchesContent />;
      case 'about':
        return <AboutContent />;
      case 'support':
        return <SupportContent />;
      default:
        return null;
    }
  };

  return (
    <NavigationMenu
      value={value}
      onValueChange={setValue}
      className="h-full"
    >
      <NavigationMenuList className="h-full">
        {Object.entries(navigationItems).map(([key, title]) => (
          <NavigationMenuItem key={key} className="h-full">
            <NavigationMenuTrigger className="h-full text-xl font-medium">{title}</NavigationMenuTrigger>
            {/* TODO: need to have width so animation works properly */}
            <NavigationMenuContent className="w-[1200px] min-w-[318px]">
              <div className="flex">
                {getContent(key)}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
