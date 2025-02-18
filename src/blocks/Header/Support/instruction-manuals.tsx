import { ImageIcon } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const images = [
  'https://picsum.photos/536/354',
  'https://picsum.photos/536/354',
];

export default function InstructionManuals() {
  return (
    <div className="grid size-full grid-cols-2 gap-8 bg-white p-8">
      <div>
        <h1 className="mb-3 text-2xl font-bold">Instruction Manuals</h1>

        <p className="mb-4 max-w-2xl text-sm text-muted-foreground">
          Check the case back of your watch to find the caliber code inscribed on it, and read the instructions pertaining
          to your watch caliber code.
        </p>

        <div className="mb-6">
          <label className="mb-1 block text-sm font-medium" htmlFor="caliber-code">
            Caliber code
          </label>
          <div className="flex max-w-md gap-2">
            <Input type="text" placeholder="XXXX" className="font-mono text-sm uppercase" maxLength={4} id="caliber-code" />
            <Button variant="outline">
              Download (PDF)
            </Button>
          </div>
        </div>
      </div>
      <div className="ml-6 flex flex-row gap-6">
        {images?.slice(0, 2).map((image, index) => (
          <div key={index} className="relative aspect-[3/4] w-full border border-[#7983A7] bg-zinc-950">
            {image && (
              <Image
                src={image}
                alt="Manual"
                fill
                sizes="25vw"
                className="object-cover"
              />
            )}
            {!image && (
              <ImageIcon className="size-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
