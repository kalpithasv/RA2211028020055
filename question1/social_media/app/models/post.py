from pydantic import BaseModel
from typing import List

class Post(BaseModel):
    id: int
    userid: int
    content: str
    comment_count: int = 0
