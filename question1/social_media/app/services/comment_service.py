from fastapi import APIRouter
import requests
from app.config import BASE_URL

router = APIRouter()

@router.get("/{post_id}")
def get_comments(post_id: int):
    """Fetch comments for a given post."""
    response = requests.get(f"{BASE_URL}/posts/{post_id}/comments")
    if response.status_code == 200:
        return response.json()
    return {"error": "Failed to fetch comments"}
