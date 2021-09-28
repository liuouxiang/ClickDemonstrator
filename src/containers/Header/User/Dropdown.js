/*
Copyright 2021 RWTH Aachen University
*/

import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown} from 'reactstrap';
import { } from '@coreui/react';

class _Dropdown extends PureComponent
{
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.account = this.account.bind(this);
  }
  
  logout(event)
  {
    event.preventDefault();
    this.props.onLogout();
  }
  account(event)
  {
    event.preventDefault();
    this.props.onAccount();
  }

  render()
  {
    return (
    
        <UncontrolledDropdown  direction="down">
        <DropdownToggle color="white" outline={false}>
          <img src={this.props.image}  className="img-avatar" alt="" style={{height: "35px"}}/>
          <span className="d-none d-md-inline" >&nbsp;&nbsp;{this.props.name}</span>
        </DropdownToggle>
        <DropdownMenu right style={{ right: 'auto' }}>
          <DropdownItem onClick={this.account}><i className="fa fa-user"/> View Profile</DropdownItem>
          <DropdownItem onClick={this.logout}><i className="fa fa-lock" />Logout</DropdownItem>
        </DropdownMenu>
        </UncontrolledDropdown >
    );
  }
}

const mapStateToProps = (state, props) =>
{
    if (false)
    {
      let profile = state.user.profile;
      if (profile.attributes !== undefined) {
          return {name: profile.firstName + " " + profile.lastName, image: profile.attributes.picture };
      }
        return {name: profile.firstName + " " + profile.lastName, image: ""};
    }
    else
    {
      return {name:"Anonymous", image:""};
    }
}

const mapDispatchToProps = (dispatch, props) =>
{
    return {
      onLogout : () => {dispatch({type:"USER:LOGOUT"});},
      onAccount : () =>{dispatch({type: "USER:ACCOUNT"});}
    };
}

const Dropdown = connect(mapStateToProps, mapDispatchToProps)(_Dropdown)

export {Dropdown};


