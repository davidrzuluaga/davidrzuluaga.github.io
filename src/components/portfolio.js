import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'react-bootstrap'
import '../App.css';

const Portfolio = (props) => {
      return (
        <div className="portfolio">
            <div className="pages">
                <h1>Portfolio</h1>
                    <Row>
                        {props.pageInfo.portfolio.map((portfolio, index) =>  
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
const mapStateToProps = state => {
    return {
        pageInfo: state.pageInfo
    }
}
export default connect(mapStateToProps)(Portfolio);