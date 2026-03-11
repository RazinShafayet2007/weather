import gsap from 'gsap';

export class TransitionManager {
  private tween?: gsap.core.Tween;
  private progress = 1;

  start(onUpdate: (value: number) => void, onComplete: () => void, duration = 1.15) {
    this.tween?.kill();
    this.progress = 0;
    this.tween = gsap.to(this, {
      progress: 1,
      duration,
      ease: 'power2.inOut',
      onUpdate: () => onUpdate(this.progress),
      onComplete: () => {
        onUpdate(1);
        onComplete();
      },
    });
  }

  getProgress() {
    return this.progress;
  }

  dispose() {
    this.tween?.kill();
  }
}
