import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Sprout, Sun, Factory, Package, Ship } from 'lucide-react';

const processSteps = [
  {
    icon: Leaf,
    title: 'Seed Selection',
    description: 'We begin with certified, non-GMO seeds selected for their genetic purity and yield potential. Each batch is tested for germination rates and disease resistance.',
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    icon: Sprout,
    title: 'Sustainable Farming',
    description: 'Our partner farms use precision agriculture techniques, optimizing water usage through drip irrigation and maintaining soil health with organic composting.',
    color: 'from-lime-400 to-lime-600',
  },
  {
    icon: Sun,
    title: 'Natural Maturation',
    description: 'Rice fields are monitored throughout the 120-day growing cycle. We allow natural sun-drying where possible to enhance grain quality and reduce energy consumption.',
    color: 'from-amber-400 to-amber-600',
  },
  {
    icon: Factory,
    title: 'Precision Milling',
    description: 'State-of-the-art milling facilities with optical sorting technology ensure uniform grain size and remove any impurities while preserving nutritional value.',
    color: 'from-orange-400 to-orange-600',
  },
  {
    icon: Package,
    title: 'Quality Grading',
    description: 'Every batch undergoes rigorous testing for moisture content, broken grain percentage, and aroma. Only lots meeting our premium standards receive the Indolyra seal.',
    color: 'from-rose-400 to-rose-600',
  },
  {
    icon: Ship,
    title: 'Global Distribution',
    description: 'Climate-controlled storage and efficient logistics ensure your rice arrives fresh, aromatic, and ready for market within optimal timeframes.',
    color: 'from-blue-400 to-blue-600',
  },
];

const ProcessCard = ({ step, index, progress }) => {
  const cardProgress = Math.min(Math.max((progress - index * 0.15) * 6, 0), 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative"
    >
      <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
        {/* Image Side */}
        <motion.div
          className="w-full lg:w-1/2"
          style={{
            opacity: cardProgress,
            scale: 0.95 + cardProgress * 0.05,
          }}
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <step.icon className="w-12 h-12 text-white" />
              </motion.div>
            </div>

            {/* Step Number */}
            <div className="absolute top-6 left-6 font-display text-6xl text-white/10">
              0{index + 1}
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br opacity-30 rounded-full"
              style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
          </div>
        </motion.div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${step.color} bg-opacity-10 mb-4`}>
              <step.icon className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Step {index + 1}</span>
            </div>

            <h3 className="font-display text-3xl text-white mb-4">{step.title}</h3>
            <p className="text-lg text-white/70 leading-relaxed">{step.description}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative py-32 bg-indolyra-950 overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indolyra-950 via-indolyra-950/95 to-indolyra-950" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider uppercase rounded-full bg-gold-500/20 text-gold-400">
            Our Process
          </span>
          <h2 className="font-display text-fluid-3xl text-white mb-6">
            From Field to Fork
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60">
            A journey of excellence spanning six carefully orchestrated stages,
            ensuring the highest quality rice reaches your table.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-gold-400 to-gold-600"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-24 lg:space-y-32">
            {processSteps.map((step, index) => (
              <ProcessCard
                key={step.title}
                step={step}
                index={index}
                progress={lineHeight.get()}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-32 text-center"
        >
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Want to see our process in action? Schedule a virtual tour of our facilities.
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Tour
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
