import React from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider, loadQuery } from 'react-relay';
import environment from '../createRelayEnvironment';
import App from './App';
import * as AppQuery from './__generated__/AppQuery.graphql';

const initialQueryRef = loadQuery<AppQuery.AppQuery>(environment, AppQuery.default, {})

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <App initialQueryRef={initialQueryRef}/>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
document.getElementById('root')
);