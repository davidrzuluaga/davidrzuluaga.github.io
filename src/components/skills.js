import React, { Component } from 'react';
//import { Col } from 'react-bootstrap'
import '../App.css';

class Skills extends Component {
    constructor() {
        super()
        this.state = {
            skills: [
                {imgurl: "./skillsimgs/Ruby_On_Rails_Logo.png", alt:"Ruby on Rails", height:"60", width:"120"},
                {imgurl: "./skillsimgs/JavaScript-logo.png", alt:"JavaScript", height:"60", width:"60"},
                {imgurl: "./skillsimgs/CSS3_and_HTML5_logos_and_wordmarks.svg.png", alt:"CSS3", height:"80", width:"140"},
                {imgurl: "./skillsimgs/React.svg", alt:"React", height:"60", width:"60"},
                {imgurl: "./skillsimgs/Redux.png", alt:"Redux", height:"60", width:"60"},
                {imgurl: "./skillsimgs/bootstrap-stack.png", alt:"bootstrap-stack", height:"60", width:"60"},
                {imgurl: "./skillsimgs/jQuery.png", alt:"jQuery", height:"60", width:"140"},
                {imgurl: "./skillsimgs/Git-Logo.png", alt:"Git-Logo", height:"60", width:"140"}
            ]
        }
    }
    render() {
      return (
        <div className="skills">
            <div className="skill">
                <h1>Web Developer Skills</h1>
                {this.state.skills.map((skill, index) =>  
                    <img className="imgskill" src={require(`${skill.imgurl}`)} alt={skill.alt} height={skill.height} width={skill.width} />
                )}
            </div>
        </div>
        )
    }
}
export default Skills;