import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const LibraryQuery = gql`
  {
    items {
      id
      title
      user {
        email
      }
    }
  }
`;

const LibraryQuery_1 = gql `

  {
    items {
      id
      title
      user {
        email
        fullName
      }
    }
  }
`
export default () => (
  <Query query={LibraryQuery_1}>
    {({ data, loading }) => (
      <div>
        {loading
          ? 'loading...'
          : data.items.map(({ title, id, user }) => (
              <div key={id}>
                <b>{title}</b> {user ? `added by ${user.fullName}` : null}
              </div>
            ))}
      </div>
    )}
  </Query>
);