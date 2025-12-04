import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '../components/Section';
import Card, { StepCard, StatCard } from '../components/Card';
import Button from '../components/Button';
import { Timeline } from '../components/ui/timeline';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { BackgroundBeams } from '../components/ui/background-beams';

export default function Students() {
  const experiences = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Shadow professional engineers',
      description: 'as they work on real projects'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Attend team meetings',
      description: 'and see how engineering decisions get made'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Learn the work culture',
      description: 'of a professional environment'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Connect your math skills',
      description: 'to actual engineering challenges'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: 'Create a presentation',
      description: 'about your experience to share with future apprentices'
    },
  ];

  const eligibility = [
    { label: 'Age', value: '16 to 18 years old' },
    { label: 'Grade', value: 'High school junior or senior' },
    { label: 'Math', value: 'Completed Algebra 2 and/or PreCalculus' },
    { label: 'Materials', value: 'Two letters of recommendation' },
    { label: 'Fee', value: 'Processing fee (up to $50 per year)' },
  ];

  const timelineData = [
    {
      title: "Step 1",
      content: (
        <div>
          <h4 className="text-xl font-bold text-text-primary mb-2">Gather Your Materials</h4>
          <p className="text-text-secondary mb-4">
            Two letters of recommendation, processing fee payment, and proof of math course completion.
          </p>
          <div className="bg-surface-raised rounded-lg p-4">
            <p className="text-sm text-text-muted">
              <strong>Tip:</strong> Ask teachers or counselors who know your work ethic well.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Step 2",
      content: (
        <div>
          <h4 className="text-xl font-bold text-text-primary mb-2">Submit Your Application Online</h4>
          <p className="text-text-secondary mb-4">
            Complete the application form on our website with all required documents.
          </p>
          <div className="bg-primary/5 rounded-lg p-4">
            <p className="text-sm text-primary">
              Applications are reviewed within 2 weeks.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Step 3",
      content: (
        <div>
          <h4 className="text-xl font-bold text-text-primary mb-2">Take the Math Exam</h4>
          <p className="text-text-secondary mb-4">
            You'll receive exam instructions after your application is processed. The exam includes real engineering problems from Corpus Christi.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-surface-raised rounded-full text-sm text-text-secondary">Algebra 1</span>
            <span className="px-3 py-1 bg-surface-raised rounded-full text-sm text-text-secondary">Algebra 2</span>
            <span className="px-3 py-1 bg-surface-raised rounded-full text-sm text-text-secondary">PreCalculus</span>
          </div>
        </div>
      ),
    },
    {
      title: "Step 4",
      content: (
        <div>
          <h4 className="text-xl font-bold text-text-primary mb-2">Get Matched</h4>
          <p className="text-text-secondary mb-4">
            Selected students are matched with engineering firms based on available positions and your interests.
          </p>
        </div>
      ),
    },
    {
      title: "Step 5",
      content: (
        <div>
          <h4 className="text-xl font-bold text-text-primary mb-2">Begin Your Apprenticeship</h4>
          <p className="text-text-secondary mb-4">
            Complete orientation, then start your six-week experience working alongside professional engineers.
          </p>
          <div className="bg-accent/10 rounded-lg p-4">
            <p className="text-sm text-accent font-semibold">
              Earn $2,000 while building your future!
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section - Simplified animations */}
      <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-dark-bg antialiased relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="p-4 max-w-5xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-dark-text-muted pb-2">
            See Yourself{" "}
            <span className="block sm:inline">as a Future Engineer</span>
          </h1>
          <p className="mt-6 font-normal text-base md:text-xl text-dark-text-muted max-w-2xl text-center mx-auto">
            You're good at math. Maybe you're wondering what you can actually do with it. PEACC gives you a chance to find out—and pays you <span className="text-accent-light font-bold">$2,000</span> while you learn.
          </p>
          <div className="flex justify-center mt-8">
            <a
              href="#apply"
              className="px-8 py-4 bg-accent text-text-inverse font-bold rounded-full hover:bg-accent-light transition-colors shadow-lg shadow-accent/20"
            >
              Start Your Application
            </a>
          </div>
        </div>
      </div>

      {/* What You'll Experience - Simplified animations */}
      <Section background="white">
        <SectionHeader
          title="Six Weeks Inside an Engineering Firm"
        />
        <p className="text-lg md:text-xl text-center text-text-secondary max-w-3xl mx-auto mb-12">
          This isn't a classroom simulation. You'll be inside real engineering offices, working alongside professionals who design the bridges, ports, and infrastructure of Corpus Christi.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="flex items-start space-x-4 h-full hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center text-accent">
                {exp.icon}
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">{exp.title}</h3>
                <p className="text-text-secondary text-sm">{exp.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Program Details - Simplified without motion wrappers */}
      <Section background="gray">
        <SectionHeader title="What Apprentices Receive" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardContainer className="inter-var">
            <CardBody className="bg-white relative group/card hover:shadow-2xl w-full h-auto rounded-xl p-6 border border-border">
              <CardItem translateZ="50" className="w-full text-center">
                <div className="text-5xl font-bold text-accent mb-2">$2,000</div>
              </CardItem>
              <CardItem translateZ="30" className="w-full text-center">
                <h3 className="font-semibold text-text-primary mb-2">Stipend</h3>
              </CardItem>
              <CardItem translateZ="20" className="w-full text-center">
                <p className="text-text-secondary text-sm">Paid in two installments—one halfway through, one at completion.</p>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-white relative group/card hover:shadow-2xl w-full h-auto rounded-xl p-6 border border-border">
              <CardItem translateZ="50" className="w-full text-center">
                <div className="text-5xl font-bold text-primary mb-2">10</div>
              </CardItem>
              <CardItem translateZ="30" className="w-full text-center">
                <h3 className="font-semibold text-text-primary mb-2">Hours Per Week</h3>
              </CardItem>
              <CardItem translateZ="20" className="w-full text-center">
                <p className="text-text-secondary text-sm">About 3 hours per workday, scheduled around your school calendar.</p>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-white relative group/card hover:shadow-2xl w-full h-auto rounded-xl p-6 border border-border">
              <CardItem translateZ="50" className="w-full text-center">
                <div className="text-5xl font-bold text-primary mb-2">6</div>
              </CardItem>
              <CardItem translateZ="30" className="w-full text-center">
                <h3 className="font-semibold text-text-primary mb-2">Week Program</h3>
              </CardItem>
              <CardItem translateZ="20" className="w-full text-center">
                <p className="text-text-secondary text-sm">Real workplace exposure that strengthens college applications.</p>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-white relative group/card hover:shadow-2xl w-full h-auto rounded-xl p-6 border border-border">
              <CardItem translateZ="50" className="w-full text-center">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </CardItem>
              <CardItem translateZ="30" className="w-full text-center">
                <h3 className="font-semibold text-text-primary mb-2">Training Included</h3>
              </CardItem>
              <CardItem translateZ="20" className="w-full text-center">
                <p className="text-text-secondary text-sm">Orientation session on workplace expectations before you begin.</p>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </Section>

      {/* Eligibility - Simplified animations */}
      <Section background="white">
        <SectionHeader
          title="Who Can Apply"
          subtitle="To apply for a PEACC apprenticeship, you must meet these requirements:"
        />

        <div className="max-w-2xl mx-auto">
          <Card className="overflow-hidden" padding="compact">
            <ul className="divide-y divide-border">
              {eligibility.map((item, index) => (
                <li
                  key={index}
                  className="py-4 px-2 flex justify-between items-center hover:bg-surface-alt transition-colors"
                >
                  <span className="font-medium text-text-primary">{item.label}</span>
                  <span className="text-text-secondary text-right">{item.value}</span>
                </li>
              ))}
            </ul>
          </Card>

          <p className="text-center text-text-secondary mt-6">
            Already applied this year? You can reapply for new opportunities each semester at no additional cost.
          </p>
        </div>
      </Section>

      {/* The Math Exam - Simplified animations */}
      <div className="relative bg-dark-bg py-20">
        <BackgroundBeams />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prove What You Know
            </h2>
            <p className="text-xl text-dark-text-muted">
              Every applicant takes our Engineering Apprenticeship Mathematics Exam
            </p>
          </div>

          <div className="text-dark-text-muted space-y-6">
            <p className="text-lg">
              The exam includes problems from Algebra 1, Algebra 2, and PreCalculus—but here's what makes it different:
            </p>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-accent/30">
              <p className="text-xl md:text-2xl font-semibold text-white text-center">
                The problems are based on <span className="text-accent-light">real engineering projects</span> in Corpus Christi.
              </p>
            </div>

            <p>
              You might calculate the angle of repose for a soil stockpile at a construction site. Or find the rate
              at which a diesel hammer drives concrete piles into the ground. Or analyze how salary gets distributed
              across a bridge construction crew.
            </p>

            <p>
              These are the same types of problems you've seen in class—just connected to actual work happening in your city.
            </p>

            <div className="bg-accent/20 rounded-xl p-6 border border-accent/30">
              <p className="text-white">
                <strong className="text-accent-light">Format:</strong> The exam is timed and includes three items. You'll be evaluated on your ability
                to pose and solve problems that relate to real engineering challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Application Steps - Timeline */}
      <Section background="white" id="apply">
        <SectionHeader title="Your Application Journey" />
        <Timeline data={timelineData} />
      </Section>

      {/* CTA - Simplified animations */}
      <Section background="gray">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Your Future in Engineering{" "}
            <span className="text-accent">Starts Here</span>
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Don't let math stay trapped in a textbook. Find out what it feels like to use it in the real world.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-accent text-text-inverse font-bold rounded-full hover:bg-accent-light transition-colors shadow-lg shadow-accent/20"
          >
            Apply Now
          </Link>
          <p className="text-text-muted mt-6">
            Questions? <Link to="/contact" className="text-primary hover:underline">Contact us</Link>
          </p>
        </div>
      </Section>
    </>
  );
}
