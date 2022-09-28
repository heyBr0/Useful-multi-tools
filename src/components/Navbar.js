import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>
      <Link to="/">Multi-tool-organizer</Link>
      </h1>
      <div className="links">
        <Link to="/crypto">Crypto</Link>
        <Link to="/exchange">Exchange</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/math">Math</Link>
        <Link to="/stopwatch">Stopwatch</Link>
        <Link to="/todo">ToDo</Link>
        <Link to="/notes">Notes</Link>
     {/*    <Link to="/search">Search API</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;
