


### Starting Mongo DB

Two ways to start the DB

1. As a Mac Service
- brew services start mongodb-community@5.0
- brew services stop mongodb-community@5.0

2. As a background process
- Intel Macs
  - mongod --config /usr/local/etc/mongod.conf --fork
- Apple M1 Macs
  - mongod --config /opt/homebrew/etc/mongod.conf --fork

### Generate Schema

We can generate the schema from the server implementation
using a package from Prisma-Labs called `get-graphql-schema`[https://github.com/prisma-labs/get-graphql-schema]

Usage: get-graphql-schema [OPTIONS] ENDPOINT_URL > schema.graphql


## Resources

### Completed Example Project
https://github.com/jscomplete/learning-graphql-and-relay

### Relay Repl
https://relay-compiler-repl.netlify.app/

