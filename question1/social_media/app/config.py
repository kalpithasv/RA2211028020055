import os
from dotenv import load_dotenv

load_dotenv()

BASE_URL = "http://20.244.56.144/test"
COMPANY_NAME = os.getenv("COMPANY_NAME", "srmuniversity")
CLIENT_ID = os.getenv("CLIENT_ID", "f9ff3df4-6afc-4865-9852-cd35d3bd56cc")
CLIENT_SECRET = os.getenv("CLIENT_SECRET", "LkliaSLqMjzpQBcC")
OWNER_NAME = os.getenv("OWNER_NAME", "kalpitha")
OWNER_EMAIL = os.getenv("OWNER_EMAIL", "kv3200@srmist.edu.in")
ROLL_NO = os.getenv("ROLL_NO", "RA2211028020055")
