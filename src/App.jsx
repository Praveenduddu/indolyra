import { useState } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Products from './components/Products';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const [cursorVariant, setCursorVariant] = useState('default');

  return (
    <>
      <CustomCursor variant={cursorVariant} />
      <Navigation />
      <main>
        <Hero setCursorVariant={setCursorVariant} />
        <Products setCursorVariant={setCursorVariant} />
        <Process setCursorVariant={setCursorVariant} />
        <Contact setCursorVariant={setCursorVariant} />
      </main>
      <Footer />
    </>
  );
}

export default App;
