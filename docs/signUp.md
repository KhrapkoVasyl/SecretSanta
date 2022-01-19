# Sign Up

Registers a user with the given parameters.

**URL** : `/api/signUp/`

**Method** : `POST`

**Auth required** : No

**Permissions required** : None

**Data constraints**

```json
{
  "name": "name of any length, at least one character",
  "surname": "surname of any length, at least one character",
  "wishes": [
    "array",
    "of",
    "wishes",
    "wish of any length, at least 3 characters"
  ]
}
```

Note that the value of the name, surname, or wish array element cannot be an empty string or null. Partial data, or empty date are not allowed. The number of elements (wishes) in the array of wishes can be from 1 to 10. You can only send wishes in an array.

## Success Responses

**Code** : `201 Created`

**Content example**

```json
{
  "status": "success",
  "result": {
    "name": "Petra",
    "surname": "Liskov",
    "wishes": ["paints", "skates", "rollers"],
    "id": 4
  }
}
```

## Error Responses

**Condition** : If the first name, last name, or wish array field is missing.

**Code** : `400 Bad Request`

**Content**

```json
{
  "status": "fail",
  "errors": [
    {
      "value": "",
      "msg": "Name must be specified",
      "param": "name",
      "location": "body"
    }
  ]
}
```

```json
"status": "fail",
    "errors": [
        {
            "value": "",
            "msg": "Name must be specified",
            "param": "name",
            "location": "body"
        },
        {
            "value": "",
            "msg": "Surname must be specified",
            "param": "surname",
            "location": "body"
        },
        {
            "msg": "Wishlist must be completed",
            "param": "wishes",
            "location": "body"
        },
        {
            "msg": "Cannot read property 'length' of undefined",
            "param": "wishes",
            "location": "body"
        },
        {
            "msg": "Wishes list must be an array",
            "param": "wishes",
            "location": "body"
        }
    ]
```

### Or

**Condition** : If an empty string or null is specified for the name, surname or wish.

**Code** : `400 Bad Request`

**Content**

```json
{
  "status": "fail",
  "errors": [
    {
      "value": "",
      "msg": "Surname must be specified",
      "param": "surname",
      "location": "body"
    },
    {
      "value": "",
      "msg": "Wish name must be specified",
      "param": "wishes[2]",
      "location": "body"
    },
    {
      "value": "",
      "msg": "Wish name must contain at least 3 letters",
      "param": "wishes[2]",
      "location": "body"
    }
  ]
}
```

### Or

**Condition** : if the wish is given in less than three characters.

**Code** : `400 Bad Request`

**Content**

```json
{
  "status": "fail",
  "errors": [
    {
      "value": "PS",
      "msg": "Wish name must contain at least 3 letters",
      "param": "wishes[0]",
      "location": "body"
    }
  ]
}
```

### Or

**Condition** : If wishes field does not contain an array.

**Code** : `400 Bad Request`

**Content**

```json
{
  "status": "fail",
  "errors": [
    {
      "value": {},
      "msg": "Wishes list must be an array",
      "param": "wishes",
      "location": "body"
    }
  ]
}
```

### Or

**Condition** : If more than 10 elements (wishes) were specified in the array of wishes.

**Code** : `400 Bad Request`

**Content**

```json
{
  "status": "fail",
  "errors": [
    {
      "value": [
        "ball",
        "guitar",
        "shoes",
        "T-shirt",
        "hat",
        "phone",
        "ps5",
        "laptop",
        "candy",
        "Iphone",
        "player"
      ],
      "msg": "The number of given wishes is greater than the allowed maximum (10)",
      "param": "wishes",
      "location": "body"
    }
  ]
}
```
