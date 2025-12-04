import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const variants = {
    primary: 'bg-primary text-text-inverse hover:bg-primary-dark focus-visible:ring-primary',
    secondary: 'bg-accent text-text-inverse hover:bg-accent/90 focus-visible:ring-accent',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-text-inverse focus-visible:ring-primary',
    outlineWhite: 'border-2 border-text-inverse text-text-inverse hover:bg-text-inverse hover:text-primary focus-visible:ring-text-inverse',
    ghost: 'text-primary hover:bg-primary/5 focus-visible:ring-primary',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
