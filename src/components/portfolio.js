import React, { Component } from 'react';
import { Row, Col, Alert } from 'react-bootstrap'
import '../App.css';
import store from "../store";

class Portfolio extends Component {
    constructor() {
        super()
        this.state = {
            pageInfo: {portfolio: [""]}
        }
        store.subscribe(() => {
            this.setState({
              pageInfo: store.getState().pageInfo
            })
        })
    }
    render() {
      return (
        <div className="portfolio">
            <div className="pages">
                <h1>Portfolio</h1>
                    <Row>
                        {this.state.pageInfo.portfolio.map((portfolio, index) =>  
                            <Col key={portfolio.name} sm={6}>
                                <Alert bsStyle="warning">
                                    <Row>
                                        <Col xsHidden sm={4} >
                                            <img className="imgportfolio" src={portfolio.img} alt={portfolio.name} height="120" width="120" />
                                        </Col>
                                        <Col sm={8} >
                                            <a href={portfolio.url} rel="noopener noreferrer" target="_blank"><strong>{portfolio.name}</strong></a>
                                            <p><strong>Technologies:</strong> {portfolio.technologies}</p>
                                            <p><a rel="noopener noreferrer" href={portfolio.github} target="_blank">Github link</a></p>
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