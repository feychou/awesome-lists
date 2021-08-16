function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <ul>
          <li className="logo">Y</li>
          <li className="navbar-title">Hacker News</li>
          <li className="navbar-border hidden">news</li>
          <li className="navbar-border hidden">past</li>
          <li className="navbar-border hidden">comments</li>
          <li className="navbar-border hidden">ask</li>
          <li className="navbar-border hidden">show</li>
          <li className="navbar-border hidden">jobs</li>
          <li className="hidden">submit</li>
        </ul>
      </div>
      <div className="navbar-right">
        <p className="hidden">login</p>
      </div>
    </div>
  );
}

export default Navbar;
