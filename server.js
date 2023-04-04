const { MongoClient } = require('mongodb');
const express = require('express')
const app = express()
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'dogs_db';

app.get('/:doggieName', async function (req, res) {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('dogs');
    const findResult = await collection.find({name:req.params.doggieName}).toArray();
    console.log("=============")
    console.log(findResult)
    console.log("=============")
    res.json(findResult)
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})



// or as an es module:
// import { MongoClient } from 'mongodb'



// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('dogs');
//   const findResult = await collection.find({}).toArray();
//   console.log("-----------")
//   console.log(findResult)
//   console.log("-----------")
//   // the following code examples can be pasted here...

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());