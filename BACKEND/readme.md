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
- Email must be unique in the system