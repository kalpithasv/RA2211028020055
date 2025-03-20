import React, { useEffect, useState } from "react";

function TopUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Top Users Data:", data); // Debugging
        setUsers(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("Error fetching top users:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h2>Top Users</h2>
      {error ? <p style={{ color: "red" }}>Error: {error}</p> : null}
      {users.length === 0 ? <p>No users available</p> : (
        users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>Followers: {user.followers}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default TopUsers;
