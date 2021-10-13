import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { PreloadedQuery, usePreloadedQuery, graphql } from 'react-relay';
import { QuotesLibrary } from './Components/Quoteslibrary/Quoteslibrary';
import * as AppQuery from './__generated__/AppQuery.graphql';

interface Props {
  initialQueryRef: PreloadedQuery<AppQuery.AppQuery>;
}

function App(props: Props) {
  const data = usePreloadedQuery(
    graphql`
      query AppQuery {
        quotesLibrary {
          ...Quoteslibrary_allquotes
        }
      }
    `,
    props.initialQueryRef
  )

  console.log('App::InitialQueryResponse__', data)

  const quotesLibrary = data.quotesLibrary;

  if (!quotesLibrary) {
    throw new Error("Expected quotesLibrary to be found");
  }

  return (
    <QuotesLibrary quotes={quotesLibrary}/>
  )
};

export default function AppWrapper({ initialQueryRef }: Props) {
  return (
    <ErrorBoundary fallbackRender={({ error }) => <div>{error.message}</div>}>
      <React.Suspense fallback={<div>Loading</div>}>
        <App initialQueryRef={initialQueryRef} />
      </React.Suspense>
    </ErrorBoundary>
  );
}