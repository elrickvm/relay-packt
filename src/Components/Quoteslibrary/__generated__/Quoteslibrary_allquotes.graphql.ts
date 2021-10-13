/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Quoteslibrary_allquotes = {
    readonly quotesConnection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string | null;
                readonly " $fragmentRefs": FragmentRefs<"Quote_quote">;
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": "Quoteslibrary_allquotes";
};
export type Quoteslibrary_allquotes$data = Quoteslibrary_allquotes;
export type Quoteslibrary_allquotes$key = {
    readonly " $data"?: Quoteslibrary_allquotes$data;
    readonly " $fragmentRefs": FragmentRefs<"Quoteslibrary_allquotes">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Quoteslibrary_allquotes",
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Quote_quote"
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
  "type": "QuotesLibrary",
  "abstractKey": null
};
(node as any).hash = '5f99273ec27f70addd16b266bb1cf446';
export default node;
