import { Breadcrumbs } from '@/components/breadcrumbs';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeroBanner } from '@/components/hero-banner';
import { KeyFeatures } from '@/components/key-features';
import { ProductGallery } from '@/components/product-gallery';
import { ProductTabs } from '@/components/product-tabs';
import { SimilarProducts } from '@/components/similar-products';

export default function ProductPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <div className="container mx-auto px-4 py-6">
          <Breadcrumbs />
          <div className="mt-8">
            <ProductTabs />
          </div>
          <ProductGallery />
          <KeyFeatures />
          <SimilarProducts />
        </div>
      </main>
      <Footer />
    </div>
  );
}
