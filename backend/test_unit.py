import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_signup():

    user = {
        "username": "testuser",
        "email": "test@example.com",
        "full_name": "Test User",
        "hashed_password": "123456"  
    }

    response = client.post("/signup", json=user)
    assert response.status_code == 200
    assert response.json() == {"message": "User Register Successfully"}
