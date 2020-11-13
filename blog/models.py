from sqlalchemy import Column, Integer, String
from db import Base

class Blog(Base):
    __tablename__ = "blog"

    postid = Column(Integer, primary_key=True)
    title = Column(String(25), unique=True)
