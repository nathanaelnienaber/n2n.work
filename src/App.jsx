import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FocusAreas from './components/FocusAreas';
import Process from './components/Process';
import Me from './components/Me';
import Why from './components/Why';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <FocusAreas />
        <Process />
        <Me />
        <Why />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
