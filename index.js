const fs = require('fs');
const path = require('path');
const express = require('express');
const { graphql } = require('graphql');
const { getIntrospectionQuery } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.static('public'));

const mySchema = require('./schema/main.js');
console.log('Schema', mySchema);

async function writeIntrospectionQueryCache() {
  try {
    const result = await graphql(mySchema, getIntrospectionQuery())
    fs.writeFileSync(
          path.join(__dirname, 'cache/schema.json'),
          JSON.stringify(result, null, 2)
        );
    console.log('Generated cached schema.json file');

  } catch (error) {
    console.log(error)
  }
}

async function main () {
  const MONGO_URL = 'mongodb://localhost:27017/test';

  const client = new MongoClient(MONGO_URL);
  let db = client.db('test')

  try {
    await client.connect((err, res) => {
      app.use('/graphql', graphqlHTTP({
        schema: mySchema,
        context: { db },
        graphiql: true
      }));
    })

    writeIntrospectionQueryCache();

    app.listen(3000, () => console.log('Running express.js on port http://localhost:3000'));

    // await listDatabases(client)

  } catch(e) {
    console.log(e)
  }
}



// async function listDatabases(client){
//   databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

main().catch(console.error);
