const columns = [
  {
    title: "Explore",
    items: ["Animals", "Fun Facts", "Quiz", "Videos"],
  },
  {
    title: "Learn",
    items: ["Wild Animals", "Ocean Life", "Birds", "Insects"],
  },
  {
    title: "Parents",
    items: ["About Us", "Safety", "Contact", "Privacy Policy"],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-icon">🦊</span>{" "}
          <span className="logo-text">FoxKids</span>
          <p>Making learning about animals fun for every child!</p>
        </div>
        {columns.map((col) => (
          <div key={col.title} className="footer-links">
            <h4>{col.title}</h4>
            <ul>
              {col.items.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© 2026 FoxKids · Made with ❤️ for curious kids everywhere</p>
      </div>
    </footer>
  );
}
