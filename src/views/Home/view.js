/*
Copyright 2021 RWTH Aachen University
*/

import React, {Component} from 'react';
import {Card, CardBody, CardHeader, CardText, Col, Row, UncontrolledCollapse} from 'reactstrap';


class View extends Component {


    render() {
        return (
            <div className="animated fadeIn">
                <Card>
                    <CardHeader>
                        <h2>AI-based Quality Prediction and Root Cause Analysis using Machine Learning </h2>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            <b>Welcome to the project AI-based Quality Prediction and Root Cause Analysis using Machine Learning.</b>
                            <p>This project is handled by Hong Kong Industrial Artificial Itelligence and Robotics Centre
                                with cooperating with RWTH Aachen. We are going to solve the production quality problems with AI method.
                            <b>The aim of the project is therefore the development of a methodology that compensates for the above-mentioned economic deficits of the implementation of a quality prediction /and an automated root cause analysis with machine learning for the use cases at FLAIR. The novel methodologies are capsuled in a software platform for deployment at potential clients. The quality  control  cockpit presents  all  relevant  KPIs(e.g.,  overall  yield, information on scrap production)and the results of the automated root cause analysis to the user in an interactive fashion.</b></p>
                        </CardText>
                    </CardBody>
                </Card>
                <Row>
                    <Col lg="6">

                        <Card>
                            <CardHeader>
                                <h3>Project Partners</h3>
                            </CardHeader>
                            <CardBody>
                                <ul>
                                    <li><a href="https://www.hkflair.org/"> FLAIR</a></li>
                                    <li><a href="https://www.wzl.rwth-aachen.de/go/id/sijq/"> WZL in Aachen</a></li>                                   
                                </ul>
                            </CardBody>
                        </Card>


                    </Col>
                    <Col lg="6">
                        <Card>
                            <CardHeader>
                                <h3>Show cases</h3>
                            </CardHeader>
                            <CardBody>
                                The show cases analysis can be found on
                                <a href="https://github.com/FLAIRWZL/AI-based-Quality-Prediction-and-Root-Cause-Analysis-using-Machine-Learning">Show cases</a>.
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
                <Card>
                    <CardHeader id="toggleLicence">
                        <u><h4>License</h4></u>
                    </CardHeader>
                    <UncontrolledCollapse toggler="#toggleLicence">
                        <CardBody>
                            <CardText>
                                <p>Copyright 2021 RWTH Aachen University</p>

                                <p>
                                    This software is provided by the WZL of the RWTH Aachen University to HKFLAIR based in Hongkong to be used within the project _AI-based Quality Prediction and Root Cause Analysis using Machine Learning_.
                                    Redistribution and use in source and binary forms, with or without modification, are permitted for the project _AI-based Quality Prediction and Root Cause Analysis using Machine Learning_ provided that the following conditions are met:
                                </p>
                                <p>
                                    <ol>
                                        <li>Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.</li>
                                        <li>Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.</li>
                                        <li>Usage of the source and/or parts of it in other projects or by other parties is not permitted unless an additional license agreement has been signed.</li>
                                    </ol>
                                </p>
                                <p>
                                    <it>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</it>
                                </p>
                                <p>
                                    Included NodeJS modules may enforce their own licenses and terms.
                                </p>
                            </CardText>
                        </CardBody>
                    </UncontrolledCollapse>
                </Card>
            </div>
        );
    }


}

export default View;