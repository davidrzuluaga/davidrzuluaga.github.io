import React, { Component } from 'react';
import { Button, Row, Col, Alert } from 'react-bootstrap'
import store from "../store";
import '../App.css';

class Experience extends Component {
    constructor() {
        super()
        this.state = {
            pageInfo: {experience: [""]}
        }
        store.subscribe(() => {
            this.setState({
              pageInfo: store.getState().pageInfo
            })
        })
    }
    render() {
      return (
        <div className="experience">
            <div className="xp"> 
                <h1>Experience</h1>
                <Row>
                    {this.state.pageInfo.experience.map((xp, index) =>  
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
}
export default Experience;