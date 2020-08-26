const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'))
app.use('/products/:productId', express.static('public'));

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})

// Initial Commit Notes From Back-end Engineer
/* Build required Routes from the API documentation
                                   Express              MongoDB             MongoDB Shell
What are the routes?      [client] ------> [server.js] ---------> [MongooseDB] ------------> [AWS]



Soooooo ---> The client  will send a request for data
Then,





THOUGHTS:
where does docker fit into this! ? Instead of e2.MicroInstances and clusters I would use docker and kubernetes to scale to 10M
remove psuedocode before Plan implementation commit.
*/
