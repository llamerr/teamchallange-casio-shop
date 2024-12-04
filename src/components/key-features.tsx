import Image from 'next/image';

export function KeyFeatures() {
  const features = [
    {
      title: 'Water Resistant',
      description: 'Enjoy peace of mind knowing your watch is built to withstand everyday splashes and brief water exposure.',
      image: '/placeholder.svg',
    },
    {
      title: 'Self-Adjustable Strap',
      description: 'Designed for maximum comfort, the self-adjustable strap ensures a perfect fit, adapting easily to your wrist.',
      image: '/placeholder.svg',
    },
    {
      title: 'Premium Polished Metal',
      description: 'Crafted from high-quality polished metal, this watch exudes elegance and sophistication, making it a stylish addition to any outfit.',
      image: '/placeholder.svg',
    },
  ];

  return (
    <section className="py-8">
      <h2 className="mb-6 text-2xl font-bold">KEY FEATURES</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="space-y-4 rounded-lg bg-slate-950 p-8 text-white"
          >
            <div className="relative size-16">
              <Image
                src={feature.image}
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="leading-relaxed text-slate-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
