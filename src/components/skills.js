import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import pageInfo from '../pageinfo';
import store from "../store";
import '../App.css';

class Skills extends Component {
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
        <div className="skills">
            <div className="skill">
                <h1>Web Developer Skills</h1>
                {this.state.pageInfo.webDevSkills.map((skill, index) =>  
                    <img className="imgskill" src={skill.imgurl} key={skill.alt} alt={skill.alt} height={skill.height} width={skill.width} />
                )}
                <h1>Languages</h1>
                    {this.state.pageInfo.langSkills.map((skill, index) =>  
                       <div className="langSkills" key={skill.alt}><img className="imgskill" src={skill.imgurl} alt={skill.alt} height={skill.height} width={skill.width} /> {skill.level}</div>
                    )}                   
                <h1>Professional</h1>
                <h3>{this.state.pageInfo.proSkills.map((skill, index) => skill + ", " )} among others. </h3>
            </div>
            <Button id="cvlink" href={pageInfo.CV} rel="noopener noreferrer" target="_blank" bsStyle="warning">Download my CV!</Button>
        </div>
        )
    }
}
export default Skills;