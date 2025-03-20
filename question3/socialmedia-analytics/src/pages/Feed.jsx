import React, { useEffect, useState } from "react";

function Feed() {
  const [posts, setPosts] = useState([]); // ✅ Ensure it's an empty array

  useEffect(() => {
    fetch("http://localhost:3000/trending")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data); // Debugging: Check what you received
        setPosts(Array.isArray(data) ? data : []); // ✅ Ensure `data` is an array
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <h2>Trending Posts</h2>
      {posts.length === 0 ? ( // Show message if no posts found
        <p>No posts available</p>
      ) : (
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

export default Feed;
