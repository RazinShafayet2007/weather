import type { Season } from '../engine/types';

interface ThemeSelectorProps {
  activeSeason: Season;
  seasons: Array<{ value: Season; label: string }>;
  onChange: (season: Season) => void;
}

export function ThemeSelector({ activeSeason, seasons, onChange }: ThemeSelectorProps) {
  return (
    <div className="season-selector" role="tablist" aria-label="Season selector">
      {seasons.map((season) => (
        <button
          key={season.value}
          type="button"
          role="tab"
          aria-selected={activeSeason === season.value}
          className={activeSeason === season.value ? 'season-chip active' : 'season-chip'}
          onClick={() => onChange(season.value)}
        >
          {season.label}
        </button>
      ))}
    </div>
  );
}
