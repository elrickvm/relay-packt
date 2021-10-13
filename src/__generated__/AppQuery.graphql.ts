/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppQueryVariables = {};
export type AppQueryResponse = {
    readonly quotesLibrary: {
        readonly " $fragmentRefs": FragmentRefs<"Quoteslibrary_allquotes">;
    } | null;
};
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};



/*
query AppQuery {
  quotesLibrary {
    ...Quoteslibrary_allquotes
  }
}

fragment Quote_quote on Quote {
  text
  author
}

fragment Quoteslibrary_allquotes on QuotesLibrary {
  quotesConnection(first: 3, searchTerm: "") {
    edges {
      node {
        id
        ...Quote_quote
      }
    }
  }
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "QuotesLibrary",
        "kind": "LinkedField",
        "name": "quotesLibrary",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Quoteslibrary_allquotes"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "QuotesLibrary",
        "kind": "LinkedField",
        "name": "quotesLibrary",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 3
              },
              {
                "kind": "Literal",
                "name": "searchTerm",
                "value": ""
              }
            ],
            "concreteType": "QuoteConnection",
            "kind": "LinkedField",
            "name": "quotesConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "QuoteEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Quote",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "text",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "author",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "quotesConnection(first:3,searchTerm:\"\")"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "23a79b5b27e61e8b35cfacb9e31b837b",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  quotesLibrary {\n    ...Quoteslibrary_allquotes\n  }\n}\n\nfragment Quote_quote on Quote {\n  text\n  author\n}\n\nfragment Quoteslibrary_allquotes on QuotesLibrary {\n  quotesConnection(first: 3, searchTerm: \"\") {\n    edges {\n      node {\n        id\n        ...Quote_quote\n      }\n    }\n  }\n}\n"
  }
};
(node as any).hash = '8cb13aee33b621b7a271964700611ce3';
export default node;
