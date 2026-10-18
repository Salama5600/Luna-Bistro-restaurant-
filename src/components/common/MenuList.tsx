import { MenuItem } from '../../data/restaurant';

interface MenuListProps {
  items: MenuItem[];
  variant?: 'rows' | 'cards';
}

export function MenuList({ items, variant = 'rows' }: MenuListProps) {
  if (variant === 'cards') {
    return (
      <div className="menu-list cards">
        {items.map((item) => (
          <article key={item.name} className="menu-item menu-card">
            <img
              className="menu-card-photo"
              src={item.image}
              alt={item.name}
              width={768}
              height={768}
              loading="lazy"
            />
            <div className="menu-card-body">
              <div className="menu-item-head">
                <h3>{item.name}</h3>
                <span>${item.price}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="menu-list">
      {items.map((item) => (
        <article key={item.name} className="menu-item">
          <img
            className="menu-item-photo"
            src={item.image}
            alt={item.name}
            width={96}
            height={96}
            loading="lazy"
          />
          <div className="menu-item-body">
            <div className="menu-item-head">
              <h3>{item.name}</h3>
              <span>${item.price}</span>
            </div>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
