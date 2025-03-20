from fastapi import APIRouter
import requests
from app.config import BASE_URL
from app.utils.cache import user_post_count

router = APIRouter()

@router.get("/")
def get_top_users():
    """Returns top 5 users with the highest post count."""
    response = requests.get(f"{BASE_URL}/users")
    
    if response.status_code != 200:
        return {"error": "Failed to fetch users"}
    
    users = response.json().get("users", {})
    
    for user_id in users.keys():
        posts_response = requests.get(f"{BASE_URL}/users/{user_id}/posts")
        if posts_response.status_code == 200:
            user_post_count[user_id] = len(posts_response.json().get("posts", []))

    top_users = sorted(user_post_count.items(), key=lambda x: x[1], reverse=True)[:5]
    
    return {"top_users": [{"id": uid, "name": users[str(uid)], "post_count": count} for uid, count in top_users]}
