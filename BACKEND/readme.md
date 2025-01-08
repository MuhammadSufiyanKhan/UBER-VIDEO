Collecting workspace information

I'll help create a README.md file documenting the /users/register endpoint based on the codebase.

# User Registration API Documentation

## Register User
Creates a new user account and returns an authentication token.

### Endpoint
```
POST /users/register
```

### Request Body
```json
{
  "fullname": {
    "firstname": "string", // minimum 3 characters
    "lastname": "string"   // minimum 3 characters
  },
  "email": "string",      // valid email format
  "password": "string"    // minimum 6 characters
}
```

### Validation Rules
- 

fullname.firstname

: Must be at least 3 characters long
- 

fullname.lastname

: Must be at least 3 characters long 
- 

email

: Must be a valid email format and unique in the system
- 

password

: Must be at least 6 characters long

### Success Response
**Status Code**: 201 Created

```json
{
  "token": "jwt_token_string",
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string"
  }
}
```

### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "_id": "60d0fe4f5311236168a109ca"
  }
}
```

### Error Responses

**Status Code**: 400 Bad Request
- When validation fails:
```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field_name"
    }
  ]
}
```

- When user already exists:
```json
{
  "message": "User already exist"
}
```

### Notes
- Password is automatically hashed before storage
- JWT token is generated using the user's ID
<!--
This document specifies that the email address must be unique within the system.
-->
- Email must be unique in the system
## User Profile Management

### Get User Profile
Retrieves authenticated user's profile information including their ID, name, email and role.

**Example Request:**

### GET /users/profile
Protected endpoint to retrieve the current user's profile information.
- **Authentication**: Required (JWT token)
- **Response**: 
    - `200 OK`: Returns user profile data
    ```json
    {
        "id": "string",
        "name": "string",
        "email": "string",
        "role": "string"
    }
    ```
    - `401 Unauthorized`: Invalid or missing token

### POST /users/logout
Endpoint to logout the current user and invalidate their session.
- **Authentication**: Required (JWT token)
- **Response**:
    - `200 OK`: Successfully logged out
    ```json
    {
        "message": "Successfully logged out"
    }
    ```
    - `401 Unauthorized`: Invalid or missing token

