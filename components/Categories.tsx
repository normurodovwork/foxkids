import { categories } from "@/lib/data";

export default function Categories() {
  return (
    <section className="section categories" id="animals">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">🐾 Animal Families</span>
          <h2>Which animals do you love?</h2>
          <p>Pick a group and start your adventure!</p>
        </div>
        <div className="category-grid">
          {categories.map((c) => (
            <div
              key={c.title}
              className="category-card"
              style={{ ["--c" as string]: c.color }}
            >
              <div className="cat-emoji">{c.emoji}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <span className="cat-count">{c.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
