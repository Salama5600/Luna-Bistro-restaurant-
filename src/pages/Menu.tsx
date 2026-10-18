import { useState } from 'react';
import { PageIntro } from '../components/common/PageIntro';
import { Button } from '../components/ui/Button';
import { MenuList } from '../components/common/MenuList';
import { EditorialLink } from '../components/common/EditorialLink';
import { ReserveBand } from '../components/common/ReserveBand';
import { ASSETS, MENU_CATEGORIES } from '../data/restaurant';

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('Starters');

  return (
    <>
      <PageIntro
        eyebrow="Seasonal. Thoughtful. Made to share."
        title="Our menu."
      >
        Seasonal ingredients, Mediterranean inspiration, and dishes designed to share.
      </PageIntro>

      <div className="menu-tabs">
        <div className="site-container menu-tabs-inner" aria-label="Menu categories">
          {MENU_CATEGORIES.map((cat, idx) => (
            <Button
              key={cat.category}
              variant="ghost"
              aria-pressed={activeCategory === cat.category}
              onClick={() => {
                setActiveCategory(cat.category);
                document.getElementById(`category-${idx}`)?.scrollIntoView({
                  behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
                    ? 'instant'
                    : 'smooth',
                  block: 'start',
                });
              }}
            >
              {cat.category}
            </Button>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="site-container">
          <div className="full-menu">
            {MENU_CATEGORIES.map((cat, idx) => (
              <section key={cat.category} id={`category-${idx}`} className="menu-category">
                <h2>{cat.category}</h2>
                <MenuList items={cat.items} variant="cards" />
              </section>
            ))}
            <p className="concept-note">
              Fictional menu · Sample prices in USD. Please share dietary requirements in your table request.
            </p>
          </div>
        </div>
      </section>

      <section className="section sand-section">
        <div className="site-container chef-selection">
          <img
            src={ASSETS.seabass}
            width={768}
            height={768}
            loading="lazy"
            alt="Grilled sea bass with lemon and seasonal vegetables"
          />
          <div>
            <span className="eyebrow">Chef’s selection</span>
            <h2>
              From the sea.
              <br />
              With a little soul.
            </h2>
            <p className="section-lead">
              Grilled Mediterranean sea bass, seasonal vegetables, lemon butter, and fresh herbs. Simple ingredients, thoughtfully brought together.
            </p>
            <p className="mt-5 font-display text-3xl">$28</p>
            <EditorialLink to="/contact">Join Us at the Table</EditorialLink>
          </div>
        </div>
      </section>

      <ReserveBand />
    </>
  );
}
