import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Section, { SectionHeader } from "../components/Section";
import { FeatureCard, StepCard, StatCard } from "../components/Card";
import Button from "../components/Button";
import { FlipWords } from "../components/ui/flip-words";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Spotlight } from "../components/ui/spotlight";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { BackgroundBeams } from "../components/ui/background-beams";

const testimonials = [
  {
    quote:
      "Before PEACC, I thought math was just formulas on a test. Now I see how engineers use those same formulas to build bridges in my own city.",
    name: "Maria S.",
    title: "PEACC Apprentice, 2023",
  },
  {
    quote:
      "The apprenticeship showed me what engineering actually looks like. I'm applying to engineering schools now because I can finally see myself doing this work.",
    name: "James R.",
    title: "PEACC Apprentice, 2023",
  },
  {
    quote:
      "Working alongside real engineers changed everything. The math I was learning suddenly had a purpose.",
    name: "Sarah T.",
    title: "PEACC Apprentice, 2022",
  },
  {
    quote:
      "I never knew engineers worked on projects right here in Corpus. Now I want to be one of them.",
    name: "David M.",
    title: "PEACC Apprentice, 2023",
  },
];

const bentoItems = [
  {
    title: "Real Engineering Projects",
    description:
      "Work on actual projects from Corpus Christi, including analysis based on the New Harbor Bridge construction.",
    header: (
      <div className="flex items-center justify-center h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
        <svg
          className="w-16 h-16 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      </div>
    ),
    icon: <span className="text-primary font-semibold">01</span>,
  },
  {
    title: "Paid Experience",
    description:
      "Earn $2,000 for completing the program. Your time and skills have value.",
    header: (
      <div className="flex items-center justify-center h-32 bg-gradient-to-br from-accent/15 to-accent/5 rounded-xl">
        <svg
          className="w-16 h-16 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    ),
    icon: <span className="text-accent font-semibold">02</span>,
  },
  {
    title: "Professional Mentorship",
    description:
      "Shadow engineers, attend real meetings, and learn directly from industry professionals.",
    header: (
      <div className="flex items-center justify-center h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
        <svg
          className="w-16 h-16 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
    ),
    icon: <span className="text-primary font-semibold">03</span>,
  },
  {
    title: "Local Impact",
    description:
      "Help build the city you live in. Corpus Christi's future infrastructure needs engineers from our community.",
    header: (
      <div className="flex items-center justify-center h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
        <svg
          className="w-16 h-16 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    ),
    icon: <span className="text-primary font-semibold">04</span>,
  },
];

export default function Home() {
  const words = ["bridges", "ports", "buildings", "futures"];

  return (
    <>
      {/* Hero Section with Spotlight */}
      <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-dark-bg antialiased relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#60a5fa"
        />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          {/* Semantic headline breaks - keeping related words together */}
          <h1 className="text-display-lg text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-dark-text-muted bg-opacity-50 pb-4">
            From math class{" "}
            <span className="block sm:inline">to engineering</span>
            <FlipWords words={words} className="text-accent-light" />
          </h1>
          <p className="mt-6 text-body text-dark-text-muted max-w-2xl text-center mx-auto leading-relaxed">
            PEACC places Corpus Christi high school students in{" "}
            <span className="text-accent-light font-semibold">paid engineering apprenticeships</span>—turning
            classroom math into the career that builds our city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              to="/students"
              className="px-8 py-4 bg-accent text-text-inverse font-bold rounded-full hover:bg-accent-light transition-colors text-center shadow-lg shadow-accent/20"
            >
              Apply Now
            </Link>
            <Link
              to="/support"
              className="px-8 py-4 border-2 border-white/30 text-dark-text font-semibold rounded-full hover:bg-white/10 transition-colors text-center"
            >
              Support PEACC
            </Link>
          </div>
        </div>
      </div>

      {/* Student Testimonials - ELEVATED to appear early for peer trust */}
      <Section background="white">
        <SectionHeader
          title="Real Students, Real Transformations"
          subtitle="Hear from students whose futures changed through PEACC"
        />

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </Section>

      {/* The Problem Section with Text Generate Effect */}
      <Section background="gray">
        <SectionHeader title="Why This Matters" />

        <div className="max-w-4xl mx-auto">
          <TextGenerateEffect
            words="These aren't failures of talent. They're failures of connection."
            className="text-heading text-center text-text-primary mb-12"
          />

          <div className="space-y-6 text-body text-text-secondary">
            <p>
              <strong className="text-primary">Jazmine and Ta'Leigha</strong>{" "}
              were two of the best math students at West Oso High School. They
              excelled in AP Calculus. But when it came time for the AP exam,
              they opted out—one wanted to be a nurse, the other a business
              major. Math never felt connected to their futures.
            </p>
            <p>
              Then there's <strong className="text-primary">Juan</strong>.
              Captain of the robotics team. Active in every engineering club.
              Yet he barely passed precalculus because he saw math and
              engineering as separate things. When he applied to college, he
              discovered he didn't have enough math credits for engineering
              programs.
            </p>
            <div className="bg-surface border-l-4 border-accent p-8 rounded-r-xl shadow-sm">
              <p className="text-subhead text-text-primary italic">
                "Students from our community rarely see inside professional
                engineering offices. The math they learn in school feels
                divorced from how engineers actually use it. So even brilliant
                students don't imagine themselves as engineers."
              </p>
              <p className="text-caption text-accent mt-4 font-semibold">
                — Andre Mack, Founder
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* What PEACC Offers - Bento Grid */}
      <Section background="white">
        <SectionHeader
          title="What PEACC Offers"
          subtitle="A complete program designed to transform how students see their future"
        />

        <BentoGrid className="max-w-5xl mx-auto">
          {bentoItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </Section>

      {/* Stats Section - Reduced animation density */}
      <Section background="dark">
        <SectionHeader title="PEACC Bridges the Gap" light />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <StatCard value="$2,000" label="Stipend per apprentice" light />
          <StatCard value="6" label="Week apprenticeship" light />
          <StatCard value="10" label="Hours per week max" light />
        </div>

        <div className="max-w-3xl mx-auto text-center text-dark-text-muted text-body">
          <p className="mb-6">
            <strong className="text-dark-text">
              Professional Engineering Apprenticeships of Corpus Christi
            </strong>{" "}
            places mathematically qualified high school students into six-week
            paid apprenticeships with local engineering firms.
          </p>
          <p className="mb-8">
            Apprentices shadow engineers. Attend real meetings. See firsthand
            what it means to build their city.
          </p>
          <p className="text-heading text-dark-text">
            The goal is simple:{" "}
            <span className="text-accent-light">for students to imagine themselves as future engineers.</span>
          </p>
        </div>
      </Section>

      {/* How It Works Section - Simplified animations */}
      <Section background="gray">
        <SectionHeader title="Three Steps to Your Engineering Future" />

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <StepCard
              number="1"
              title="Apply"
              description="Submit your application with two letters of recommendation and a small processing fee."
            />
            <StepCard
              number="2"
              title="Qualify"
              description="Take our Engineering Apprenticeship Mathematics Exam—problems based on real Corpus Christi projects like the New Harbor Bridge."
            />
            <StepCard
              number="3"
              title="Apprentice"
              description="Spend six weeks (up to 10 hours/week) learning alongside professional engineers. Get paid. Build your future."
            />
          </div>

          <div className="text-center mt-12">
            <Button to="/students" variant="secondary" size="lg">
              Learn More About the Program
            </Button>
          </div>
        </div>
      </Section>

      {/* Get Involved Section - Simplified animations */}
      <Section background="white">
        <SectionHeader title="How Will You Help Build the Future?" />

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            }
            title="I'm a Student"
            description="Ready to turn your math skills into real-world experience? See if you qualify and start your application."
            to="/students"
            linkText="Apply for an Apprenticeship"
          />

          <FeatureCard
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            }
            title="I Want to Donate"
            description="Your contribution puts students in engineering offices and builds Corpus Christi's future workforce."
            to="/support"
            linkText="Support PEACC"
          />

          <FeatureCard
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            }
            title="I'm an Engineering Firm"
            description="Shape the next generation of engineers while investing in your community."
            to="/partners"
            linkText="Become a Partner"
          />
        </div>
      </Section>

      {/* Final CTA with Background Beams - Simplified animations */}
      <div className="h-[28rem] w-full bg-dark-bg relative flex flex-col items-center justify-center antialiased overflow-hidden">
        <BackgroundBeams />
        <div className="max-w-3xl mx-auto text-center relative z-10 px-4">
          <h2 className="text-display text-dark-text mb-4">
            Growing Engineers From Corpus...
            <span className="text-accent-light"> For Corpus</span>
          </h2>
          <p className="text-subhead text-dark-text-muted mb-10">
            Together, we can help local students discover that the math they
            learn in school builds the city they live in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/students"
              className="px-8 py-4 bg-accent text-text-inverse font-bold rounded-full hover:bg-accent-light transition-colors shadow-lg shadow-accent/20"
            >
              Apply Now
            </Link>
            <Link
              to="/support"
              className="px-8 py-4 border-2 border-white/30 text-dark-text font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
