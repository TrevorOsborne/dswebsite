import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from "@reach/router"
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { ApolloLink, concat } from 'apollo-link';
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

const client = new ApolloClient({
  uri: "http://dillon-graphql-test.us-east-1.elasticbeanstalk.com/graphql",
  // headers: {
  //   "Authorization" : "Bearer ${token}" 
  // }
});

// const httpLink = new HttpLink({ uri: 'http://dillon-graphql-test.us-east-1.elasticbeanstalk.com/graphql' });

// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
//   operation.setContext({
//     headers: {
//       authorization: sessionStorage.getItem('jwtToken') || null,
//     }
//   });

//   return forward(operation);
// })

// const client = new ApolloClient({
//   link: concat(authMiddleware, httpLink),
// });


/************Main Function************/

export const App = () => {
  
  const [token, setToken] = useState('');   // Hooks are defined at begginning of app. Its used below.

    // hooks examples:  
    // const login = useMutation(Login)
  
    return ( // The parenthesis is here to hold all the div jsx. It should all be on the same line as the return and parenthesis would not be necessary. If there was no parenthesis in its current form, js would just execute an empty return because there is nothing following it on the same line.

      
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
      
  )  // <LogIn /> is jsx syntax to execute this function inside App function. Its also syntax for calling a function with parameters. This is properly defined in the function definition up above too.
};
 
 
  // Take the react component ansd show it on the screen
 ReactDOM.render( // App below is how you call a function with JSX(HTML)
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.querySelector('#root')
 );
