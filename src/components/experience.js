import React, { Component } from 'react';
import { Button, Row, Col, Alert } from 'react-bootstrap'
import store from "../store";
import '../App.css';

class Experience extends Component {
    constructor() {
        super()
        this.state = {
            pageInfo: {webDevSkills: [""], langSkills: [""], proSkills: [""]}
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
                    <Col sm={10} xsOffset={1}>
                        <Alert bsStyle="success">
                            <h2>Make It Real Camp</h2>
                            <h4>Programming Bootcamp</h4>
                        </Alert>
                    </Col>
                </Row>
            </div>
        </div>
        )
    }
}
export default Experience;