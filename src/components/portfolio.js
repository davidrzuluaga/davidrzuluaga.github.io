import React, { Component } from 'react';
import { Row, Col, Alert } from 'react-bootstrap'
import '../App.css';

class Portfolio extends Component {
    constructor() {
        super()
        this.state = {
            portfolio: [
                {name: "Timers", img: "./portfolioimg/timers.png", description: "", url: "https://davidrzuluaga.com/timers-react", github: "https://github.com/davidrzuluaga/timers-react", technologies: "React, Redux, Bootstrap, Javascript"},
                {name: "Posts in Order", img: "./portfolioimg/postspopulares.png", description: "", url: "https://davidrzuluaga.com/Post-mas-Votados-React", github: "https://github.com/davidrzuluaga/Post-mas-Votados-React", technologies: "React, Redux, Bootstrap, Javascript"},
                {name: "Guess the Number", img: "./portfolioimg/guessnumber.png", description: "", url: "http://davidrzuluaga.com/picasyfijas", github: "https://github.com/davidrzuluaga/picasyfijas", technologies: "JQuery, Javascript"},
                {name: "Flow Overstack", img: "./portfolioimg/Flow_Overstack.png", description: "", url: "https://floating-falls-81636.herokuapp.com/", github: "https://github.com/davidrzuluaga/copy_flowoverstack", technologies: "Ruby on Rails, Bootstrap"},
                {name: "Expensify", img: "./portfolioimg/Expensify.png", description: "", url: "https://expensify-drz.herokuapp.com/", github: "https://github.com/davidrzuluaga/expensify/", technologies: "Ruby on Rails, Bootstrap, JQuery, Javascript"},
                {name: "Blog", img: "./portfolioimg/blog.png", description: "", url: "https://lit-reef-96585.herokuapp.com/", github: "https://github.com/davidrzuluaga/blog", technologies: "Ruby on Rails, Bootstrap"},
            ]
        }
    }
    render() {
      return (
        <div className="portfolio">
            <div className="pages">
                <h1>Portfolio</h1>
                {this.state.portfolio.map((port, index) =>  
                    <Alert bsStyle="warning">
                        <Row>
                            <Col xsHidden sm={2} >
                                <a href={port.url} rel="noopener noreferrer" target="_blank"><img className="imgskill" src={require(`${port.img}`)} alt=" " height="120" width="120" /></a>
                            </Col>
                            <Col sm={10} >
                                <a href={port.url} rel="noopener noreferrer" target="_blank"><strong>{port.name}</strong></a>
                                <p><strong>Technologies:</strong> {port.technologies}</p>
                                <p><a rel="noopener noreferrer" href={port.github} target="_blank">Github link</a></p>
                            </Col>
                        </Row>
                    </Alert>
                )}                
            </div>
        </div>
        )
    }
}
export default Portfolio;