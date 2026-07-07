export default function Header() {
  return (
    <header className="siteHeader">
      <a href="/" className="brand">
        Tangible Knowledge
      </a>

      <nav className="navLinks">
        <a href="/learn">Learn</a>
        <a href="/acquire">Acquire</a>
        <a href="/acquire/gold">Gold</a>
        <a href="/acquire/silver">Silver</a>
        <a href="/acquire/books">Books</a>
      </nav>
    </header>
  );
}