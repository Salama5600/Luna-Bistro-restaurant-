import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu as MenuIcon, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { NAV_LINKS } from '../../data/restaurant';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link
          to="/"
          className="wordmark"
          aria-label="Luna Bistro home"
          onClick={() => setIsOpen(false)}
        >
          LUNA BISTRO
          <span>MODERN MEDITERRANEAN</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.to === '/'
                ? location.pathname === '/'
                : location.pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                className="nav-link"
                data-status={isActive ? 'active' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <Button asChild className="header-reserve" size="lg">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Reserve a Table <ArrowUpRight />
            </Link>
          </Button>

          <Button
            className="mobile-trigger"
            variant="ghost"
            size="icon"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <MenuIcon />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.to === '/'
                ? location.pathname === '/'
                : location.pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                className="nav-link"
                data-status={isActive ? 'active' : undefined}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
