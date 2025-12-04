export default function Section({
  children,
  className = '',
  background = 'white',
  spacing = 'normal', // 'normal' (80px) or 'large' (120px) for major transitions
  id,
}) {
  const backgrounds = {
    white: 'bg-surface',
    gray: 'bg-surface-alt',
    blue: 'bg-primary text-text-inverse',
    blueDark: 'bg-primary-dark text-text-inverse',
    dark: 'bg-dark-bg text-dark-text',
  };

  // Standardized spacing: 80px normal, 120px for major transitions
  const spacingClasses = {
    normal: 'py-20 md:py-20', // 80px
    large: 'py-24 md:py-30', // 96px mobile, 120px desktop
  };

  return (
    <section id={id} className={`${spacingClasses[spacing]} ${backgrounds[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-heading mb-4 ${light ? 'text-dark-text' : 'text-text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-subhead max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-dark-text-muted' : 'text-text-secondary'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
