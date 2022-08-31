import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Multi-tools organizer</h1>
      <div className="links">
        <Link to="/crypto">Crypto</Link>
        <Link to="/exchange">Exchange</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/math">Math</Link>
        <Link to="/notes">Notes</Link>
      </div>
    </nav>
  );
}

export default Navbar;
