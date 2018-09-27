import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import './App.css';
import { ProductList } from './components/ProductList'

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <ProductList />
      </ApolloProvider>
    );
  }
}

export default App;
