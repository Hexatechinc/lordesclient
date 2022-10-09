import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloClient, ApolloProvider, gql, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context'
import "@fontsource/inter/variable.css"
import App from './App';
import {cache} from './cache'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';


export const typeDefs = gql`
  extend type Query{
    isSignedIn: Boolean!
  }
`
const httpLink = createHttpLink({
  uri: 'http://localhost:5001/api',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    }
  }
});



const client = new ApolloClient({
  cache: cache,
  link: authLink.concat(httpLink),
  typeDefs,
  connectToDevTools: true
});


// client
//    .query({
//      query: gql`
//        query TestQuery {
//          users {
//            id
//            username
//            email
//          }
//        }
//      `
//    })
//    .then(result => console.log(result));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>
);

// If you want your app to work offline and load faster, you can change 
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
