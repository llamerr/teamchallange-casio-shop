import { ArrowLeft, Shield } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function CarbonCoreGuardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-800 to-black">
      <div className="container mx-auto px-4 py-12">
        <Link href="/promo">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 size-4" />
            Back to Technologies
          </Button>
        </Link>

        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-5xl font-bold">Carbon Core Guard</h1>

          <div className="space-y-8">
            <section className="rounded-lg bg-black/50 p-6">
              <h2 className="mb-4 text-2xl font-semibold">Ultimate Protection</h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                Carbon Core Guard represents a revolutionary approach to watch construction. By incorporating carbon
                fiber materials into the case structure, we've created timepieces that offer unprecedented levels of
                durability and shock resistance while maintaining a lightweight profile.
              </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="mb-3 text-xl font-semibold">Material Innovation</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li>• Carbon fiber reinforcement</li>
                  <li>• Advanced polymer integration</li>
                  <li>• Strategic material placement</li>
                  <li>• Optimized weight distribution</li>
                </ul>
              </div>

              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="mb-3 text-xl font-semibold">Protection Features</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li>• Superior shock absorption</li>
                  <li>• Enhanced structural integrity</li>
                  <li>• Vibration resistance</li>
                  <li>• Impact protection</li>
                </ul>
              </div>
            </section>

            <section className="rounded-lg bg-black/50 p-6">
              <h2 className="mb-4 text-2xl font-semibold">Protection Layers</h2>
              <div className="grid gap-6 text-center md:grid-cols-3">
                <div className="p-4">
                  <Shield className="mx-auto mb-4 size-12 text-zinc-400" />
                  <h3 className="mb-2 font-semibold">Outer Shell</h3>
                  <p className="text-zinc-300">First line of defense against impacts</p>
                </div>
                <div className="p-4">
                  <Shield className="mx-auto mb-4 size-12 text-zinc-400" />
                  <h3 className="mb-2 font-semibold">Carbon Core</h3>
                  <p className="text-zinc-300">Advanced shock absorption layer</p>
                </div>
                <div className="p-4">
                  <Shield className="mx-auto mb-4 size-12 text-zinc-400" />
                  <h3 className="mb-2 font-semibold">Inner Protection</h3>
                  <p className="text-zinc-300">Module securing system</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
