import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          しまなび
        </Link>
      </div>
    </nav>
  );
}
