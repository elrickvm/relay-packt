const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
   GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
  GraphQLEnumType
} = require('graphql');

const {
  connectionDefinitions,
  connectionArgs,
  connectionFromArray,
  connectionFromPromisedArray
} = require('graphql-relay');

const QuoteType = new GraphQLObjectType({
  name: 'Quote',
  fields: {
    id: {
      type: GraphQLString,
      resolve: obj => obj._id
    },
    text: { type: GraphQLString },
    author: { type: GraphQLString }
  }
});

const { connectionType: QuotesConnectionType } = connectionDefinitions({
    name: 'Quote',
    nodeType: QuoteType
  });

let connectionArgsWithSearch = connectionArgs;
connectionArgsWithSearch.searchTerm = { type: GraphQLString };

const QuotesLibraryType = new GraphQLObjectType({
  name: 'QuotesLibrary',
  fields: {
    quotesConnection: {
      type: QuotesConnectionType,
      description: 'A list of the quotes in the database',
      args: connectionArgsWithSearch,
      resolve: (_, args, { db }) => {
        let findParams = {};
        if (args.searchTerm) {
          findParams.text = new RegExp(args.searchTerm, 'i');
        }
        return connectionFromPromisedArray(
          db.collection('quotes').find(findParams).toArray(),
          args
        );
      }
    }
  }
});

const quotesLibrary = {};

// There are many other options for structuring our root-level and children resolving objects. We can, for example, define a class with methods that return the objects to be resolved. An empty object on the root level is picked here for simplicity.

const queryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'world'
    },
    quotesLibrary: {
      type: QuotesLibraryType,
      description: 'The Quotes Library',
      resolve: () => quotesLibrary
    }
  }
});

const mySchema = new GraphQLSchema({
  query: queryType
})

module.exports = mySchema;

