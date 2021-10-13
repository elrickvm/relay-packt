import {Environment, Network, RecordSource, Store} from 'relay-runtime';

function fetchQuery(
  operation: { text: any; },
  variables: any,
  cacheConfig: any,
  uploadables: any,
) {
  return fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    })
  }).then(response => {
    return response.json()
  });
}


const network = Network.create(fetchQuery);
console.log("Yes it is working", network);
const store = new Store(new RecordSource())

const environment = new Environment({
  network,
  store
});

export default environment;



// export function createRelayEnvironment() {
//   console.log("Running");
//   const endpoint = "/graphql"
//   const network = Network.create(async function fetchQuery(operation, variables) {
//     console.log('SHIt ME')
//       const response = await fetch(endpoint, {
//         method: 'POST',
//         headers: {
//           // Add authentication and other headers here
//           'content-type': 'application/json',
//         },
//         body: JSON.stringify({
//           query: operation.text,
//           variables,
//         }),
//       });

//       console.log(response.json)

//       return await response.json();
//     }
//   );

//   const store = new Store(new RecordSource());

//   return new Environment({
//     network,
//     store,
//   });
// }
