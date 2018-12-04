import React, { Component } from 'react';
import { Row, Col, Alert } from 'react-bootstrap'
import '../App.css';
import pageInfo from '../pageinfo';

class Portfolio extends Component {
    constructor() {
        super()
        this.state = {
            portfolio: pageInfo.portfolio
        }
    }
    render() {
      return (
        <div className="portfolio">
            <div className="pages">
                <h1>Portfolio</h1>
                <Row>
                    {this.state.portfolio.map((port, index) =>  
                        <Col sm={6}>
                            <Alert bsStyle="warning">
                                <Row>
                                    <Col xsHidden sm={4} >
                                        <a href={port.url} rel="noopener noreferrer" target="_blank"><img className="imgportfolio" src={port.img} alt={port.name} height="120" width="120" /></a>
                                    </Col>
                                    <Col sm={8} >
                                        <a href={port.url} rel="noopener noreferrer" target="_blank"><strong>{port.name}</strong></a>
                                        <p><strong>Technologies:</strong> {port.technologies}</p>
                                        <p><a rel="noopener noreferrer" href={port.github} target="_blank">Github link</a></p>
                                    </Col>
                                </Row>
                            </Alert>
                        </Col>
                    )}                
                </Row>
            </div>
        </div>
        )
    }
}
export default Portfolio;