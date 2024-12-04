import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ProductTabs() {
  return (
    <Tabs defaultValue="basic-information" className="w-full">
      <TabsList className="h-auto w-full justify-start rounded-none border-b bg-transparent p-0">
        <TabsTrigger
          value="basic-information"
          className="rounded-none border-b-2 border-transparent px-6 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent"
        >
          Basic Information
        </TabsTrigger>
        <TabsTrigger
          value="specifications"
          className="rounded-none border-b-2 border-transparent px-6 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent"
        >
          Specifications
        </TabsTrigger>
        <TabsTrigger
          value="delivery"
          className="rounded-none border-b-2 border-transparent px-6 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent"
        >
          Delivery & Returns
        </TabsTrigger>
        <TabsTrigger
          value="manual"
          className="rounded-none border-b-2 border-transparent px-6 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent"
        >
          Instruction Manual
        </TabsTrigger>
      </TabsList>
      <TabsContent value="basic-information" className="pt-8">
        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Timeless Elegance with Modern Features</h2>
            <p className="text-slate-600">
              The Casio Vintage A1000MG-9 combines old-fashioned design with modern functionality.
              Crafted with a sleek gold-tone stainless steel case and a durable Milanese mesh band,
              this watch embodies sophisticated style. Its scratch-resistant mineral glass ensures durability,
              while the ion-plated finish provides long-lasting shine.
            </p>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-semibold">Why Choose the CASIO Vintage A1000MG-9?</h2>
            <p className="text-slate-600">
              Perfect for those who value retro charm with contemporary utility, the A1000MG-9 is a
              statement piece that fits both casual and formal settings.
            </p>
          </section>
        </div>
      </TabsContent>
      <TabsContent value="specifications" className="pt-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Technical Specifications</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-medium">Case</h3>
              <ul className="space-y-1 text-slate-600">
                <li>Material: Stainless Steel</li>
                <li>Dimensions: 39×38×7 mm</li>
                <li>Water Resistance: 30M</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Features</h3>
              <ul className="space-y-1 text-slate-600">
                <li>LED Light</li>
                <li>Daily Alarm</li>
                <li>Auto Calendar</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="delivery" className="pt-8">
        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Delivery Information</h2>
            <ul className="space-y-2 text-slate-600">
              <li>Free shipping on orders over $50</li>
              <li>Standard delivery: 3-5 business days</li>
              <li>Express delivery: 1-2 business days (additional cost)</li>
            </ul>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Returns Policy</h2>
            <ul className="space-y-2 text-slate-600">
              <li>30-day return window</li>
              <li>Free returns with original packaging</li>
              <li>Full refund or exchange available</li>
            </ul>
          </section>
        </div>
      </TabsContent>
      <TabsContent value="manual" className="pt-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Product Manual</h2>
          <p className="text-slate-600">
            Download the complete instruction manual for your Casio Vintage A1000MG-9 watch.
            The manual includes detailed instructions for all features and functions.
          </p>
          <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
            Download PDF Manual
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </button>
        </div>
      </TabsContent>
    </Tabs>
  );
}
