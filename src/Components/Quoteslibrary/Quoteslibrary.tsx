import React, { useState, useCallback } from 'react';
import { graphql, useFragment } from 'react-relay';
import { debounce } from 'lodash';
import { SearchForm } from '../SearchForm/SearchForm';
import { Quote } from '../Quote/Quote';
import { Quoteslibrary_allquotes$key } from '../Quoteslibrary/__generated__/Quoteslibrary_allquotes.graphql'

interface Props {
  quotes: Quoteslibrary_allquotes$key
}

export const QuotesLibrary = (props: Props) => {

  const [searchTerm, setSearchTerm ] = useState('')

  const search = useCallback((searchTerm: string) => {
    console.log('searchTerm', searchTerm)
    setSearchTerm(searchTerm)
  }, []);

  const data = useFragment(
    graphql`
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
    `,
    props.quotes
  )

  console.log('Quoteslibrary__data::', data);

  const quotes = data.quotesConnection?.edges;

  if (!quotes) {
    return <p>No data </p>
  }

  return (
    <div className="quotes-library">
      <SearchForm searchAction={search}/>
      <div className="quotes-list">
        { quotes.map(({ node }) => {
          return <Quote key={node?.id} quote={node} />
        })}
      </div>

    </div>
  )
}