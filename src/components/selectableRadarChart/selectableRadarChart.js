/*
Copyright 2021 RWTH Aachen University
*/

import MyResponsiveRadar from "../radarChart/radarChart";
import {Col, Row} from "reactstrap";
import React, {Component, Fragment} from 'react';
import CheckBox from "../checkBox/CheckBoxCmp";


class SelectableRadarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {keys: this.props.keys};  }

    render() {
        const indexBy = this.props.indexBy;

        function renderCheckBoxItem(ind, item){
            return (<CheckBox id={2} value={item[ind]} isChecked={true}/>)
        }

        return (
            <Fragment>
                <Row>
                    <Col lg="4">
                        <ul>
                            {this.props.data.map(function (elem) {
                                return renderCheckBoxItem(indexBy, elem);
                            })

                            }
                        </ul>

                    </Col>
                    <Col lg="8">
                        <div style={{height: this.props.height}}>
                            <MyResponsiveRadar data={this.props.data} keys={this.state.keys}
                                               indexBy={this.props.indexBy}></MyResponsiveRadar>
                        </div>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default SelectableRadarChart;