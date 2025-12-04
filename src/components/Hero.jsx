import Button from './Button';

export default function Hero({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  backgroundImage,
  overlay = true,
  size = 'lg',
}) {
  const sizes = {
    sm: 'py-16 md:py-20',
    md: 'py-20 md:py-28',
    lg: 'py-24 md:py-36',
  };

  return (
    <div
      className={`relative ${sizes[size]} ${
        backgroundImage ? 'bg-cover bg-center' : 'bg-gradient-to-br from-primary to-primary-dark'
      }`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-primary/80" />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-display-lg text-text-inverse mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-subhead text-dark-text-muted mb-8">
              {subtitle}
            </p>
          )}
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryAction && (
                <Button
                  to={primaryAction.to}
                  href={primaryAction.href}
                  variant="secondary"
                  size="lg"
                >
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  to={secondaryAction.to}
                  href={secondaryAction.href}
                  variant="outlineWhite"
                  size="lg"
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
