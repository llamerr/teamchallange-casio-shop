import { ArrowLeft, Battery, Clock, Shield } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function ProductLongevityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-black">
      <div className="container mx-auto px-4 py-12">
        <Link href="/promo">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 size-4" />
            Back to Technologies
          </Button>
        </Link>

        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-5xl font-bold">Product Longevity</h1>

          <div className="space-y-8">
            <section className="rounded-lg bg-black/50 p-6">
              <h2 className="mb-4 text-2xl font-semibold">Built to Last</h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                Our commitment to product longevity goes beyond mere durability. Through innovative solar-powered
                technology and robust design principles, we create timepieces that not only stand the test of time but
                also minimize environmental impact by reducing battery waste and extending the product lifecycle.
              </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="mb-3 text-xl font-semibold">Design Features</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li>• Robust case construction</li>
                  <li>• Scratch-resistant materials</li>
                  <li>• Water resistance</li>
                  <li>• Impact protection</li>
                </ul>
              </div>

              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="mb-3 text-xl font-semibold">Sustainability Impact</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li>• Reduced battery waste</li>
                  <li>• Extended service life</li>
                  <li>• Minimal maintenance needs</li>
                  <li>• Recyclable components</li>
                </ul>
              </div>
            </section>

            <section className="rounded-lg bg-black/50 p-6">
              <h2 className="mb-4 text-2xl font-semibold">Longevity Features</h2>
              <div className="grid gap-6 text-center md:grid-cols-3">
                <div className="p-4">
                  <Battery className="mx-auto mb-4 size-12 text-emerald-400" />
                  <h3 className="mb-2 font-semibold">Power Efficiency</h3>
                  <p className="text-zinc-300">Solar-powered technology</p>
                </div>
                <div className="p-4">
                  <Shield className="mx-auto mb-4 size-12 text-emerald-400" />
                  <h3 className="mb-2 font-semibold">Durability</h3>
                  <p className="text-zinc-300">Robust construction</p>
                </div>
                <div className="p-4">
                  <Clock className="mx-auto mb-4 size-12 text-emerald-400" />
                  <h3 className="mb-2 font-semibold">Longevity</h3>
                  <p className="text-zinc-300">Extended product life</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
