import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import pageInfo from '../pageinfo';
import '../App.css';

class Skills extends Component {
    constructor() {
        super()
        this.state = {
            webDevSkills: pageInfo.webDevSkills,
            langSkills: pageInfo.langSkills,
            proSkills: pageInfo.proSkills
        }
    }
    render() {
      return (
        <div className="skills">
            <div className="skill">
                <h1>Web Developer Skills</h1>
                {this.state.webDevSkills.map((skill, index) =>  
                    <img className="imgskill" src={skill.imgurl} alt={skill.alt} height={skill.height} width={skill.width} />
                )}
                <h1>Languages</h1>
                    {this.state.langSkills.map((skill, index) =>  
                       <div className="langSkills"><img className="imgskill" src={skill.imgurl} alt={skill.alt} height={skill.height} width={skill.width} /> {skill.level}</div>
                    )}                   
                <h1>Professional</h1>
                <h3>{this.state.proSkills.map((skill, index) => skill + ", " )} among others. </h3>
            </div>
            <Button id="cvlink" href={pageInfo.CV} rel="noopener noreferrer" target="_blank" bsStyle="warning">Download my CV!</Button>
        </div>
        )
    }
}
export default Skills;