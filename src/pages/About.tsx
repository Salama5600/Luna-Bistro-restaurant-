import { PageIntro } from '../components/common/PageIntro';
import { ReserveBand } from '../components/common/ReserveBand';
import { ASSETS, STORY_LEAD_TEXT, MOMENTS_TEXT } from '../data/restaurant';

export function About() {
  return (
    <>
      <PageIntro
        eyebrow="The heart behind the table"
        title="Our story."
      >
        A love of good food. A belief in warm hospitality. A table made for memories.
      </PageIntro>

      <div className="site-container">
        <img
          className="page-cover"
          src={ASSETS.interior}
          alt="Warm light and olive trees in the Luna dining room"
          width={1440}
          height={1024}
        />
      </div>

      <section className="section">
        <div className="site-container editorial-pair">
          <div>
            <span className="eyebrow">A table made for memories</span>
            <h2>
              A little Mediterranean.
              <br />
              A lot of heart.
            </h2>
          </div>
          <p className="section-lead">
            {STORY_LEAD_TEXT} Inspired by the generosity of Mediterranean tables, Luna brings together seasonal produce, familiar flavors, and the pleasure of taking your time.
          </p>
        </div>
      </section>

      <section className="section sand-section">
        <div className="site-container editorial-pair">
          <img
            src={ASSETS.chef}
            alt="Chef adding the final fresh herbs to a carefully prepared dish"
            width={768}
            height={768}
            loading="lazy"
            className="story-photo"
          />
          <div>
            <span className="eyebrow">Made with intention</span>
            <h2>
              Great ingredients.
              <br />
              Nothing to hide.
            </h2>
            <p className="section-lead">
              Ripe tomatoes, fragrant herbs, good olive oil. Our kitchen starts with the season and lets the ingredients lead. We cook with care, balancing Mediterranean roots with a fresh perspective.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container philosophy-grid">
          <div>
            <span className="eyebrow">01 · Seasonality</span>
            <h3>Follow the season.</h3>
            <p>
              Fresh produce and bright, honest flavors are the foundation of every plate.
            </p>
          </div>
          <div>
            <span className="eyebrow">02 · Craft</span>
            <h3>Care in the details.</h3>
            <p>
              From fresh pasta to the last spoonful of pistachio cream, thoughtful preparation makes the difference.
            </p>
          </div>
          <div>
            <span className="eyebrow">03 · Hospitality</span>
            <h3>Make yourself at home.</h3>
            <p>{MOMENTS_TEXT}</p>
          </div>
        </div>
      </section>

      <ReserveBand />
    </>
  );
}
