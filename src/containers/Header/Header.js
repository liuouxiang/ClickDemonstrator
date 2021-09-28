/*
Copyright 2021 RWTH Aachen University
*/

import React, {Component, Fragment} from 'react';
import {Nav} from 'reactstrap';
import PropTypes from 'prop-types';

import {AppAsideToggler, AppNavbarBrand, AppSidebarToggler} from '@coreui/react';

import Counter from "./Messages/Counter";
import {Dropdown as UserDropdown} from './User/Dropdown'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class Header extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <Fragment>

        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: "FLAIR.png", width: 160, height: 40, alt: 'CoreUI Logo' }}
          minimized={{ src: "FLAIR-small.png", width: 30, height: 25, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
          <h3>Quality Control Cockpit</h3>
        <Nav className="ml-auto" navbar>
            <Counter />
          <UserDropdown/>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        <AppAsideToggler className="d-lg-none" mobile />
      </Fragment>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
