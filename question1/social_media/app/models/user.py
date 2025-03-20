from pydantic import BaseModel

class User(BaseModel):
    id: int
    name: str
    post_count: int = 0
