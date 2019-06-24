# usemytechstuff-backend


Pitch: Like AirBnB but for high end electronics. Tired of paying ridiculous fees for camera and other equipment rentals? Bypass the middleman and rent from a real person!

MVP: Users can log in and create a profile. They can then set up items they have for rent such as cameras, TVs, Party equipment like speakers/fog machines etc. Users will be able to Create, Read, Update and Delete rental data. A 2nd user can log in and see items that users have for rent and ask to rent an item. No payment processing necessary for MVP.

Stretch: Add a payment option into the application allowing people to pay over paypal/stripe etc. to rent their items, schedule time and place for pick up etc. Add a review system into the app so that the social aspect is there to ensure that users are legit.


rentable should be an array that stores the user_id who clicked on the box


get user by id will show all the information from the user, all their items, with rentable attached.

get items will show a list of items, without rentable attached

post rentable by id, will post the users username, user_id, and a short message to the items id



so user2 clicks on an item => item.rentable = ['user2'];

{
	id: 1,
	username: 'test_user',
	email: 'testuser1@gmail.com',
	items: 
	[
	{ 
	id: 1,
	user_id: 1,
	name: 'samsung 4k tv',
	image_url: 'imgur.com',
	price: '55.00',
	type: 'tv',
	rentable: 
	[
	{
	item_id: 1,
	user_id: 2
	},
	{
	item_id: 1,
	user_id: 3
	}
	]
	}
	]
	}
