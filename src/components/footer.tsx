import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DollarSign, RotateCcw, Ruler, Truck } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-200">
      <div className="container mx-auto space-y-12 px-4 py-12">
        {/* Benefits Section */}
        <div>
          <h2 className="mb-8 text-center text-2xl">Everyday Benefits on CasioUkraine.com</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3">
              <Truck className="size-8" />
              <span>Free Shipping on First Order</span>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="size-8" />
              <span>Free Returns & Easy Exchanges</span>
            </div>
            <div className="flex items-center gap-3">
              <Ruler className="size-8" />
              <span>Complimentary Bracelet Sizing</span>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="size-8" />
              <span>Buy Now, Pay Later</span>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mx-auto max-w-md">
          <h3 className="mb-4 text-lg">Subscribe to get exclusive offers.</h3>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="border-slate-700 bg-transparent"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
          <p className="mt-2 text-sm text-slate-400">
            By submitting your email address you are agreeing to the
            {' '}
            <Link href="/privacy-policy" className="underline hover:text-slate-200">
              Privacy Policy
            </Link>
            {' '}
            and
            {' '}
            <Link href="/terms" className="underline hover:text-slate-200">
              Term & Conditions.
            </Link>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Collection</h3>
            <ul className="space-y-2">
              <li><Link href="/g-shock" className="hover:text-white">G-Shock</Link></li>
              <li><Link href="/edifice" className="hover:text-white">Edifice</Link></li>
              <li><Link href="/vintage" className="hover:text-white">Vintage</Link></li>
              <li><Link href="/pro-trek" className="hover:text-white">Pro Trek</Link></li>
              <li><Link href="/baby-g" className="hover:text-white">Baby G</Link></li>
              <li><Link href="/sport" className="hover:text-white">Sport</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Watches</h3>
            <ul className="space-y-2">
              <li><Link href="/for-man" className="hover:text-white">For Man</Link></li>
              <li><Link href="/for-women" className="hover:text-white">For Women</Link></li>
              <li><Link href="/new-arrivals" className="hover:text-white">New Arrivals</Link></li>
              <li><Link href="/best-sellers" className="hover:text-white">Best Sellers</Link></li>
              <li><Link href="/sale" className="hover:text-white">Sale</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Casio</h3>
            <ul className="space-y-2">
              <li><Link href="/technology" className="hover:text-white">Technology</Link></li>
              <li><Link href="/sustainability" className="hover:text-white">Sustainability</Link></li>
              <li><Link href="/news" className="hover:text-white">News</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/instruction-manuals" className="hover:text-white">Instruction Manuals</Link></li>
              <li><Link href="/warranty-repair" className="hover:text-white">Warranty & Repair</Link></li>
              <li><Link href="/shipping" className="hover:text-white">Shipping</Link></li>
              <li><Link href="/returns" className="hover:text-white">Returns</Link></li>
              <li><Link href="/offline-stores" className="hover:text-white">Offline Stores</Link></li>
              <li><Link href="/contact-us" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between border-t border-slate-800 pt-8 text-sm text-slate-400 sm:flex-row">
          <p>© 2024 Casio Official Dealer. "Timeless Innovation. Trusted quality."</p>
          <div className="mt-4 flex gap-4 sm:mt-0">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Term & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
