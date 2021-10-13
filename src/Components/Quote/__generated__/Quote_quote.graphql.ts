/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Quote_quote = {
    readonly text: string | null;
    readonly author: string | null;
    readonly " $refType": "Quote_quote";
};
export type Quote_quote$data = Quote_quote;
export type Quote_quote$key = {
    readonly " $data"?: Quote_quote$data;
    readonly " $fragmentRefs": FragmentRefs<"Quote_quote">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Quote_quote",
  "selections": [
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
  "type": "Quote",
  "abstractKey": null
};
(node as any).hash = 'c44f56e5bd2d550940ef5300eb6b895f';
export default node;
