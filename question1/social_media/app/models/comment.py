from pydantic import BaseModel

class Comment(BaseModel):
    id: int
    postid: int
    content: str
