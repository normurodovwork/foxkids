const placeholders = [
  { emoji: "🦁", label: "Lions on the Savanna" },
  { emoji: "🐬", label: "Dolphins Playing" },
  { emoji: "🦅", label: "Eagle Hunting" },
];

export default function Videos() {
  return (
    <section className="section videos-section" id="videos">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">🎬 Watch & Learn</span>
          <h2>Animal Videos</h2>
          <p>See animals in action — up close and amazing!</p>
        </div>
        <div className="videos-grid">
          <div className="video-card featured-video">
            <video src="/videos/hero-fox.mp4" controls muted loop playsInline />
            <div className="video-info">
              <span className="video-tag">🦊 Fox</span>
              <h4>Chibi Fox Walks Toward You</h4>
              <p>
                Watch this adorable fox curiously approaching — see how it moves
                so gracefully!
              </p>
            </div>
          </div>
          {placeholders.map((p) => (
            <div key={p.label} className="video-card placeholder-card">
              <div className="video-placeholder">
                <div className="vp-emoji">{p.emoji}</div>
                <span>{p.label}</span>
                <div className="vp-badge">Coming Soon</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
