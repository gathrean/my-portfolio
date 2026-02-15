import './NavbarFallback.css';

export function NavbarFallback() {
  return (
    <noscript>
      <nav className="noscript-navbar">
        <a href="/" className="noscript-brand">Gathrean Dela Cruz</a>

        {/* Checkbox hack for mobile toggle — no JS needed */}
        <input type="checkbox" id="noscript-toggle" className="noscript-toggle" />
        <label htmlFor="noscript-toggle" className="noscript-hamburger" aria-label="Menu">
          <span />
          <span />
          <span />
        </label>

        <ul className="noscript-links">
          <li><a href="/about">About</a></li>
          <li><a href="/work">Work</a></li>
          <li><a href="/photography">Photography</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </noscript>
  );
}
