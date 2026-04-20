import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, Loader2, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';

const Contact = ({ setCursorVariant }) => {
  const submitBtnRef = useMagnetic(0.2);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    quantity: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : '';
      case 'quantity':
        return value && Number(value) < 1 ? 'Quantity must be at least 1 ton' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'exports@indolyra.com' },
    { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
    { icon: MapPin, label: 'Office', value: 'Mumbai, Maharashtra, India' },
  ];

  return (
    <section id="contact" className="relative py-32 bg-indolyra-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-100/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider uppercase rounded-full bg-gold-100 text-gold-800">
              Get in Touch
            </span>

            <h2 className="font-display text-fluid-3xl text-indolyra-950 mb-6">
              Let's Discuss Your Requirements
            </h2>

            <p className="text-lg text-indolyra-700 mb-12">
              Whether you're looking for bulk exports, custom packaging, or have
              questions about our products, our team is here to help.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <p className="text-sm text-indolyra-500">{item.label}</p>
                    <p className="font-medium text-indolyra-900">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 md:p-10 shadow-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === 'name' || formData.name
                            ? '-top-2 text-xs text-gold-600 bg-white px-1'
                            : 'top-3.5 text-indolyra-400'
                        }`}
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 bg-transparent border-2 rounded-lg outline-none transition-all ${
                          errors.name
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-indolyra-200 focus:border-gold-400'
                        }`}
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute -bottom-5 left-0 text-xs text-red-500"
                          >
                            {errors.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === 'email' || formData.email
                            ? '-top-2 text-xs text-gold-600 bg-white px-1'
                            : 'top-3.5 text-indolyra-400'
                        }`}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 bg-transparent border-2 rounded-lg outline-none transition-all ${
                          errors.email
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-indolyra-200 focus:border-gold-400'
                        }`}
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute -bottom-5 left-0 text-xs text-red-500"
                          >
                            {errors.email}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Company Field */}
                    <div className="relative">
                      <label
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === 'company' || formData.company
                            ? '-top-2 text-xs text-gold-600 bg-white px-1'
                            : 'top-3.5 text-indolyra-400'
                        }`}
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-transparent border-2 border-indolyra-200 rounded-lg outline-none focus:border-gold-400 transition-all"
                      />
                    </div>

                    {/* Quantity Field */}
                    <div className="relative">
                      <label
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === 'quantity' || formData.quantity
                            ? '-top-2 text-xs text-gold-600 bg-white px-1'
                            : 'top-3.5 text-indolyra-400'
                        }`}
                      >
                        Quantity (Tons)
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('quantity')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 bg-transparent border-2 rounded-lg outline-none transition-all ${
                          errors.quantity
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-indolyra-200 focus:border-gold-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="relative mt-6">
                    <label
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === 'message' || formData.message
                          ? '-top-2 text-xs text-gold-600 bg-white px-1 z-10'
                          : 'top-3.5 text-indolyra-400'
                      }`}
                    >
                      Tell us about your requirements
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-transparent border-2 border-indolyra-200 rounded-lg outline-none focus:border-gold-400 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div ref={submitBtnRef}>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-8 btn-primary py-4 text-base font-semibold disabled:opacity-70"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onMouseEnter={() => setCursorVariant('hover')}
                      onMouseLeave={() => setCursorVariant('default')}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.span
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center gap-2"
                          >
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </motion.span>
                        ) : (
                          <motion.span
                            key="send"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center gap-2"
                          >
                            Send Inquiry
                            <Send className="w-5 h-5" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl p-10 shadow-xl text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4, type: 'spring' }}
                    >
                      <Check className="w-10 h-10 text-green-600" />
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-display text-2xl text-indolyra-900 mb-2"
                  >
                    Thank You!
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-indolyra-600 mb-8"
                  >
                    Your inquiry has been received. Our team will get back to you within 24 hours.
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: '', email: '', company: '', quantity: '', message: '' });
                    }}
                    className="btn-outline"
                    whileHover={{ scale: 1.05 }}
                  >
                    Send Another Inquiry
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
