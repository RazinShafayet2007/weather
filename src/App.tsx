import { useEffect, useRef, useState } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { RainGlassEffect } from './effects/rain/RainGlassEffect';
import { SnowfallEffect } from './effects/snow/SnowfallEffect';
import type { ThemeController } from './engine/themeController';
import type { Season } from './engine/types';

function App() {
  const canvasHostRef = useRef<HTMLDivElement | null>(null);
  const controllerRef = useRef<ThemeController | null>(null);
  const [season, setSeason] = useState<Season>('summer');
  const [fallbackMode, setFallbackMode] = useState(false);

  useEffect(() => {
    if (!canvasHostRef.current) {
      return undefined;
    }

    let cancelled = false;
    let syncFallback: (() => void) | undefined;

    void Promise.all([
      import('./engine/themeController'),
      import('./styles/themes'),
      import('./scenes/summerScene'),
      import('./scenes/winterScene'),
      import('./scenes/rainyScene'),
    ]).then(([controllerModule, themeModule, summerModule, winterModule, rainyModule]) => {
      if (cancelled || !canvasHostRef.current) {
        return;
      }

      const controller = new controllerModule.ThemeController({
        host: canvasHostRef.current,
        defaultSeason: 'summer',
        sceneFactories: {
          summer: () => new summerModule.SummerScene(),
          winter: () => new winterModule.WinterScene(),
          rainy: () => new rainyModule.RainyScene(),
        },
        themes: themeModule.themes,
        onThemeChange: (theme) => setSeason(theme.season),
      });

      controllerRef.current = controller;
      controller.init();
      setSeason(controller.getSeason());
      setFallbackMode(controller.getFallbackMode());

      syncFallback = () => setFallbackMode(controller.getFallbackMode());
      window.addEventListener('resize', syncFallback);
    });

    return () => {
      cancelled = true;
      if (syncFallback) {
        window.removeEventListener('resize', syncFallback);
      }
      controllerRef.current?.dispose();
      controllerRef.current = null;
    };
  }, []);

  const handleSeasonChange = (nextSeason: Season) => {
    controllerRef.current?.setSeason(nextSeason);
  };

  return (
    <div className={`app season-${season}${fallbackMode ? ' fallback' : ''}${season === 'rainy' && !fallbackMode ? ' rain-glass-active' : ''}`}>
      <div className="background-shell">
        <div ref={canvasHostRef} className="canvas-host" aria-hidden="true" />
        <div className="background-gradient" aria-hidden="true" />
        <SnowfallEffect active={season === 'winter' && !fallbackMode} />
        <RainGlassEffect active={season === 'rainy' && !fallbackMode} />
        <div className="season-overlay season-overlay-back" aria-hidden="true" />
        <div className="season-overlay season-overlay-front" aria-hidden="true" />
        <div className="background-overlay" aria-hidden="true" />
      </div>
      <Navbar activeSeason={season} onSeasonChange={handleSeasonChange} />
      <Hero activeSeason={season} fallbackMode={fallbackMode} />
    </div>
  );
}

export default App;
