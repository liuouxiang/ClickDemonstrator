/*
Copyright 2021 RWTH Aachen University
*/

import React, {Component} from 'react';
import {Button, Card, CardBody, CardGroup, Col, Container, Progress, Row} from 'reactstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class _Login extends Component {
  constructor(props)
  {
    super(props);
    this.init = this.init.bind(this);
    //this.state = {loaded:false}
  }
  componentDidMount()
  {
    this.init();
  }

  init()
  {
    //this.props.init();
    setTimeout(this.props.init, 500); // User Experience Hack
  }

  render_button()
  {
    if (this.props.loaded)
    {
      return (<Button color="primary" className="px-4 btn-block" onClick={this.props.login} >Login</Button>);
    }
    else
    {
      return (<div className="text-center"><Progress animated value={100} className="mb-3" />Loading</div>);
    }
  }
  render() {
    if (this.props.authenticated)
    {
      return (<Redirect to="/"/>);
    }
    else
    {
      return (
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="8">
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <Row>
                        <Col xs="12">
                          <h1>Login</h1>
                          <p className="text-muted" style={{minHeight : "108px"}}>Accounts are managed through an OpenID Provider. Follow the link below to sign in.</p>
                          {this.render_button()}
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                    <CardBody className="text-center">
                      <Row>
                        <Col xs="12">
                        <h2>WZL Metrology OpenID</h2>
                        <p style={{minHeight : "75px"}}>If you want to participate in our online metrology community, please contact Benjamin Montavon.</p>
                        <Button color="primary" className="mt-3" active href="mailto:b.montavon@wzl.rwth-aachen.de"><i className="fa fa-1x fa-envelope"/>&nbsp;E-Mail</Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

const mapDispatchToProps = (dispatch, props) =>
{
  return {
    login : () => {dispatch({type: "USER:LOGIN"});},
    init : () => {dispatch({type: "USER:INIT"});},
  }
}

const mapStateToProps = (state, props) =>
{
  return {authenticated : state.user.authenticated, loaded : state.user.engine !== undefined}
}

const Login = connect(mapStateToProps, mapDispatchToProps)(_Login)
export default Login;
