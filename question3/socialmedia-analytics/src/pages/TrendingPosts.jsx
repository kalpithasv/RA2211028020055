import React from "react";

const TrendingPosts = () => {
  return (
    <div>
      <nav>
        <a href="/feed">Feed</a>
        <a href="/top-users">Top Users</a>
        <a href="/trending">Trending Posts</a>
      </nav>
      <h1>Trending Posts</h1>
      <div className="post">
        <h2>First Post</h2>
        <p>This is the first trending post description...</p>
      </div>
    </div>
  );
};

export default TrendingPosts;
