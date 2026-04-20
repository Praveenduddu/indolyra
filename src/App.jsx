import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Products from './components/Products';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Products />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
