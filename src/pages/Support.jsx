import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { CardStack, Highlight } from '../components/ui/card-stack';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { BackgroundBeams } from '../components/ui/background-beams';

export default function Support() {
  const fundingBreakdown = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Student Stipends',
      description: 'Each apprentice receives $2,000 for completing the six-week program.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Program Operations',
      description: 'Application processing, exam administration, student selection, and coordination.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Partner Recruitment',
      description: 'Connecting with engineering firms to create more apprenticeship opportunities.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: 'Student Outreach',
      description: 'Reaching qualified students, teachers, and administrators across Corpus Christi.'
    },
  ];

  const donationLevels = [
    {
      id: 0,
      name: "Bridge Builder",
      designation: "$5,000+",
      content: (
        <p>
          Fund <Highlight>two complete apprenticeships</Highlight> and receive recognition as a Bridge Builder sponsor. Your gift shapes two students' futures and builds Corpus Christi's workforce.
        </p>
      ),
    },
    {
      id: 1,
      name: "Apprentice Champion",
      designation: "$2,000",
      content: (
        <p>
          Sponsor <Highlight>one student's complete experience</Highlight>—six weeks of professional mentorship, real-world learning, and a $2,000 stipend. You're directly changing a student's life.
        </p>
      ),
    },
    {
      id: 2,
      name: "Program Supporter",
      designation: "$500 - $1,999",
      content: (
        <p>
          <Highlight>Partial sponsorship</Highlight> that helps cover exam administration, orientation training, and program coordination. Every dollar moves us closer to another apprentice.
        </p>
      ),
    },
    {
      id: 3,
      name: "Community Partner",
      designation: "Any Amount",
      content: (
        <p>
          <Highlight>Every contribution matters.</Highlight> Whether $25 or $250, your gift helps local students discover their potential as future engineers.
        </p>
      ),
    },
  ];

  const waysToGive = [
    {
      title: 'Individual Donations',
      description: 'Any amount helps. A single donation of $2,000 sponsors one student\'s complete apprenticeship experience.',
      highlight: '$2,000 = One Student',
    },
    {
      title: 'Corporate Sponsorship',
      description: 'Partner with PEACC to fund multiple apprenticeships and demonstrate your commitment to workforce development.',
      highlight: 'Multiple Apprenticeships',
    },
    {
      title: 'In-Kind Contributions',
      description: 'We accept non-monetary support that advances our mission.',
      highlight: 'Non-Monetary Support',
    },
    {
      title: 'Grants',
      description: 'PEACC welcomes partnerships with foundations and grant-making organizations aligned with education and workforce development.',
      highlight: 'Foundation Partners',
    },
  ];

  return (
    <>
      {/* Hero Section - Simplified animations */}
      <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-dark-bg antialiased relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="p-4 max-w-6xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <div className="text-center">
            <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-accent-light text-sm font-medium mb-6">
              501(c)(3) Tax-Deductible
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-center text-white pb-4">
            Grow Engineers{" "}
            <span className="block sm:inline">From Corpus...</span>
            <br />
            <span className="text-accent-light">For Corpus</span>
          </h1>
          <p className="mt-6 font-normal text-lg md:text-xl text-white/80 max-w-2xl text-center mx-auto">
            Your support places local students in engineering apprenticeships—building the workforce that will design our city's future.
          </p>
          <div className="flex justify-center mt-8">
            <a
              href="#donate"
              className="px-8 py-4 bg-accent text-text-inverse font-bold rounded-full hover:bg-accent-light transition-colors shadow-lg shadow-accent/30"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>

      {/* The Opportunity - Simplified animations */}
      <Section background="white">
        <SectionHeader
          title="Invest in Local Talent"
        />

        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-center text-text-primary mb-12">
            Corpus Christi's bridges, ports, roads, and technology need engineers. But too many of our talented students never see engineering as their future.
          </p>

          <div className="bg-gradient-to-br from-surface-alt to-white rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="font-semibold text-text-primary mb-6 text-xl">PEACC changes that by giving students:</h3>
            <ul className="space-y-4">
              {[
                { bold: 'Paid experience', text: 'inside real engineering firms' },
                { bold: 'Math education', text: 'connected to actual local projects' },
                { bold: 'The chance to imagine', text: 'themselves as engineers' },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start"
                >
                  <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg"><strong className="text-accent">{item.bold}</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xl font-medium text-text-primary text-center mt-10">
            When you support PEACC, you're not just helping a student—you're investing in the people who
            will build Corpus Christi for generations to come.
          </p>
        </div>
      </Section>

      {/* Donation Levels - Card Stack - Simplified */}
      <Section background="gray" id="donate">
        <SectionHeader
          title="Choose Your Impact"
          subtitle="Every donation level makes a difference"
        />

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="flex items-center justify-center">
            <CardStack items={donationLevels} />
          </div>

          <div className="max-w-md">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-accent/20">
                <div className="text-4xl font-bold text-accent mb-2">$2,000</div>
                <p className="text-text-secondary">Sponsors one complete apprenticeship</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-border">
                <div className="text-4xl font-bold text-primary mb-2">6 weeks</div>
                <p className="text-text-secondary">Of professional mentorship</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-border">
                <div className="text-4xl font-bold text-primary mb-2">1 future</div>
                <p className="text-text-secondary">Engineer from Corpus Christi</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Where Your Donation Goes - Simplified */}
      <Section background="white">
        <SectionHeader
          title="Where Your Donation Goes"
        />

        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-accent to-accent-light text-text-inverse px-8 py-4 rounded-full text-xl font-bold shadow-lg shadow-accent/20">
            85%+ goes directly to student selection and stipends
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fundingBreakdown.map((item, index) => (
            <Card key={index} className="text-center h-full hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                {item.icon}
              </div>
              <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
              <p className="text-text-secondary text-sm">{item.description}</p>
            </Card>
          ))}
        </div>

        <p className="text-center text-text-secondary mt-8 max-w-2xl mx-auto">
          We are committed to transparency. No funds go to personal profit—only reasonable operational costs
          and direct student support.
        </p>
      </Section>

      {/* Ways to Give - Simplified */}
      <Section background="gray">
        <SectionHeader title="Ways to Give" />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {waysToGive.map((way, index) => (
            <Card key={index} hover className="h-full">
              <div className="text-sm font-medium text-accent mb-1">{way.highlight}</div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">{way.title}</h3>
              <p className="text-text-secondary">{way.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Tax Information - Simplified */}
      <div className="relative bg-dark-bg py-20">
        <BackgroundBeams />
        <div className="max-w-2xl mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Gift Is{" "}
            <span className="text-accent-light">Tax-Deductible</span>
          </h2>
          <p className="text-dark-text-muted mb-8">
            Professional Engineering Apprenticeships of Corpus Christi is a registered 501(c)(3) nonprofit organization.
          </p>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-accent/30 inline-block">
            <div className="text-sm text-dark-text-muted mb-2">EIN</div>
            <div className="text-4xl md:text-5xl font-bold text-accent-light">87-0876653</div>
          </div>
          <p className="text-dark-text-muted mt-8">
            Your contribution is tax-deductible to the extent allowed by law. We will provide documentation for your records.
          </p>
        </div>
      </div>

      {/* CTA - Simplified */}
      <Section background="white">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Build the{" "}
            <span className="text-accent">Future Workforce</span>
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Every pledge helps grow a new generation of engineers—young people from Corpus Christi ready
            to design the bridges, ports, and technology that power our city.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-accent text-text-inverse font-bold rounded-full hover:bg-accent-light transition-colors shadow-lg shadow-accent/20"
          >
            Donate Now
          </Link>
          <p className="text-text-muted mt-6">
            Interested in corporate partnership?{' '}
            <Link to="/contact" className="text-primary hover:underline">Contact us</Link> to discuss sponsorship opportunities.
          </p>
        </div>
      </Section>
    </>
  );
}
