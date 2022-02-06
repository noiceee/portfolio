import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="name-logo">Kartikey</span>
      <div className="list-wrapper">
        <span>Home</span>
        <span>About me</span>
        <span>Projects</span>
        <span>Resume</span>
      </div>
    </nav>
  );
}
