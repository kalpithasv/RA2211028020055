// src/components/PostCard.jsx
const PostCard = ({ post }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md bg-white">
        <h2 className="font-bold text-lg">{post.title}</h2>
        <p>{post.body}</p>
        <p className="text-sm text-gray-500">Comments: {post.comments}</p>
      </div>
    );
  };
  
  export default PostCard;
  