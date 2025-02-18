import { ArrowLeft, Radio } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function MultiBand6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black">
      <div className="container mx-auto px-4 py-12">
        <Link href="/promo">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 size-4" />
            Back to Technologies
          </Button>
        </Link>

        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-5xl font-bold">Multi-Band 6 Technology</h1>

          <div className="space-y-8">
            <section className="rounded-lg bg-black/50 p-6">
              <h2 className="mb-4 text-2xl font-semibold">Perfect Time, Anywhere</h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                Multi-Band 6 represents the pinnacle of timekeeping accuracy. By receiving calibration signals from six
                time calibration stations worldwide, your watch automatically adjusts to maintain atomic clock
                precision, ensuring you're always on time, no matter where you are.
              </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="mb-3 text-xl font-semibold">Global Coverage</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li>• Japan (2 stations)</li>
                  <li>• United States</li>
                  <li>• United Kingdom</li>
                  <li>• Germany</li>
                  <li>• China</li>
                </ul>
              </div>

              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="mb-3 text-xl font-semibold">Technical Features</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li>• Automatic time calibration</li>
                  <li>• Multi-frequency reception</li>
                  <li>• Smart signal detection</li>
                  <li>• Power-efficient operation</li>
                </ul>
              </div>
            </section>

            <section className="rounded-lg bg-black/50 p-6">
              <h2 className="mb-4 text-2xl font-semibold">Signal Reception</h2>
              <div className="grid gap-6 text-center md:grid-cols-3">
                <div className="p-4">
                  <Radio className="mx-auto mb-4 size-12 text-blue-400" />
                  <h3 className="mb-2 font-semibold">Auto Receive</h3>
                  <p className="text-zinc-300">Automatic calibration up to 6 times daily</p>
                </div>
                <div className="p-4">
                  <Radio className="mx-auto mb-4 size-12 text-blue-400" />
                  <h3 className="mb-2 font-semibold">Manual Receive</h3>
                  <p className="text-zinc-300">On-demand signal reception</p>
                </div>
                <div className="p-4">
                  <Radio className="mx-auto mb-4 size-12 text-blue-400" />
                  <h3 className="mb-2 font-semibold">Smart Recovery</h3>
                  <p className="text-zinc-300">Automatic retry if signal is missed</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
