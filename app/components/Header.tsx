export default function Header() {
  return (
    <header className="siteHeader">
      <a href="/" className="brand" aria-label="Tangible Value home">
        <span>Tangible Value</span>
        <small>Knowledge • Value • Confidence</small>
      </a>

      <nav className="navLinks" aria-label="Primary navigation">
        <a href="/learn">Learn</a>
        <a href="/acquire">Acquire</a>
        <a href="/guides">Guides</a>
        <a href="/tools">Tools</a>
        <a href="/registry">Registry</a>
        <a href="/newsletter">Newsletter</a>
      </nav>
    </header>
  );
}
