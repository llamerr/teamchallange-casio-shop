import { Footer } from '@/blocks/Footer/Footer';
import { Header } from '@/blocks/Header/Header';

export const ShopTemplate = (props: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
