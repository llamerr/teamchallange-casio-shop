import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Phone, Search, ShoppingBag, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/placeholder.svg"
              alt="Casio"
              width={100}
              height={24}
              className="h-6 w-auto"
            />
          </Link>

          {/* Main Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link href="/collections" className="hover:text-slate-300">
              Collections
            </Link>
            <Link href="/watches" className="hover:text-slate-300">
              Watches
            </Link>
            <Link href="/about" className="hover:text-slate-300">
              About Casio
            </Link>
            <Link href="/support" className="hover:text-slate-300">
              Support
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="relative mx-4 hidden w-full max-w-xs items-center md:flex">
            <Input
              type="search"
              placeholder="Search"
              className="border-slate-800 bg-slate-900 pr-8 text-white placeholder:text-slate-400"
            />
            <Search className="absolute right-2 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          </div>

          {/* Utility Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-slate-300">
              <Phone className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-slate-300">
              <User className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-slate-300">
              <Heart className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-slate-300">
              <div className="relative">
                <ShoppingBag className="size-5" />
                <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-white text-xs text-slate-950">
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
