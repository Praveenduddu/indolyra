import { motion } from 'framer-motion';
import { ArrowUpRight, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Basmati Gold', href: '#products' },
      { name: 'Sona Masoori', href: '#products' },
      { name: 'Pusa Basmati', href: '#products' },
      { name: 'Brown Basmati', href: '#products' },
    ],
    company: [
      { name: 'Our Story', href: '#process' },
      { name: 'Sustainability', href: '#process' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQs', href: '#' },
      { name: 'Shipping Info', href: '#' },
      { name: 'Returns', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Mail, href: 'mailto:exports@indolyra.com', label: 'Email' },
  ];

  return (
    <footer className="bg-indolyra-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-3xl mb-4">
                <span className="gradient-text">Indolyra</span>
              </h3>
              <p className="text-white/60 mb-6 max-w-sm">
                Exporting India's finest rice varieties to the world.
                Quality, tradition, and excellence in every grain since 1995.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-400/20 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Products Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} Indolyra Exports. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
