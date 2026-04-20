import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMagnetic } from '../hooks/useMagnetic';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: 'Basmati Gold',
    description: 'Aged 2+ years for exceptional aroma and length',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=1200',
    tags: ['Premium', 'Aged'],
    stats: { elongation: '2.5x', aroma: 'Exquisite' },
  },
  {
    id: 2,
    name: 'Sona Masoori',
    description: 'Light, fluffy everyday rice from South India',
    image: 'https://images.unsplash.com/photo-1597916829826-02e5bb4f3973?auto=format&fit=crop&q=80&w=1200',
    tags: ['Everyday', 'Light'],
    stats: { cooking: '15 min', texture: 'Fluffy' },
  },
  {
    id: 3,
    name: 'Pusa Basmati',
    description: 'High-yield variety with authentic taste',
    image: 'https://images.unsplash.com/photo-1626804475297-411d863b5285?auto=format&fit=crop&q=80&w=1200',
    tags: ['High-Yield', 'Versatile'],
    stats: { yield: '+40%', adoption: 'Global' },
  },
  {
    id: 4,
    name: '1121 Basmati',
    description: 'World\'s longest basmati grain',
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&q=80&w=1200',
    tags: ['Longest', 'Premium'],
    stats: { length: '8.4mm', export: 'Leading' },
  },
  {
    id: 5,
    name: 'Brown Basmati',
    description: 'Whole grain nutrition with authentic flavor',
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&q=80&w=1200',
    tags: ['Healthy', 'Whole Grain'],
    stats: { fiber: 'High', gi: 'Low' },
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="relative flex-shrink-0 w-[90vw] md:w-[45vw] h-[60vh] md:h-[70vh] mr-[5vw] rounded-2xl overflow-hidden group">
      <motion.img
        src={product.image}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-indolyra-950 via-indolyra-950/20 to-transparent opacity-80" />
      
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
        <div className="flex gap-2 mb-4">
          {product.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-xs font-medium bg-gold-400 text-indolyra-950 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="font-display text-4xl md:text-5xl text-white mb-4 leading-tight">
          {product.name}
        </h3>
        
        <p className="text-white/70 text-lg max-w-md mb-8">
          {product.description}
        </p>

        <div className="flex gap-8">
          {Object.entries(product.stats).map(([key, value]) => (
            <div key={key}>
              <div className="text-gold-400 font-bold text-2xl">{value}</div>
              <div className="text-white/40 text-xs uppercase tracking-widest">{key}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);
  const ctaBtnRef = useMagnetic(0.3);

  useEffect(() => {
    const pin = gsap.fromTo(
      horizontalRef.current,
      { x: 0 },
      {
        x: () => -(horizontalRef.current.scrollWidth - window.innerWidth + window.innerWidth * 0.05),
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${horizontalRef.current.scrollWidth}`,
          invalidateOnRefresh: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section id="products" ref={triggerRef} className="bg-indolyra-50 overflow-hidden">
      <div className="min-h-screen flex flex-col justify-center py-20">
        {/* Header - Stays relatively static or moves slightly */}
        <div className="px-6 md:px-24 mb-12 md:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider uppercase rounded-full bg-gold-100 text-gold-800"
          >
            Our Collection
          </motion.span>
          <h2 className="font-display text-fluid-4xl text-indolyra-950 mb-6 max-w-3xl">
            Cultivating Excellence <br />
            <span className="text-gold-600">Across Generations</span>
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div ref={horizontalRef} className="flex px-6 md:px-24">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
              />
            ))}
            
            {/* Final Slide with CTA */}
            <div className="flex-shrink-0 w-[90vw] md:w-[45vw] flex flex-col items-center justify-center bg-indolyra-950 rounded-2xl mr-[5vw] p-12 text-center">
              <h3 className="font-display text-3xl md:text-4xl text-white mb-6">
                Ready to partner with India's finest?
              </h3>
              <div ref={ctaBtnRef}>
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Custom Quote
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
