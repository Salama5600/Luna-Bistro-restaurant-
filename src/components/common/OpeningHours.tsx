import { OPENING_HOURS } from '../../data/restaurant';

export function OpeningHours() {
  return (
    <div className="hours">
      {OPENING_HOURS.map(([days, hours]) => (
        <div key={days}>
          <span>{days}</span>
          <span>{hours}</span>
        </div>
      ))}
    </div>
  );
}
