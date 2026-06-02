export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-video-wrap">
        <video
          className="hero-video"
          src="/videos/hero-fox.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay" />
        <div className="hero-overlay-bottom" />
      </div>

      <div className="paw paw-1">🐾</div>
      <div className="paw paw-2">🐾</div>
      <div className="paw paw-3">🐾</div>
      <div className="paw paw-4">🐾</div>

      <div className="hero-content">
        <div className="hero-panel">
          <div className="hero-badge">🌍 Explore the Animal Kingdom</div>
          <h1 className="hero-title">
            Meet Amazing
            <br />
            <span className="hero-highlight">Animals!</span>
          </h1>
          <p className="hero-sub">
            Discover fun facts, watch cool videos, and play quizzes about your
            favourite wild friends!
          </p>
          <div className="hero-btns">
            <a href="#animals" className="btn btn-primary">
              Explore Animals 🐾
            </a>
            <a href="#quiz" className="btn btn-secondary">
              Take a Quiz 🧩
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">200+</span>
              <span className="stat-label">Animals</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">500+</span>
              <span className="stat-label">Fun Facts</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">50+</span>
              <span className="stat-label">Quizzes</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll to explore</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}
