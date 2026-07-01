import { AboutMission } from '@/components/AboutMission';
import { DonateCta } from '@/components/DonateCta';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { ServicesFacilities } from '@/components/ServicesFacilities';
import { Stats } from '@/components/Stats';
import { Testimonials } from '@/components/Testimonials';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMission />
      <ServicesFacilities />
      <Stats />
      <Testimonials />
      <DonateCta />
      <Footer />
    </main>
  );
}