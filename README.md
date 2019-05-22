Description: Get all the dogs from the database
Endpoint: http://localhost:3002/api/v1/dogs
Method: GET
Params: none
Request Payload: none
Response: 
{
   id: 1
   breed: ‘Pitbull’,
   color: ‘Grey’,
},{
   id:2
   breed: ‘Bulldog’,
   color: ‘Brown’
}
_________________________________

Description: Get a dog by its ID from the database
Endpoint: http://localhost:3002/api/v1/dog/id/:id
Method: GET
Params: id - the dog id
Request Payload: none
Response: 
{
   id: 1
   breed: ‘Pitbull’,
   color: ‘Grey’
}
_________________________________

Description: Create a new dog record
Endpoint: http://localhost:3002/api/v1/dog
Method: POST
Params: none
Request Payload: 
{
   breed: ‘German Shepperd’,
   color: ‘Black’
}
Response: 
{
   id: 3
   breed: ‘German Shepperd’,
   color: ‘Black’
}


_________________________________

Description: Update a dog record
Endpoint: http://localhost:3002/api/v1/dog/id/:id
Method: PUT
Params: id - the id of the dog
Request Payload: 
{
   breed: ‘German Shepperd’,
   color: ‘Brown’
}
Response: 
{
   id: 12349
   breed: ‘German Shepperd’,
   color: ‘Brown’
}
_________________________________

Description: Delete a dog record
Endpoint: http://localhost:3002/api/v1/dog/id/:id
Method: DELETE
Params: id - The id of the dog
Request Payload: None
Response: 
{
   id: 3
   breed: ‘German Shepperd’,
   color: ‘Brown’
}
_________________________________

Description: Get all the flowers from the database
Endpoint: http://localhost:3002/api/v1/flowers
Method: GET
Params: none
Request Payload: none
Response: 
{
   id: 1
   type: ‘Rose’,
   color: ‘Red’,
},{
   id:2
   type: ‘Sunflower’,
   color: ‘Yellow’
}
_________________________________

Description: Get a flower by its ID from the database
Endpoint: http://localhost:3002/api/v1/flower/id/:id
Method: GET
Params: id - the flower id
Request Payload: none
Response: 
{
   id: 1
   type: ‘Rose’,
   color: ‘Red’
}
_________________________________

Description: Create a new flower record
Endpoint: http://localhost:3002/api/v1/flower
Method: POST
Params: none
Request Payload: 
{
   type: ‘Lily’,
   color: ‘Pink’
}
Response: 
{
   id: 3
   type: ‘Lily’,
   color: ‘Pink’
}


_________________________________

Description: Update a flower record
Endpoint: http://localhost:3002/api/v1/flower/id/:id
Method: PUT
Params: id - the id of the flower
Request Payload: 
{
   type: ‘Rose’,
   color: ‘White’
}
Response: 
{
   id: 12349
   name: ‘Rose’,
   color: ‘White’
}
_________________________________

Description: Delete a flower record
Endpoint: http://localhost:3002/api/v1/flower/id/:id
Method: DELETE
Params: id - The id of the flower
Request Payload: None
Response: 
{
   id: 3
   type: ‘Rose’,
   color: ‘White’
}
_________________________________

Description: Get all the toys from the database
Endpoint: http://localhost:3002/api/v1/toys
Method: GET
Params: none
Request Payload: none
Response: 
{
   id: 1
   type: ‘Truck’,
   material: ‘Plastic’,
   color: ‘Black’,
},{
   id:2
   type: ‘Block’,
   material: ‘Wood’,
   color: ‘Brown’
}
_________________________________

Description: Get a toy by its ID from the database
Endpoint: http://localhost:3002/api/v1/toy/id/:id
Method: GET
Params: id - the toy id
Request Payload: none
Response: 
{
   id: 1
   type: ‘Truck’,
   material: ‘Plastic’,
   color: ‘Black’
}
_________________________________

Description: Create a new toy record
Endpoint: http://localhost:3002/api/v1/toy
Method: POST
Params: none
Request Payload: 
{
   type: ‘Phone’,
   material: ‘Plastic’,
   color: ‘Grey’
}
Response: 
{
   id: 3
   type: ‘Phone’,
   material: ‘Plastic’,
   color: ‘Grey’
}
_________________________________

Description: Update a toy record
Endpoint: http://localhost:3002/api/v1/toy/id/:id
Method: PUT
Params: id - the id of the toy
Request Payload: 
{
   type: ‘Truck’,
   material: ‘metal’,
   color: ‘Black’
}
Response: 
{
   id: 1
   type: ‘Truck’,
   material: ‘metal’,
   color: ‘Black’
}
_________________________________

Description: Delete a toy record
Endpoint: http://localhost:3002/api/v1/toy/id/:id
Method: DELETE
Params: id - The id of the toy
Request Payload: None
Response: 
{
   id: 2
   type: ‘Block’,
   material: ‘Wood’,
   color: ‘Brown’
}