import { MapPin } from 'lucide-react';
import { OpeningHours } from './OpeningHours';
import { EditorialLink } from './EditorialLink';

export function ConceptMap() {
  return (
    <div
      className="concept-map"
      role="img"
      aria-label="Illustrative location map for the fictional Luna Bistro at 125 Olive Street"
    >
      <div className="map-lines" />
      <div className="map-pin">
        <MapPin size={28} />
        <strong>LUNA BISTRO</strong>
        <br />
        125 Olive Street, Downtown
      </div>
      <span className="map-disclaimer">Illustrative map · Fictional location</span>
    </div>
  );
}

export function LocationSection() {
  return (
    <section className="section">
      <div className="site-container location-layout">
        <div>
          <span className="eyebrow">Find your way to our table</span>
          <h2>Visit Luna Bistro.</h2>
          <div className="location-address">
            <MapPin />
            <div>
              125 Olive Street, Downtown
              <br />
              <span className="text-xs text-muted-foreground">
                Fictional address · Portfolio concept
              </span>
            </div>
          </div>
          <OpeningHours />
          <EditorialLink to="/contact">Plan Your Visit</EditorialLink>
        </div>
        <ConceptMap />
      </div>
    </section>
  );
}
