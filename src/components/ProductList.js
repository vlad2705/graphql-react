import * as React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";

export const ProductList = () => (
  <Query
    query={gql`
      {
        allProducts {
          id
          name
          price
          description
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.allProducts.map(({ id, name, price, description }) => (
        <div key={id}>
          <p>{`${name}: ${price}`}</p>
        </div>
      ));
    }}
  </Query>
);