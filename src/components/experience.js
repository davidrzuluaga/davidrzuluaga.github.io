import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'react-bootstrap'
import '../App.css';

const Experience = (props) => {
      return (
        <div className="experience">
            <div className="xp"> 
                <h1>Experience</h1>
                <Row>
                    {props.pageInfo.experience.map((xp, index) =>  
                        <Col sm={6} >
                            <Alert className={"xpcard"}>
                                <Row>
                                        <img src={xp.logo} alt={xp.institution} height="60" width="60"/>
                                    <Col sm={10} >
                                        <h2><a rel="noopener noreferrer" target="_blank" href={xp.link}>{xp.title}</a></h2>
                                        <h4>{xp.subtitle}</h4>
                                        <h4>{xp.institution}</h4>
                                        <p>{xp.dates}</p>
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
}/*
const mapDispatchToProps = dispatch => {
    return {

    }
}*/

export default connect(mapStateToProps)(Experience);