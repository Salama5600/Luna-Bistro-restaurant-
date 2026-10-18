import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { EditorialLink } from '../components/common/EditorialLink';
import { FeaturedDishes } from '../components/common/FeaturedDishes';
import { MenuList } from '../components/common/MenuList';
import { GalleryGrid } from '../components/common/GalleryGrid';
import { ReserveBand } from '../components/common/ReserveBand';
import { LocationSection } from '../components/common/LocationSection';
import {
  ASSETS,
  MENU_CATEGORIES,
  STORY_LEAD_TEXT,
  MOMENTS_TEXT,
} from '../data/restaurant';

export function Home() {
  return (
    <>
      <section className="hero">
        <img
          className="hero-photo"
          src={ASSETS.hero}
          alt="Mediterranean dinner with burrata, mushroom pasta and grilled sea bass"
          width={1920}
          height={1024}
          fetchPriority="high"
        />
        <div className="site-container hero-inner reveal">
          <span className="eyebrow">Modern Mediterranean Bistro</span>
          <h1>
            Where every dish
            <br />
            tells a <em>story.</em>
          </h1>
          <p className="hero-copy">
            Modern Mediterranean cuisine crafted with seasonal ingredients and served with warmth.
          </p>
          <div className="hero-buttons">
            <Button asChild size="lg" variant="heroOutline">
              <Link to="/menu">
                Explore Our Menu <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild size="lg">
              <Link to="/contact">
                Reserve a Table <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="site-container hero-bottom-inner">
            <span>
              <MapPin size={13} />
              125 Olive Street, Downtown · A fictional concept
            </span>
            <span>
              An evening worth remembering <ArrowDown size={14} />
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container editorial-pair">
          <img
            src={ASSETS.interior}
            className="story-photo"
            width={1440}
            height={1024}
            loading="lazy"
            alt="Sunlight falling across linen-set tables in Luna's Mediterranean dining room"
          />
          <div className="story-copy">
            <span className="eyebrow">A little about Luna</span>
            <h2>
              A table made
              <br />
              for memories.
            </h2>
            <p className="section-lead">{STORY_LEAD_TEXT}</p>
            <EditorialLink to="/about">Discover Our Story</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section sand-section">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Seasonal ingredients. Thoughtfully crafted.</span>
              <h2>A taste of Luna.</h2>
            </div>
            <EditorialLink to="/menu">View Full Menu</EditorialLink>
          </div>
          <FeaturedDishes />
        </div>
      </section>

      <section className="section">
        <div className="site-container menu-preview">
          <div>
            <span className="eyebrow">From our kitchen to your table</span>
            <h2>
              Mediterranean roots.
              <br />
              A fresh perspective.
            </h2>
            <p className="section-lead">
              Seasonal ingredients, Mediterranean inspiration, and dishes designed to share.
            </p>
            <EditorialLink to="/menu">View Full Menu</EditorialLink>
          </div>
          <MenuList items={MENU_CATEGORIES[0].items.slice(0, 3)} />
        </div>
      </section>

      <section className="experience-band">
        <img
          src={ASSETS.guests}
          alt="A couple enjoying dinner and conversation at the bistro"
          width={768}
          height={768}
          loading="lazy"
          className="experience-photo"
        />
        <div className="site-container experience-content">
          <span className="eyebrow">More than a meal</span>
          <h2>
            Good food.
            <br />
            Good people.
            <br />
            <em>Good moments.</em>
          </h2>
          <p>{MOMENTS_TEXT}</p>
          <Button asChild variant="heroOutline" size="lg" className="mt-8">
            <Link to="/contact">
              Make an Evening of It <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Food, atmosphere & everything between</span>
              <h2>A glimpse of Luna.</h2>
            </div>
            <EditorialLink to="/gallery">Explore the Gallery</EditorialLink>
          </div>
          <GalleryGrid preview={true} />
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="site-container">
          <span className="eyebrow">Around our table · Fictional sample reviews</span>
          <div className="testimonials">
            {[
              ['An incredible dining experience from start to finish.', 'Sarah M.'],
              ['Beautiful atmosphere, amazing food, and genuinely warm service.', 'Daniel R.'],
              ['Luna Bistro has quickly become our favorite dinner spot.', 'Emma R.'],
            ].map(([quote, author]) => (
              <blockquote key={author}>
                <div className="quote-mark" aria-hidden="true">
                  “
                </div>
                <p className="testimonial-quote">{quote}</p>
                <cite className="testimonial-name not-italic">— {author}</cite>
              </blockquote>
            ))}
          </div>
          <p className="concept-note">
            Sample testimonials created for this fictional restaurant concept.
          </p>
        </div>
      </section>

      <ReserveBand />
      <LocationSection />
    </>
  );
}
