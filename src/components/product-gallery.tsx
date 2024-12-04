import Image from 'next/image';

export function ProductGallery() {
  return (
    <section className="py-8">
      <h2 className="mb-6 text-2xl font-bold">GALLERY</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {/* Left column - top image */}
        <div className="relative aspect-square bg-slate-950">
          <Image
            src="/placeholder.svg"
            alt="Product view 1"
            fill
            className="object-cover"
          />
        </div>

        {/* Left column - bottom image */}
        <div className="relative aspect-square bg-slate-950">
          <Image
            src="/placeholder.svg"
            alt="Product view 2"
            fill
            className="object-cover"
          />
        </div>

        {/* Middle column - top image */}
        <div className="relative aspect-square bg-slate-950">
          <Image
            src="/placeholder.svg"
            alt="Product view 3"
            fill
            className="object-cover"
          />
        </div>

        {/* Middle column - bottom image */}
        <div className="relative aspect-square bg-slate-950">
          <Image
            src="/placeholder.svg"
            alt="Product view 4"
            fill
            className="object-cover"
          />
        </div>

        {/* Right column - full height image */}
        <div className="relative aspect-square bg-slate-950 md:row-span-2 md:aspect-[3/4]">
          <Image
            src="/placeholder.svg"
            alt="Product view 5"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
