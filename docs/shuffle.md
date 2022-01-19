# Shuffle

Santa user pairs are determined and written to the database.

**URL** : `/api/v1/shuffle/`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data constraints** : None

## Success Responses

**Code** : `201 Created`

**Content example**

```json
{
  "status": "success"
}
```

## Error Responses

**Condition** : If the number of registered players is less than the minimum value.

**Code** : `400 Bad Request`

**Content**

```json
{
  "status": "fail",
  "message": "The number of players must be at least 3"
}
```

### Or

**Condition** : If pairs have already been made.

**Code** : `400 Bad Request`

**Content**

```json
{
  "status": "fail",
  "message": "Pairs of santa and users have already been made"
}
```
