import React from 'react';
import { Query } from "react-apollo";
import gql from 'graphql-tag';
import { Table } from 'reactstrap';


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



const GetProjects =  () => (
  <Query query={GET_PROJECTS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return 'Error!';
      let n = 0
      
      const renderTableData = () => {
        return data.projects.map(project => (
          <tbody>
            <tr>
              <th scope="row">{++n}</th>
              <td>{project.id}</td>
              <td>{project.name}</td>
            </tr>
          </tbody>
        ))
      }
    
      return (
        <Table dark striped bordered hover>
          <thread>
            <tr>
              <th>#</th>
            </tr>
          </thread>
          {renderTableData()}
        </Table>
      )
    }}
  </Query>
);

export default GetProjects;