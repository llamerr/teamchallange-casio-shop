import { ArrowLeft, Leaf, Recycle, Sun } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function SustainableManufacturingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-black">
      <div className="container mx-auto px-4 py-12">
        <Link href="/promo">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 size-4" />
            Back to Technologies
          </Button>
        </Link>

        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-5xl font-bold">Sustainable Manufacturing</h1>

          <div className="space-y-8">
            <section className="rounded-lg bg-black/50 p-6">
              <h2 className="mb-4 text-2xl font-semibold">Our Green Commitment</h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                At Casio, we're committed to environmentally responsible manufacturing. Our facilities utilize renewable
                energy sources and implement comprehensive waste reduction programs to minimize our environmental impact
                while maintaining the highest quality standards in watchmaking.
              </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="mb-3 text-xl font-semibold">Energy Initiatives</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li>• Solar power integration</li>
                  <li>• LED lighting systems</li>
                  <li>• Energy-efficient machinery</li>
                  <li>• Smart power management</li>
                </ul>
              </div>

              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="mb-3 text-xl font-semibold">Waste Reduction</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li>• Material recycling programs</li>
                  <li>• Water conservation</li>
                  <li>• Zero-waste initiatives</li>
                  <li>• Sustainable sourcing</li>
                </ul>
              </div>
            </section>

            <section className="rounded-lg bg-black/50 p-6">
              <h2 className="mb-4 text-2xl font-semibold">Environmental Impact</h2>
              <div className="grid gap-6 text-center md:grid-cols-3">
                <div className="p-4">
                  <Sun className="mx-auto mb-4 size-12 text-green-400" />
                  <h3 className="mb-2 font-semibold">Clean Energy</h3>
                  <p className="text-zinc-300">Renewable power sources</p>
                </div>
                <div className="p-4">
                  <Recycle className="mx-auto mb-4 size-12 text-green-400" />
                  <h3 className="mb-2 font-semibold">Recycling</h3>
                  <p className="text-zinc-300">Comprehensive material recovery</p>
                </div>
                <div className="p-4">
                  <Leaf className="mx-auto mb-4 size-12 text-green-400" />
                  <h3 className="mb-2 font-semibold">Eco-Design</h3>
                  <p className="text-zinc-300">Sustainable product development</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
