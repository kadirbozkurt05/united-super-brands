import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Companies from '@/components/Companies';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Companies />
      <Footer />
    </main>
  );
}
