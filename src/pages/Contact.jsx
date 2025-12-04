import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { BackgroundBeams } from '../components/ui/background-beams';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const quickLinks = [
    {
      title: 'Students',
      description: 'Ready to apply for an apprenticeship?',
      to: '/students',
      linkText: 'Apply for an Apprenticeship',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      ),
    },
    {
      title: 'Donors',
      description: 'Want to support our mission?',
      to: '/support',
      linkText: 'Support PEACC',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      ),
    },
    {
      title: 'Engineering Firms',
      description: 'Interested in hosting an apprentice?',
      to: '/partners',
      linkText: 'Become a Partner',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      ),
    },
  ];

  const inputClasses = (fieldName) => `
    w-full px-4 py-3
    bg-white
    border-2 rounded-xl
    text-text-primary
    placeholder:text-text-muted
    transition-all duration-300
    ${focusedField === fieldName
      ? 'border-primary shadow-[0_0_20px_rgba(30,64,175,0.15)]'
      : 'border-border hover:border-border-strong'}
    focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(30,64,175,0.15)]
  `;

  return (
    <>
      {/* Hero Section */}
      <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-dark-bg antialiased relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        <BackgroundBeams />
        <div className="p-4 max-w-4xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 bg-accent/20 rounded-full text-accent-light text-sm font-medium mb-6 border border-accent/30">
              Let's Connect
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-center text-white pb-4"
          >
            Get in <span className="text-accent-light">Touch</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-xl mx-auto"
          >
            <TextGenerateEffect
              words="Have questions about PEACC? Whether you're a student, parent, donor, or engineering firm—we'd love to hear from you."
              className="text-lg md:text-xl text-dark-text-muted text-center"
            />
          </motion.div>
        </div>
      </div>

      <Section background="white">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="text-center py-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent" />
                    <div className="relative z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="w-20 h-20 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                      >
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <motion.path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                          />
                        </svg>
                      </motion.div>
                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-3xl font-bold text-text-primary mb-3"
                      >
                        Message Sent!
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-text-secondary mb-8 text-lg"
                      >
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Button onClick={() => setSubmitted(false)} variant="outline">
                          Send Another Message
                        </Button>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                        Your Name <span className="text-error">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses('name')}
                        placeholder="John Doe"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                        Your Email <span className="text-error">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses('email')}
                        placeholder="john@example.com"
                      />
                    </motion.div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">
                        Phone <span className="text-text-muted">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses('phone')}
                        placeholder="(555) 555-5555"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="type" className="block text-sm font-medium text-text-secondary mb-2">
                        I am a... <span className="text-error">*</span>
                      </label>
                      <select
                        id="type"
                        name="type"
                        required
                        value={formData.type}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('type')}
                        onBlur={() => setFocusedField(null)}
                        className={`${inputClasses('type')} bg-white cursor-pointer`}
                      >
                        <option value="">Select one...</option>
                        <option value="student">Student</option>
                        <option value="parent">Parent</option>
                        <option value="donor">Potential Donor</option>
                        <option value="firm">Engineering Firm</option>
                        <option value="educator">Educator</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                      Your Message <span className="text-error">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClasses('message')} resize-none`}
                      placeholder="How can we help you?"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <button
                      type="submit"
                      className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-primary-dark"
                    >
                      <span className="relative z-10 flex items-center">
                        Send Message
                        <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Direct Contact */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    Direct Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-3 rounded-lg bg-surface-alt hover:bg-surface-raised transition-colors">
                      <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <div className="text-sm text-text-muted">Email</div>
                        <a href="mailto:info@peacc.org" className="text-primary hover:underline font-medium">
                          info@peacc.org
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start p-3 rounded-lg bg-surface-alt hover:bg-surface-raised transition-colors">
                      <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <div className="text-sm text-text-muted">Location</div>
                        <div className="text-text-primary font-medium">Corpus Christi, Texas</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h3>
                <div className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      className="border-b border-border last:border-0 pb-4 last:pb-0"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center mb-2">
                        <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mr-2">
                          <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {link.icon}
                          </svg>
                        </span>
                        <span className="font-medium text-text-primary">{link.title}</span>
                      </div>
                      <p className="text-sm text-text-secondary mb-2 ml-10">{link.description}</p>
                      <Link
                        to={link.to}
                        className="text-sm text-primary hover:text-primary-dark ml-10 inline-flex items-center group"
                      >
                        {link.linkText}
                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Tax Info */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-sm text-text-muted mb-1">501(c)(3) Nonprofit</div>
                  <div className="font-mono text-xl font-semibold text-text-primary">EIN: 87-0876653</div>
                  <p className="text-xs text-text-muted mt-2">Donations are tax-deductible</p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
