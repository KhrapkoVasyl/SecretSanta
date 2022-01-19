# Get User By Santa

Displays the data of the user for whom the given id is the id of his santa.

**URL** : `/api/v1/:id/`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

## Success Responses

**Code** : `200 OK`

**Content example**

```json
{
  "status": "success",
  "result": {
    "name": "Jan",
    "surname": "Rodriguez",
    "wishes": ["ball", "sneakers"]
  }
}
```

## Error Responses

**Condition** : If there is no user with the given id.

**Code** : `404 NOT FOUND`

**Content**

```json
{
  "status": "fail",
  "message": "No user found with the id 100"
}
```
