import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function ReserveBand() {
  return (
    <section className="reserve-band">
      <div className="site-container reserve-inner">
        <div>
          <span className="eyebrow">An evening worth remembering</span>
          <h2>Your table is waiting.</h2>
          <p>Make your next evening one to remember.</p>
        </div>
        <Button asChild variant="hero" size="lg">
          <Link to="/contact">
            Reserve a Table <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
