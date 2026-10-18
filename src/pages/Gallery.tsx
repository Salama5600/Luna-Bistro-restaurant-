import { PageIntro } from '../components/common/PageIntro';
import { GalleryGrid } from '../components/common/GalleryGrid';
import { ReserveBand } from '../components/common/ReserveBand';

export function Gallery() {
  return (
    <>
      <PageIntro
        eyebrow="Food. Atmosphere. Little moments."
        title={
          <>
            A glimpse of <em>Luna.</em>
          </>
        }
      >
        The flavors, the light, the company. An evening at our table.
      </PageIntro>

      <section className="section pt-0">
        <div className="site-container">
          <GalleryGrid />
          <p className="concept-note">
            Imagery created for the Luna Bistro fictional restaurant concept.
          </p>
        </div>
      </section>

      <ReserveBand />
    </>
  );
}
