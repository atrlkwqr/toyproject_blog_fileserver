import { ApolloClient } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'cross-fetch';


export const makeClient = (token) => {
    const httpLink = createHttpLink({
        uri: 'http://localhost:4000', fetch
      });

    const authLink = setContext((_, { headers }) => {
        // get the authentication token from local storage if it exists
        
        // return the headers to the context so httpLink can read them
        return {
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
          }
        }
      });

      
    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });
    return client;
}


export default makeClient;