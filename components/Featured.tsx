import { animals } from "@/lib/data";

export default function Featured() {
  return (
    <section className="section featured" id="featured">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">⭐ Featured</span>
          <h2>Today&apos;s Animal Stars</h2>
          <p>Learn something new about these amazing creatures!</p>
        </div>
        <div className="animals-grid">
          {animals.map((a) => (
            <div key={a.name} className="animal-card">
              <div className="animal-img-wrap" style={{ background: a.gradient }}>
                <div className="animal-emoji">{a.emoji}</div>
              </div>
              <div className="animal-body">
                <div className={`animal-badge ${a.badgeClass}`}>{a.badge}</div>
                <h3>{a.name}</h3>
                <p>{a.desc}</p>
                <div className="animal-facts">
                  {a.facts.map((f) => (
                    <span key={f}>{f}</span>
                  ))}
                </div>
                <button className="btn-learn">Learn More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
