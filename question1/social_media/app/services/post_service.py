from fastapi import APIRouter, Query
import requests
from collections import defaultdict
from app.config import BASE_URL
from app.utils.cache import latest_posts, popular_posts

router = APIRouter()

@router.get("/")
def get_posts(type: str = Query("latest", enum=["latest", "popular"])):
    """Returns latest 5 posts or most popular posts based on comments."""
    response = requests.get(f"{BASE_URL}/users")
    
    if response.status_code != 200:
        return {"error": "Failed to fetch users"}
    
    users = response.json().get("users", {})
    
    all_posts = []
    comment_counts = defaultdict(int)

    for user_id in users.keys():
        posts_response = requests.get(f"{BASE_URL}/users/{user_id}/posts")
        if posts_response.status_code == 200:
            posts = posts_response.json().get("posts", [])
            for post in posts:
                latest_posts.append(post)  # Add to latest posts cache
                
                # Get comment count
                comment_response = requests.get(f"{BASE_URL}/posts/{post['id']}/comments")
                if comment_response.status_code == 200:
                    comments = comment_response.json().get("comments", [])
                    comment_counts[post['id']] = len(comments)
                    popular_posts[post['id']] = post

    if type == "latest":
        return {"latest_posts": list(latest_posts)}

    max_comments = max(comment_counts.values(), default=0)
    most_popular = [post for pid, post in popular_posts.items() if comment_counts[pid] == max_comments]

    return {"popular_posts": most_popular}
