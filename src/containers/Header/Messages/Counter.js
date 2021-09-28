/*
Copyright 2021 RWTH Aachen University
*/

import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Badge, NavItem, NavLink} from 'reactstrap';

class _Counter extends PureComponent {

    render() {
        return (
            <NavItem className="d-md-down-none">
                <NavLink href="" onClick={(event) => {
                    event.preventDefault();
                }}><i className="icon-bell"/><Badge pill color="danger">{this.props.count}</Badge></NavLink>
            </NavItem>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {count: 4};
}

const mapDispatchToProps = (dispatch, props) => {
    return {};
}

const Counter = connect(mapStateToProps, mapDispatchToProps)(_Counter)

export default Counter;