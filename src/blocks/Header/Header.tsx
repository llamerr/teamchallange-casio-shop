import { Heart, Phone, Search, ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';

import { ThemeToggleButton } from '@/components/ThemeToggleButton/ThemeToggleButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Logo } from './Logo/Logo';

export function Header() {
  return (
    <header className="sticky top-0 z-20 bg-slate-950 text-white dark:bg-white dark:text-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo variant="dark" />

          {/* Main Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link href="/collections" className="hover:text-slate-300 dark:hover:text-slate-700">
              Collections
            </Link>
            <Link href="/watches" className="hover:text-slate-300 dark:hover:text-slate-700">
              Watches
            </Link>
            <Link href="/about" className="hover:text-slate-300 dark:hover:text-slate-700">
              About Casio
            </Link>
            <Link href="/support" className="hover:text-slate-300 dark:hover:text-slate-700">
              Support
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="relative mx-4 hidden w-full max-w-xs items-center md:flex">
            <Input
              type="search"
              placeholder="Search"
              className="border-slate-800 bg-slate-900 pr-8 text-white placeholder:text-slate-400 dark:border-slate-200 dark:bg-slate-100 dark:text-slate-950 dark:placeholder:text-slate-600"
            />
            <Search className="absolute right-2 top-1/2 size-4 -translate-y-1/2 text-slate-400 dark:text-slate-600" />
          </div>

          {/* Utility Icons */}
          <div className="flex items-center space-x-4">
            <ThemeToggleButton />
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
      </div>
    </header>
  );
}
