import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-dark-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-dark-text mb-2">PEACC</h3>
            <p className="text-dark-text-muted mb-4">
              Professional Engineering Apprenticeships of Corpus Christi
            </p>
            <p className="text-accent-light font-medium italic">
              Growing engineers from Corpus...for Corpus.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-label text-dark-text-muted mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/students" className="text-dark-text-muted hover:text-dark-text transition-colors">
                  Apply for Apprenticeship
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-dark-text-muted hover:text-dark-text transition-colors">
                  Support PEACC
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-dark-text-muted hover:text-dark-text transition-colors">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-dark-text-muted hover:text-dark-text transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-label text-dark-text-muted mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-dark-text-muted">
              <li>Corpus Christi, Texas</li>
              <li>
                <a href="mailto:info@peacc.org" className="hover:text-dark-text transition-colors">
                  info@peacc.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-bg-alt mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dark-text-muted text-sm">
              A 501(c)(3) Nonprofit Organization | EIN: 87-0876653
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/contact" className="text-dark-text-muted hover:text-dark-text text-sm transition-colors">
                Contact Us
              </Link>
              <a href="#" className="text-dark-text-muted hover:text-dark-text text-sm transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
          <p className="text-text-muted text-tertiary mt-4 text-center md:text-left">
            &copy; {new Date().getFullYear()} Professional Engineering Apprenticeships of Corpus Christi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
