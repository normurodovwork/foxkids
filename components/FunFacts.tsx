"use client";

import { useCallback, useEffect, useState } from "react";
import { facts } from "@/lib/data";

function renderText(text: string) {
  // Convert **bold** segments to <strong>
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function FunFacts() {
  const [current, setCurrent] = useState(0);

  const go = useCallback((n: number) => {
    setCurrent((n + facts.length) % facts.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % facts.length), 5000);
    return () => clearInterval(t);
  }, []);

  const fact = facts[current];

  return (
    <section className="section fun-facts" id="facts">
      <div className="facts-bg-shapes">
        <div className="shape s1" />
        <div className="shape s2" />
        <div className="shape s3" />
      </div>
      <div className="container">
        <div className="section-header light">
          <span className="section-tag">💡 Did You Know?</span>
          <h2>Wow-worthy Animal Facts!</h2>
          <p>Swipe through amazing facts — then share with friends!</p>
        </div>

        <div className="facts-carousel">
          <div className="fact-slide" key={current}>
            <div className="fact-icon">{fact.icon}</div>
            <p className="fact-text">{renderText(fact.text)}</p>
            <span className="fact-animal">{fact.animal}</span>
          </div>
        </div>

        <div className="facts-nav">
          <button className="facts-btn" onClick={() => go(current - 1)} aria-label="Previous">
            ←
          </button>
          <div className="facts-dots">
            {facts.map((_, i) => (
              <button
                key={i}
                className={`fact-dot${i === current ? " active" : ""}`}
                onClick={() => go(i)}
                aria-label={`Fact ${i + 1}`}
              />
            ))}
          </div>
          <button className="facts-btn" onClick={() => go(current + 1)} aria-label="Next">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
