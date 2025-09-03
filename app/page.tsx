
'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Advantages from '../components/Advantages';
import Process from '../components/Process';
import Prices from '../components/Prices';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Advantages />
      <Process />
      <Prices />
      <Contact />
      <Footer />
    </div>
  );
}
