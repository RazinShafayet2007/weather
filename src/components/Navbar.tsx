import type { Season } from '../engine/types';
import { ThemeSelector } from './ThemeSelector';

interface NavbarProps {
  activeSeason: Season;
  onSeasonChange: (season: Season) => void;
}

const seasons: Array<{ value: Season; label: string }> = [
  { value: 'summer', label: 'Summer' },
  { value: 'winter', label: 'Winter' },
  { value: 'rainy', label: 'Rainy' },
];

export function Navbar({ activeSeason, onSeasonChange }: NavbarProps) {
  return (
    <header className="navbar shell">
      <div className="nav-panel">
        <a href="#top" className="brand" aria-label="Weather home">
          <span className="brand-mark" />
          <span className="brand-copy">
            <strong>Weather</strong>
            <small>Seasonal Atmospheres</small>
          </span>
        </a>
        <nav className="nav-actions" aria-label="Primary">
          <span className="nav-label">Scene</span>
          <span className="nav-season">{seasons.find((season) => season.value === activeSeason)?.label}</span>
        </nav>
      </div>
      <div className="nav-controls">
        <ThemeSelector activeSeason={activeSeason} seasons={seasons} onChange={onSeasonChange} />
      </div>
    </header>
  );
}
