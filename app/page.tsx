import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Methodology from '@/components/Methodology';
import Quote from '@/components/Quote';
import Services from '@/components/Services';
import Team from '@/components/Team';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Methodology />
      <Quote />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
