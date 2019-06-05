import React from 'react';
import { Query } from "react-apollo";
import gql from 'graphql-tag';


const GET_PROJECTS = gql`
  query {
    projects {
      id
      clientId
      client {
        name
        primaryContact {
          name
        }
      }
      name
    }
  }
`

const GetProjects =  ({ onProjectSelected }) => (
  <Query query={GET_PROJECTS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return 'Error!';

      return (
        <select name="project" onChange={onProjectSelected}>
          {data.projects.map(project => (
            <option key={project.id} value={project.clientId}>
              {project.clientId}
            </option>
          ))}
        </select>
      );
    }}
  </Query>
);

export default GetProjects;