import { ArrowLeft, Smartphone, Watch, Wifi } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function BluetoothLinkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-800 to-black">
      <div className="container mx-auto px-4 py-12">
        <Link href="/promo">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 size-4" />
            Back to Technologies
          </Button>
        </Link>

        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-5xl font-bold">Bluetooth® Link</h1>

          <div className="space-y-8">
            <section className="rounded-lg bg-black/50 p-6">
              <h2 className="mb-4 text-2xl font-semibold">Smart Connectivity</h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                Bluetooth® Link technology seamlessly connects your watch to your smartphone, enabling automatic time
                adjustment and providing access to an array of smart features through our dedicated app. Experience the
                perfect fusion of traditional timekeeping and modern connectivity.
              </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="mb-3 text-xl font-semibold">Key Features</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li>• Automatic time sync</li>
                  <li>• World time setting</li>
                  <li>• Phone finder function</li>
                  <li>• Customizable alerts</li>
                </ul>
              </div>

              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="mb-3 text-xl font-semibold">Smart Functions</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li>• Reminder settings</li>
                  <li>• Activity tracking</li>
                  <li>• Battery level monitoring</li>
                  <li>• Settings adjustment</li>
                </ul>
              </div>
            </section>

            <section className="rounded-lg bg-black/50 p-6">
              <h2 className="mb-4 text-2xl font-semibold">Connected Experience</h2>
              <div className="grid gap-6 text-center md:grid-cols-3">
                <div className="p-4">
                  <Watch className="mx-auto mb-4 size-12 text-blue-400" />
                  <h3 className="mb-2 font-semibold">Your Watch</h3>
                  <p className="text-zinc-300">Bluetooth®-enabled timepiece</p>
                </div>
                <div className="p-4">
                  <Wifi className="mx-auto mb-4 size-12 text-blue-400" />
                  <h3 className="mb-2 font-semibold">Connection</h3>
                  <p className="text-zinc-300">Stable Bluetooth® link</p>
                </div>
                <div className="p-4">
                  <Smartphone className="mx-auto mb-4 size-12 text-blue-400" />
                  <h3 className="mb-2 font-semibold">Smartphone App</h3>
                  <p className="text-zinc-300">Feature-rich companion app</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
