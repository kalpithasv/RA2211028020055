import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 bg-gray-200">
      <Link to="/" className="mx-2">Feed</Link>
      <Link to="/top-users" className="mx-2">Top Users</Link>
      <Link to="/trending-posts" className="mx-2">Trending Posts</Link>
    </nav>
  );
}

export default Navbar;
