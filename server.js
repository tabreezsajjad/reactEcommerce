const express = require('express');
const cors = require('cors');
const Client = require('node-rest-client').Client;//import it here
const app = express();

app.use(cors());





app.get('/topCategory', (req, res) => {

    var client = new Client();
 
    // direct way
    client.get("http://149.129.128.3:3737/search/resources/store/1/categoryview/@top?depthAndLimit=-1,-1,-1,-1", (data, response) => {
     res.send({ express: data });
    });
 });

 

 app.get('/category/:id', (req, res) => {
     var id = req.params.id;
     console.log(req.params.id)
    var client = new Client();
 
    // direct way
    client.get("http://149.129.128.3:3737/search/resources/store/1/productview/byCategory/"+id, (data, response) => {
     res.send({ express: data });
    });
 });


 app.get('/product/:id', (req, res) => {
    var id = req.params.id;
    console.log(req.params.id)
   var client = new Client();

   // direct way
   client.get("http://149.129.128.3:3737/search/resources/store/1/productview/byId/"+id, (data, response) => {
    res.send({ express: data });
   });
});


const port = 3030;
app.listen(port, () => console.log(`Server running on port${port}`));