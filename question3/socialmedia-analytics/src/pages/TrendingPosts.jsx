import React, { useEffect, useState } from "react";

function TrendingPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/trending")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Trending Posts Data:", data); // Debugging
        setPosts(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("Error fetching trending posts:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h2>Trending Posts</h2>
      {error ? <p style={{ color: "red" }}>Error: {error}</p> : null}
      {posts.length === 0 ? <p>No trending posts available</p> : (
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default TrendingPosts;
