import { Heart, Phone, Search, ShoppingBag, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Logo } from './Logo/Logo';
import { NavigationDropdowns } from './NavigationDropdowns';

export function Header() {
  return (
    <header className="sticky top-0 z-20 bg-slate-950 px-20 text-white">
      <div className="container flex h-16 items-center justify-between">
        <Logo variant="dark" />

        {/* Main Navigation */}
        <NavigationDropdowns />

        {/* Search Bar */}
        <div className="relative mx-4 hidden grow items-center md:flex">
          <Input
            type="search"
            placeholder="Search"
            className="max-w-72 border-slate-800 bg-slate-900 pr-8 text-white placeholder:text-slate-400 dark:border-slate-200 dark:bg-slate-100 dark:text-slate-950 dark:placeholder:text-slate-600"
          />
          <Search className="absolute right-2 top-1/2 size-4 -translate-y-1/2 text-slate-400 dark:text-slate-600" />
        </div>

        {/* Utility Icons */}
        <div className="flex items-center space-x-4">
          {/* <ThemeToggleButton /> */}
          <Button variant="ghost" size="icon">
            <Phone className="size-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="size-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="size-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <div className="relative">
              <ShoppingBag className="size-5" />
              <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-white text-xs text-slate-950 dark:bg-slate-950 dark:text-white">
                0
              </span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}
