import { ArrowLeft, Leaf, Package, Recycle } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function PackagingInnovationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-900 to-black">
      <div className="container mx-auto px-4 py-12">
        <Link href="/promo">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 size-4" />
            Back to Technologies
          </Button>
        </Link>

        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-5xl font-bold">Packaging Innovation</h1>

          <div className="space-y-8">
            <section className="rounded-lg bg-black/50 p-6">
              <h2 className="mb-4 text-2xl font-semibold">Sustainable Packaging Solutions</h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                Our commitment to environmental responsibility extends to every aspect of our products, including
                packaging. We're transitioning to recycled and biodegradable materials across our product lines,
                ensuring that our packaging solutions are as sustainable as the watches they protect.
              </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="mb-3 text-xl font-semibold">Materials Innovation</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li>• Recycled paper products</li>
                  <li>• Biodegradable materials</li>
                  <li>• Soy-based inks</li>
                  <li>• Minimal plastic use</li>
                </ul>
              </div>

              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="mb-3 text-xl font-semibold">Design Principles</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li>• Compact sizing</li>
                  <li>• Multi-functional design</li>
                  <li>• Easy recycling</li>
                  <li>• Reduced waste</li>
                </ul>
              </div>
            </section>

            <section className="rounded-lg bg-black/50 p-6">
              <h2 className="mb-4 text-2xl font-semibold">Environmental Benefits</h2>
              <div className="grid gap-6 text-center md:grid-cols-3">
                <div className="p-4">
                  <Package className="mx-auto mb-4 size-12 text-teal-400" />
                  <h3 className="mb-2 font-semibold">Smart Design</h3>
                  <p className="text-zinc-300">Efficient material usage</p>
                </div>
                <div className="p-4">
                  <Recycle className="mx-auto mb-4 size-12 text-teal-400" />
                  <h3 className="mb-2 font-semibold">Recyclability</h3>
                  <p className="text-zinc-300">Easy to recycle materials</p>
                </div>
                <div className="p-4">
                  <Leaf className="mx-auto mb-4 size-12 text-teal-400" />
                  <h3 className="mb-2 font-semibold">Eco-Friendly</h3>
                  <p className="text-zinc-300">Biodegradable packaging</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
