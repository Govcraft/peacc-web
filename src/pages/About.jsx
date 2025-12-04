import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { BackgroundBeams } from '../components/ui/background-beams';
import { Timeline } from '../components/ui/timeline';

export default function About() {
  const differences = [
    {
      title: 'Math Tied to Local Projects',
      description: 'Our qualifying exam and classroom problems are based on actual engineering challenges from Corpus Christi projects like the New Harbor Bridge.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Paid Apprenticeships',
      description: 'Students earn $2,000 for completing the program. This is a professional experience that values their time.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Qualification Through Demonstrated Skill',
      description: 'Students must pass a mathematics exam to qualify. Apprentices arrive prepared and capable.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'Focus on Self-Identification',
      description: 'Our goal isn\'t just to teach students about engineering. It\'s for them to see themselves as future engineers.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
  ];

  const storyTimeline = [
    {
      title: "The Problem",
      content: (
        <div>
          <p className="text-text-secondary mb-4">
            After years of teaching, Andre Mack noticed a troubling pattern. His brightest math students—students who excelled
            in AP Calculus, who won robotics competitions, who clearly had the talent for engineering—kept walking away from STEM fields.
          </p>
          <div className="bg-surface-raised rounded-xl p-4">
            <p className="text-text-secondary font-medium">
              <strong className="text-primary">Jazmine and Ta'Leigha</strong> could do the math. They just didn't see why it mattered.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "The Pattern",
      content: (
        <div>
          <p className="text-text-secondary mb-4">
            <strong className="text-primary">Juan</strong> loved building things with the robotics team but didn't take his math classes seriously—and
            missed out on engineering programs as a result.
          </p>
          <p className="text-text-secondary">
            Students from low socioeconomic communities rarely experience professional engineering environments.
            School mathematics often feels disconnected from how math is actually used in STEM careers.
          </p>
        </div>
      ),
    },
    {
      title: "The Insight",
      content: (
        <div className="bg-surface-raised border-l-4 border-accent rounded-r-xl p-6">
          <p className="text-xl font-medium text-text-primary italic">
            "These aren't failures of talent. They're failures of connection."
          </p>
          <p className="text-accent font-semibold mt-3">— Andre Mack, Founder</p>
        </div>
      ),
    },
    {
      title: "The Solution",
      content: (
        <div>
          <p className="text-text-secondary mb-4">
            So he started connecting math to the world students could see. In his classes, students now analyze problems drawn
            from the New Harbor Bridge project—calculating concrete curing times, pile-driving rates, cable angles, and crew
            salary distributions.
          </p>
          <p className="text-text-secondary">
            But classroom connections weren't enough. Students needed to see inside engineering offices. That's why Dr. Mack
            created PEACC.
          </p>
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
          <h1 className="text-4xl md:text-6xl font-bold text-center text-white pb-4">
            Building Connections{" "}
            <span className="block sm:inline">Between</span>
            <br />
            <span className="text-accent-light">Math Class and Career</span>
          </h1>
          <p className="mt-6 font-normal text-lg md:text-xl text-dark-text-muted max-w-2xl text-center mx-auto">
            PEACC exists because talented students shouldn't walk away from engineering just because no one showed them what engineers actually do.
          </p>
        </div>
      </div>

      {/* Our Mission - Simplified animations */}
      <Section background="white">
        <SectionHeader
          title="Helping Students See Themselves as Engineers"
        />

        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-center text-primary mb-12">
            Professional Engineering Apprenticeships of Corpus Christi (PEACC) places mathematically qualified high school students into six-week paid apprenticeships with local engineering firms.
          </p>

          <div className="bg-surface-alt rounded-2xl p-8">
            <h3 className="font-semibold text-text-primary mb-6 text-xl">We address two connected problems:</h3>
            <ol className="space-y-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-10 h-10 bg-accent text-text-inverse rounded-full flex items-center justify-center font-bold mr-4">1</span>
                <span className="text-text-secondary text-lg pt-1">Students from low socioeconomic communities rarely experience professional engineering environments</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-10 h-10 bg-accent text-text-inverse rounded-full flex items-center justify-center font-bold mr-4">2</span>
                <span className="text-text-secondary text-lg pt-1">School mathematics often feels disconnected from how math is actually used in STEM careers</span>
              </li>
            </ol>
          </div>

          <p className="text-xl text-text-secondary mt-10 text-center">
            By providing paid, real-world apprenticeship experiences—combined with math curriculum tied to actual
            local projects—PEACC helps students imagine futures in engineering.
          </p>
        </div>
      </Section>

      {/* The Story - Timeline - Simplified */}
      <Section background="gray">
        <SectionHeader
          title="Why PEACC Exists"
          subtitle="The story of how one teacher's observations became a nonprofit mission"
        />

        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-text-secondary mb-8">
            PEACC was founded by <strong className="text-accent">Andre Mack</strong>, a mathematics teacher at West Oso High School in Corpus Christi.
          </p>

          <Timeline data={storyTimeline} />
        </div>
      </Section>

      {/* What Makes PEACC Different - Simplified */}
      <Section background="white">
        <SectionHeader
          title="More Than Just Exposure"
          subtitle="What sets PEACC apart from other programs"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {differences.map((item, index) => (
            <Card key={index} className="flex items-start space-x-4 h-full hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center text-accent">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Organization Details - Simplified */}
      <div className="relative bg-dark-bg py-20">
        <BackgroundBeams />
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About Our{" "}
            <span className="text-accent-light">Nonprofit</span>
          </h2>

          <p className="text-dark-text-muted mb-10">
            Professional Engineering Apprenticeships of Corpus Christi is a Texas nonprofit corporation,
            recognized as tax-exempt under <strong className="text-accent-light">Section 501(c)(3)</strong> of the Internal Revenue Code.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { label: 'EIN', value: '87-0876653' },
              { label: 'Established', value: '2021' },
              { label: 'Location', value: 'Corpus Christi, TX' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-accent/20"
              >
                <div className="text-sm text-dark-text-muted mb-2">{item.label}</div>
                <div className="text-2xl font-bold text-accent-light">{item.value}</div>
              </div>
            ))}
          </div>

          <p className="text-dark-text-muted">
            PEACC is governed by a board of directors and operates exclusively for educational purposes,
            with no net earnings benefiting any private individual.
          </p>
        </div>
      </div>

      {/* Founder Bio - Simplified */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-surface-alt to-white rounded-2xl p-8 shadow-lg border border-border">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center shadow-lg shadow-accent/20">
                <span className="text-4xl font-bold text-text-inverse">AM</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-1">Andre Mack</h3>
                <p className="text-accent font-medium mb-4">Founder & Mathematics Teacher</p>
                <p className="text-text-secondary">
                  Andre Mack teaches mathematics at West Oso High School in Corpus Christi. His experience watching
                  talented students disconnect from STEM careers inspired the creation of PEACC. He has developed
                  over <strong className="text-accent">350 engineering-related mathematics problems</strong> tied to local projects, creating curriculum
                  that helps students see the relevance of their math education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Vision - Simplified */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Engineers From Corpus...
            <span className="text-accent"> For Corpus</span>
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            We envision a future where every mathematically capable student in Corpus Christi has the opportunity
            to experience professional engineering work—and to imagine themselves designing the bridges, ports,
            and technology of their own city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/students"
              className="px-8 py-4 bg-accent text-text-inverse font-bold rounded-full hover:bg-accent-light transition-colors shadow-lg shadow-accent/20"
            >
              Apply for an Apprenticeship
            </Link>
            <Link
              to="/support"
              className="px-8 py-4 bg-transparent text-primary font-bold rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-colors"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
