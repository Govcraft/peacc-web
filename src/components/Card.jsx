import { Link } from 'react-router-dom';

export default function Card({
  children,
  className = '',
  hover = false,
  padding = 'normal', // 'compact', 'normal', 'spacious'
}) {
  // Improved padding for better figure-ground relationship
  // Content should occupy less than 50% of card area for proper breathing room
  const paddingClasses = {
    compact: 'p-5', // 20px
    normal: 'p-8', // 32px - improved from 24px
    spacious: 'p-10', // 40px
  };

  return (
    <div
      className={`bg-surface rounded-xl shadow-md ${paddingClasses[padding]} ${
        hover ? 'hover:shadow-lg transition-shadow duration-200' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function FeatureCard({ icon, title, description, to, linkText }) {
  return (
    <Card hover className="flex flex-col h-full" padding="normal">
      {icon && (
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 text-primary">
          {icon}
        </div>
      )}
      <h3 className="text-heading-sm text-text-primary mb-3">{title}</h3>
      <p className="text-body-sm text-text-secondary flex-grow mb-5">{description}</p>
      {to && linkText && (
        <Link
          to={to}
          className="text-primary font-medium hover:text-primary-dark inline-flex items-center group"
        >
          {linkText}
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </Card>
  );
}

export function StepCard({ number, title, description }) {
  return (
    <div className="flex items-start p-5 bg-surface rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-md transition-all duration-200">
      <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-text-inverse font-bold mr-5 shadow-sm">
        {number}
      </div>
      <div className="pt-1">
        <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
        <p className="text-body-sm text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function StatCard({ value, label, light = false }) {
  return (
    <div className={`text-center p-6 rounded-xl ${light ? 'bg-white/5' : 'bg-surface-alt'}`}>
      <div className={`text-4xl md:text-5xl font-bold mb-3 ${light ? 'text-accent-light' : 'text-accent'}`}>
        {value}
      </div>
      <div className={`text-body-sm font-medium ${light ? 'text-dark-text' : 'text-text-secondary'}`}>{label}</div>
    </div>
  );
}
