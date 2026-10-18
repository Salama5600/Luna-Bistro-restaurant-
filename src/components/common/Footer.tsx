import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Instagram, Facebook, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { NAV_LINKS } from '../../data/restaurant';

export function Footer() {
  const [modalType, setModalType] = useState<string | null>(null);

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="wordmark" to="/">
              LUNA BISTRO
            </Link>
            <p>Where Every Dish Tells a Story.</p>
          </div>

          <div className="footer-links">
            <div>
              <h3>Explore</h3>
              <nav aria-label="Footer navigation">
                {NAV_LINKS.map((link) => (
                  <Link key={link.to} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h3>At our table</h3>
              <nav>
                <Link to="/contact">
                  Reserve a Table <ArrowUpRight className="inline size-3" />
                </Link>
                <Button
                  variant="editorial"
                  className="justify-start h-auto p-0 text-xs"
                  onClick={() => setModalType('Instagram')}
                >
                  <Instagram className="size-3.5" /> Instagram
                </Button>
                <Button
                  variant="editorial"
                  className="justify-start h-auto p-0 text-xs"
                  onClick={() => setModalType('Facebook')}
                >
                  <Facebook className="size-3.5" /> Facebook
                </Button>
              </nav>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Luna Bistro. Fictional restaurant · Portfolio concept.</p>
          <div className="footer-legal">
            <Button variant="editorial" onClick={() => setModalType('Privacy Policy')}>
              Privacy Policy
            </Button>
            <Button variant="editorial" onClick={() => setModalType('Terms')}>
              Terms
            </Button>
          </div>
        </div>
      </div>

      {modalType !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/80 transition-opacity"
            onClick={() => setModalType(null)}
            aria-hidden="true"
          />
          <div
            className="legal-content relative z-10 w-full max-w-lg rounded-lg border bg-background p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setModalType(null)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
            <h2 className="font-display text-2xl font-semibold leading-none tracking-tight">
              {modalType}
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              {modalType === 'Privacy Policy'
                ? 'Your privacy, respected.'
                : 'Luna Bistro — a fictional restaurant concept.'}
            </p>
            <p>
              {modalType === 'Privacy Policy'
                ? 'This portfolio website does not store or send reservation details. The reservation form is a demonstration only. Please do not enter sensitive personal information.'
                : modalType === 'Terms'
                ? 'All restaurant details, prices, reviews and images are fictional sample content. No actual reservation, purchase or dining service is offered through this website.'
                : `No official ${modalType} account is connected to this fictional restaurant. Enjoy a glimpse of Luna in our gallery instead.`}
            </p>
            {modalType !== 'Terms' && modalType !== 'Privacy Policy' && (
              <div className="mt-4">
                <Button asChild onClick={() => setModalType(null)}>
                  <Link to="/gallery">
                    Explore the Gallery <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
