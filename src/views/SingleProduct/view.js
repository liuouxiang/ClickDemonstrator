/*
Copyright 2021 RWTH Aachen University
*/

import React, {Component} from 'react';
import {Card, CardBody, CardHeader, CardText, Col, Row} from 'reactstrap';
import SelectableRadarChart from "../../components/selectableRadarChart/selectableRadarChart";
import qualityCharacteristics from "../../assets/data_qualityCharacteristics";
import processParameters from "../../assets/data_processParameters";

class View extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <Card>
                    <CardHeader>
                        <h4>Quality Characteristics</h4>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            <SelectableRadarChart data={qualityCharacteristics} heading="Quality Characteristics" height="300px"
                                                  keys={['value', 'target']}
                                                  indexBy={"qualityCharacteristic"}></SelectableRadarChart>
                        </CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <h4>Process Parameter</h4>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            <SelectableRadarChart data={processParameters} heading="Process Parameters" height="300px"
                                                  keys={['value', 'target']}
                                                  indexBy={"processParameter"}></SelectableRadarChart>
                        </CardText>
                    </CardBody>
                </Card>

                {/*<SelectableRadarChart data={testData} heading="Process Parameter" height="400px" keys={['chardonay', 'carmenere', 'syrah']}
                                      indexBy={"taste"}></SelectableRadarChart>*/}


            </div>

        );
    }
}

export default View;