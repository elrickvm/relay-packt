import React from 'react';
import { graphql, useFragment } from 'react-relay';
import { Quote_quote$key } from './__generated__/Quote_quote.graphql'

interface Props {
  quote: Quote_quote$key
}

export const Quote = (props: Props) => {
  const data = useFragment<Quote_quote$key>(
    graphql`
      fragment Quote_quote on Quote {
        text
        author
      }
    `,
    props.quote
  )

  return (
    <blockquote>
      <p>{data?.text}</p>
      <footer>{data?.author}</footer>
    </blockquote>
  )
}