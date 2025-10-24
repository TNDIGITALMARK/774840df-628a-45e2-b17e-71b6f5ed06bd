export const dynamic = 'force-dynamic'

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import Products from '@/components/Products';
import OrderForm from '@/components/OrderForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <OurStory />
      <Products />
      <OrderForm />
      <Footer />
    </main>
  );
}
