from collections import defaultdict, deque

# Caching data for performance
user_post_count = defaultdict(int)
latest_posts = deque(maxlen=5)  # Stores the latest 5 posts
popular_posts = {}  # Stores posts with comment counts
