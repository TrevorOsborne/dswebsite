import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../style/images/dillon-black.png'; 
import Background2 from '../style/images/design.jpg';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'; 
import gql from 'graphql-tag'; // Allows us to write queries inside a component file. Otherwise js doesn't recognize GraphQL queries.
import { Mutation } from "react-apollo";
import React, { useState} from 'react';
import { navigate } from "@reach/router"


/************ CSS Styling ************/

var sectionStyle = {
  width: "100%",
  height: "210px",
  display: "block",
  textAlign: "center",
  paddingRight: "500px",
  paddingLeft: "500px",
  paddingTop: "30px"
};

var sectionStyle2 = {
  width: "45%",
  height: "330px",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${Background})`,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto"
};

var sectionStyle3 = {
  width: "45%",
  height: "350px",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${Background2})`,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto"
};
  
/******* Queries / Mutations ***********/

const Login = gql`
  mutation Log_in($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

/******* Component ***********/

const LogIn = ({token, setToken}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // TODO add CSS styling
    return (
      <div>
        <div>
          <h2>dS</h2>
        </div>
        <section style={ sectionStyle }>
          <Mutation mutation={Login}>
            {(login) => (
              <div>
                <Form
                  onSubmit={async e => {
                    e.preventDefault();
                    const data = await login({ variables: { email: email, password: password } });
                    
                    const login1 = data.data.login
                    if (login1) {
                      setToken(login1)
                      sessionStorage.setItem('jwtToken', login1)
                      navigate('/dashboard/') 
                    }
                  }}
                >
                  <Label><h4>Sign In</h4></Label>
                  <Row form>
                    <Col md={4}>
                      <FormGroup>  
                        <Input type="email" name="email" id="exampleEmail" placeholder="email" onChange={e => setEmail(e.target.value)}/>
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Button type="submit" value="Sign In" outline color="success">Sign In</Button>{' '}
                  </Row>
                </Form>
                <div>
                  {token}
                </div>
              </div>
            )}
          </Mutation>
        </section>
        <div style={ sectionStyle2 } />
        <div style={ sectionStyle3 } />
      </div>
    ); // To put the button back on a row, enclose the button JSX in <Row form></Row> underneath the last </Row> tag.
  };

export default LogIn;