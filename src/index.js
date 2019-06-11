import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from "@reach/router"
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { setContext } from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory'
import React, { useState } from 'react';
import Dashboard from './components/dashboard';
import Projects from './components/projects';
import Features from './components/features';
import Releases from './components/releases';
import Sprints from './components/sprints';
import Tasks from './components/tasks';
import Teams from './components/teams';
import Work from './components/work';
import LogIn from './components/login';


/***********Configuration**********/

// const client = new ApolloClient({
//   uri: "http://dillon-graphql-test.us-east-1.elasticbeanstalk.com/graphql",
// });

const httpLink = createHttpLink({ uri: 'http://dillon-graphql-test.us-east-1.elasticbeanstalk.com/graphql', });
console.log("link", httpLink)

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = sessionStorage.getItem('jwtToken');
  console.log("token", token)
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


/************Main Function************/

export const App = () => {
  
  const [token, setToken] = useState('');   
  
    return (

      <Router>
        <LogIn token={token} setToken={setToken} path="/" />
        <Dashboard path="dashboard" />
        <Projects path="projects" />
        <Features path="features" />
        <Releases path="releases" />
        <Sprints path="sprints" />
        <Tasks path="tasks" />
        <Teams path="teams" />
        <Work path="work" />
      </Router>
      
  )  
};
 
 
// Take the react component ansd show it on the screen
 ReactDOM.render( 
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.querySelector('#root')
 );
