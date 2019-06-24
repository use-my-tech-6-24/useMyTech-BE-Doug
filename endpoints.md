# endpoints guide

## LOGIN to website:

POST /api/auth/login

## REGISTER to website:

POST - /api/auth/register

example user: 

all fields are required

{
	"username": "admin",
	"email": "admin1@gmail.com",
	"password": "abc123"
}

## GET all users on api/users/
#### REQUIRES AUTHENTICATION (logged in)
GET - /api/users/

## GET specific user with their items and messages attached to items 
#### REQUIRES AUTHENTICATION (logged in)

GET - /api/users/:id (userid)

## GET all items on /api/items/

GET - /api/items/

## GET specific item by id on /api/items/:id

GET - /api/items/:id

## GET messages left on specifc items (item id)
#### REQUIRES AUTHENTICATION (logged in)

GET - /api/items/messages/:id

## GET all messages for all items
#### REQUIRES AUTHENTICATION (logged in)

GET - /api/rentable/

## POST add new item to /api/items
#### REQUIRES AUTHENTICATION (logged in)

example post: 

{
	"name": "Mircosoft Xbox",
	"type": "video game",
	"price": 38.00,
	"image_url": "imgur.com",
	"description": "your description"
}

name, and type are the only two required fields

## POST add message to item /api/rentable/:id
#### REQUIRES AUTHENTICATION (logged in)

:id is the item id 

example:
/api/rentable/8 
{
	"message": "jkjkjk"
}

will add a message to the item whose id is 8


## Update users item /api/items/:id
#### REQUIRES AUTHENTICATION (logged in)

example:
/api/items/7
{
	"name": "Switches",
	"price": 250,
	"type": "video game"
}

only required fields from earlier are required, but you could add a description field here

## Delete users item by id /api/items/:id
#### REQUIRES AUTHENTICATION (logged in)

## Delete message when logged in as that user /api/rentable/:id
#### REQUIRES AUTHENTICATION (logged in)

Id is the message id number. 

You can find it on get /api/rentable/

Or 

looking it up from get /api/users/:id (id being the user id)


