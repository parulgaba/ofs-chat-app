/**
 * @flow
 * @relayHash ebac38f7d5ce55045cb51e6fbe18d723
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewChatSubscriptionVariables = {||};
export type NewChatSubscriptionResponse = {|
  +Chat: ?{|
    +node: ?{|
      +id: string,
      +from: string,
      +createdAt: any,
      +content: string,
    |}
  |}
|};
*/


/*
subscription NewChatSubscription {
  Chat(filter: {mutation_in: [CREATED]}) {
    node {
      id
      from
      createdAt
      content
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "Chat",
    "storageKey": "Chat(filter:{\"mutation_in\":[\"CREATED\"]})",
    "args": [
      {
        "kind": "Literal",
        "name": "filter",
        "value": {
          "mutation_in": [
            "CREATED"
          ]
        },
        "type": "ChatSubscriptionFilter"
      }
    ],
    "concreteType": "ChatSubscriptionPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Chat",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "from",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "createdAt",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "content",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "NewChatSubscription",
  "id": null,
  "text": "subscription NewChatSubscription {\n  Chat(filter: {mutation_in: [CREATED]}) {\n    node {\n      id\n      from\n      createdAt\n      content\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewChatSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "NewChatSubscription",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b4d9c1eee98b854d721f5222f4601f87';
module.exports = node;
