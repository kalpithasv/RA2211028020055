// src/components/UserCard.jsx
const UserCard = ({ user }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md bg-white">
        <h2 className="font-bold text-lg">{user.name}</h2>
        <p>Posts: {user.postCount}</p>
      </div>
    );
  };
  
  export default UserCard;
  