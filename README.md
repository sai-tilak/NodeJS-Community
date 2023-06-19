# NodeJS-Community
Creating community roles using the nodejs frame work and using MongoDB for storing data

I have read the description for each API and adhered to the response structure.
Description for the API's used in the code
Role API:
Create Role:
Endpoint: POST /v1/role
Description: Creates a new role.
Request Body :
{
  "name": "Role Name"
}
Response: 
{
  "message": "Role created successfully",
  "role": {
    "_id": "role_id",
    "name": "Role Name",
    "created_at": "2023-06-17T12:00:00.000Z",
    "updated_at": "2023-06-17T12:00:00.000Z"
  }
}
Get All Roles:

Endpoint: GET /v1/role
Description: Retrieves all roles.
Response:
json
{
  "roles": [
    {
      "_id": "role_id",
      "name": "Role Name",
      "created_at": "2023-06-17T12:00:00.000Z",
      "updated_at": "2023-06-17T12:00:00.000Z"
    },
   
  ]
}
User API:
Sign Up:

Endpoint: POST /v1/auth/signup
Description: Creates a new user account.
Request Body:
json

{
  "name": "User Name",
  "email": "user@example.com",
  "password": "strong_password"
}
Response:
json

{
  "message": "User created successfully",
  "user": {
    "_id": "user_id",
    "name": "User Name",
    "email": "user@example.com",
    "created_at": "2023-06-17T12:00:00.000Z"
  }
}
Sign In:

Endpoint: POST /v1/auth/signin
Description: Authenticates a user and generates an access token.
Request Body:
json

{
  "email": "user@example.com",
  "password": "strong_password"
}
Response:
json

{
  "message": "User signed in successfully",
  "token": "access_token"
}
Get Authenticated User:

Endpoint: GET /v1/auth/me
Description: Retrieves information about the authenticated user.
Response:
json

{
  "user": {
    "_id": "user_id",
    "name": "User Name",
    "email": "user@example.com",
    "created_at": "2023-06-17T12:00:00.000Z"
  }
}
Community API:
Create Community:
Endpoint: POST /v1/community
Description: Creates a new community.
Request Body:
json

{
  "name": "Community Name",
  "slug": "community_slug"
}
Response:
json

{
  "message": "Community created successfully",
  "community": {
    "_id": "community_id",
    "name": "Community Name",
    "slug": "community_slug",
    "owner": "owner_id",
    "created_at": "2023-06-17T12:00:00.000Z",
   
