import { Link } from 'react-router-dom';
import { FEATURED_DISHES } from '../../data/restaurant';

export function FeaturedDishes() {
  return (
    <div className="dish-grid">
      {FEATURED_DISHES.map((dish) => (
        <article key={dish.name} className="dish-card">
          <Link
            to="/menu"
            className="dish-photo"
            aria-label={`View ${dish.name} on our menu`}
          >
            <img
              src={dish.image}
              width={768}
              height={768}
              loading="lazy"
              alt={dish.name}
            />
          </Link>
          <p className="dish-category">{dish.label}</p>
          <div className="dish-title">
            <h3>{dish.name}</h3>
            <span>${dish.price}</span>
          </div>
          <p className="dish-description">{dish.description}</p>
        </article>
      ))}
    </div>
  );
}
