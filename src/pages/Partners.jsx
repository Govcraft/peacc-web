import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '../components/Section';
import Card, { StepCard } from '../components/Card';
import Button from '../components/Button';
import { HoverEffect } from '../components/ui/card-hover-effect';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { BackgroundBeams } from '../components/ui/background-beams';

export default function Partners() {
  const activities = [
    'Shadow your engineers during their work',
    'Attend team meetings (as appropriate)',
    'Assist with general administrative tasks',
    'Learn about your firm\'s professional culture',
    'Prepare a short presentation about their experience',
  ];

  const benefits = [
    {
      title: 'Pre-Screened Students',
      description: 'Every apprentice has passed our Engineering Apprenticeship Mathematics Exam—demonstrating real skill with Algebra and PreCalculus problems tied to engineering scenarios.',
      link: '/students',
    },
    {
      title: 'Students Who Understand Context',
      description: 'Our applicants have worked on math problems based on actual Corpus Christi projects. They arrive with some understanding of the engineering challenges they\'ll observe.',
      link: '/about',
    },
    {
      title: 'Workforce Development',
      description: 'You\'re not just mentoring a student—you\'re shaping your future talent pipeline. Build relationships with tomorrow\'s engineers.',
      link: '/about',
    },
    {
      title: 'Community Investment',
      description: 'Demonstrate your firm\'s commitment to Corpus Christi by helping local students access careers in engineering.',
      link: '/support',
    },
    {
      title: 'Minimal Administrative Burden',
      description: 'PEACC coordinates stipends, applications, and program requirements. You focus on the mentorship.',
      link: '/contact',
    },
    {
      title: 'Tax Benefits',
      description: 'As a 501(c)(3) nonprofit, corporate sponsorships and donations to PEACC may be tax-deductible.',
      link: '/support',
    },
  ];

  const mathExamples = [
    'Calculating the angle of repose for soil stockpiles at the New Harbor Bridge project',
    'Finding rates for pile-driving operations',
    'Analyzing cable tensions on cable-stayed bridge designs',
    'Modeling salary distributions for construction crews',
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-dark-bg antialiased relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="p-4 max-w-5xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 bg-primary/30 rounded-full text-primary-light text-sm font-medium mb-6 border border-primary/30">
              Engineering Firm Partnership
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-center text-white pb-4"
          >
            Shape the Engineers Who Will
            <br />
            <span className="text-accent-light">Build Our City</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 font-normal text-lg md:text-xl text-dark-text-muted max-w-2xl text-center mx-auto"
          >
            Partner with PEACC to host high school apprentices—pre-screened, mathematically capable students ready to learn what engineering really looks like.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-8"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
            >
              Become a Partner
            </Link>
          </motion.div>
        </div>
      </div>

      {/* What Hosting Involves */}
      <Section background="white">
        <SectionHeader
          title="What Hosting an Apprentice Involves"
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-surface-raised border-l-4 border-accent p-6 rounded-r-lg mb-10"
          >
            <TextGenerateEffect
              words="PEACC handles recruitment, screening, exams, stipend payments, and professionalism orientation. You provide the experience."
              className="text-lg md:text-xl text-text-primary"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <h3 className="text-xl font-semibold text-text-primary mb-6">Time Commitment</h3>
                <div className="space-y-6">
                  <div className="flex items-center p-4 bg-surface-alt rounded-xl">
                    <div className="text-4xl font-bold text-primary mr-4">6</div>
                    <div className="text-text-secondary">week program</div>
                  </div>
                  <div className="flex items-center p-4 bg-surface-alt rounded-xl">
                    <div className="text-4xl font-bold text-primary mr-4">10</div>
                    <div className="text-text-secondary">hours per week maximum</div>
                  </div>
                  <p className="text-text-muted text-sm pt-2 border-t border-border">
                    Fits alongside a typical school calendar
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <h3 className="text-xl font-semibold text-text-primary mb-6">Student Activities</h3>
                <ul className="space-y-3">
                  {activities.map((activity, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">{activity}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Benefits - Using HoverEffect */}
      <Section background="gray">
        <SectionHeader
          title="Benefits of Hosting PEACC Apprentices"
          subtitle="Partnering with PEACC offers tangible returns for your firm"
        />

        <div className="max-w-5xl mx-auto">
          <HoverEffect items={benefits} />
        </div>
      </Section>

      {/* The Math Connection */}
      <div className="relative bg-dark-bg py-20">
        <BackgroundBeams />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Students Who Arrive Prepared
            </h2>
            <p className="text-xl text-dark-text-muted">
              PEACC students don't just study abstract math. They work on problems like:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {mathExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 flex items-start"
              >
                <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-dark-text">{example}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white text-xl mt-10 text-center font-medium"
          >
            When they arrive at your firm, they've already been thinking about how math applies to engineering work.
          </motion.p>
        </div>
      </div>

      {/* How Partnership Works */}
      <Section background="white">
        <SectionHeader title="How Partnership Works" />

        <div className="max-w-2xl mx-auto space-y-6">
          {[
            { title: "Express Interest", desc: "Contact PEACC to discuss hosting apprentices." },
            { title: "Define Opportunities", desc: "We'll work with you to understand what experiences you can offer." },
            { title: "Receive Matched Students", desc: "PEACC selects and matches qualified students to available positions." },
            { title: "Host Your Apprentice", desc: "Provide six weeks of shadowing and professional exposure." },
            { title: "Celebrate Completion", desc: "Students present on their experience; you've helped shape a future engineer." },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <StepCard
                number={`${index + 1}`}
                title={step.title}
                description={step.desc}
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-text-primary mb-4"
          >
            Join Us in Building the Future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
          >
            Help local students discover that the math they learn in school builds the city they live in.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button to="/contact" variant="primary" size="lg">
              Become a Partner
            </Button>
          </motion.div>
          <p className="text-text-muted mt-6">
            Questions about hosting?{' '}
            <Link to="/contact" className="text-primary hover:underline">Contact us</Link> to discuss what partnership looks like for your firm.
          </p>
        </div>
      </Section>
    </>
  );
}
