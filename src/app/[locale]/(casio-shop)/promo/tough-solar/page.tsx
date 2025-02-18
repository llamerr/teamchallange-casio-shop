import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function ToughSolarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-900 to-black">
      <div className="container mx-auto px-4 py-12">
        <Link href="/promo">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 size-4" />
            Back to Technologies
          </Button>
        </Link>

        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-5xl font-bold">Tough Solar Technology</h1>

          <div className="space-y-8">
            <section className="rounded-lg bg-black/50 p-6">
              <h2 className="mb-4 text-2xl font-semibold">Infinite Power, Zero Waste</h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                Tough Solar technology represents our commitment to sustainable timekeeping. By harnessing the power of
                light, our watches convert both natural and artificial illumination into energy, storing it in a
                high-capacity battery that can power your timepiece for months, even in complete darkness.
              </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="mb-3 text-xl font-semibold">Key Features</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li>• High-efficiency solar cells</li>
                  <li>• Advanced power reserve system</li>
                  <li>• Low-power consumption circuit</li>
                  <li>• Power saving mode</li>
                </ul>
              </div>

              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="mb-3 text-xl font-semibold">Environmental Impact</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li>• Zero battery waste</li>
                  <li>• Reduced carbon footprint</li>
                  <li>• Sustainable energy usage</li>
                  <li>• Extended product lifecycle</li>
                </ul>
              </div>
            </section>

            <section className="rounded-lg bg-black/50 p-6">
              <h2 className="mb-4 text-2xl font-semibold">How It Works</h2>
              <div className="space-y-4 text-zinc-300">
                <p>1. Solar panels beneath the watch face capture light energy</p>
                <p>2. Advanced conversion technology transforms light into electrical power</p>
                <p>3. Excess energy is stored in a rechargeable battery</p>
                <p>4. Power management system ensures optimal energy distribution</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
