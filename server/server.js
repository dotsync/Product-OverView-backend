const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'))
app.use('/products/:productId', express.static('public'));

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})

/* OBJECTIVE: Build required Routes from the API documentation

                                   Express              MongoDB             MongoDB Shell
Routes                    [client] ------> [server.js] ---------> [MongooseDB] ------------> [AWS]

GUIDE:
1. Build routes with hard-coded responses.
Example: Client will request `GET /products/list` so that it can retrieve the list of products
         Server will respond NOT from the DB but from hardcoded data like so:

        [
  {
		"id": 1,
		"name": "Camo Onesie",
		"slogan": "Blend in to your crowd",
		"description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
		"category": "Jackets",
		"default_price": "140"
	}
]
2. Copy the above guideline for all 4 routes for the future MongoDB containers.
3. Now make a database and connect to express
(ADDITIONAL STEPS MAY BE REQUIRED) */
