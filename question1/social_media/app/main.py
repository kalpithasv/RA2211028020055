from fastapi import FastAPI
from app.services.user_service import router as user_router
from app.services.post_service import router as post_router

app = FastAPI(title="Social Media Analytics API")

# Include Routes
app.include_router(user_router, prefix="/users", tags=["Users"])
app.include_router(post_router, prefix="/posts", tags=["Posts"])

@app.get("/")
def root():
    return {"message": "Welcome to Social Media Analytics API"}
