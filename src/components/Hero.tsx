import type { Season } from '../engine/types';

const toneCopy: Record<Season, { eyebrow: string; title: string; detail: string; note: string }> = {
  summer: {
    eyebrow: 'Warm atmosphere',
    title: 'Summer opens with sun haze, floating pollen, and late-afternoon warmth.',
    detail: 'The scene now feels closer to real heat and sunlight, using layered glow, lifted air, and softer golden motion that stays elegant behind the content.',
    note: 'Golden light with airy movement and warm contrast.',
  },
  winter: {
    eyebrow: 'Quiet precision',
    title: 'Winter leans into frosted light, weightless snow, and crisp focus.',
    detail: 'The system shifts the entire interface into a cooler register while keeping text contrast sharp and motion restrained.',
    note: 'Soft snowfall, cooler surfaces, and restrained motion.',
  },
  rainy: {
    eyebrow: 'Moody cinema',
    title: 'Rainy introduces depth, mist, and storm-toned motion with control.',
    detail: 'Layered rain, subtle flicker, and darker surfaces create a cinematic feel that reads like a luxury campaign, not a gimmick.',
    note: 'Refraction rain, subdued lighting, and cinematic depth.',
  },
};

interface HeroProps {
  activeSeason: Season;
  fallbackMode: boolean;
}

export function Hero({ activeSeason, fallbackMode }: HeroProps) {
  const copy = toneCopy[activeSeason];

  return (
    <main className="hero shell" id="top">
      <section className="hero-copy">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="hero-detail">{copy.detail}</p>
        <div className="hero-actions">
          <a href="#details" className="button-primary">
            Explore the experience
          </a>
          <span className="hero-note">{copy.note}</span>
        </div>
      </section>

      <section className="hero-side" id="details">
        <article className="feature-panel hero-panel-main">
          <p className="panel-kicker">Active season</p>
          <h2>{activeSeason === 'summer' ? 'A warm, sunlit identity for product storytelling.' : activeSeason === 'winter' ? 'A calm, frosted atmosphere with clear readability.' : 'A darker cinematic scene with glass-rain detail.'}</h2>
          <p>{fallbackMode ? 'Fallback mode is ready, so the experience still feels polished even without strong WebGL support.' : 'The UI, renderer, and atmosphere stay synchronized so each season feels like one designed environment.'}</p>
        </article>

        <div className="hero-stats">
          <article className="hero-stat">
            <span>3</span>
            <p>Season scenes with independent lifecycle and cleanup.</p>
          </article>
          <article className="hero-stat">
            <span>{fallbackMode ? 'Fallback' : 'Realtime'}</span>
            <p>{fallbackMode ? 'CSS gradients and layered surfaces preserve the landing page mood.' : 'Live transitions update atmosphere, lighting, and interface tone together.'}</p>
          </article>
          <article className="hero-stat">
            <span>Adaptive</span>
            <p>Scaled effects for desktop, tablet, mobile, and reduced motion.</p>
          </article>
        </div>
      </section>

      <section className="hero-footnote">
        <p>
          Built as a premium landing page background system with modular scenes, controlled transitions, and performance-aware rendering.
        </p>
        <a href="#top" className="button-secondary hero-link-inline">
          Back to top
        </a>
      </section>
    </main>
  );
}
