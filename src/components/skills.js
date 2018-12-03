import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import '../App.css';

class Skills extends Component {
    constructor() {
        super()
        this.state = {
            skills: [
                {imgurl: "https://s3.us-east-2.amazonaws.com/davidrzuluaga.com/assets/skillsimgs/Ruby_On_Rails_Logo.png", alt:"Ruby on Rails", height:"60", width:"140"},
                {imgurl: "https://s3.us-east-2.amazonaws.com/davidrzuluaga.com/assets/skillsimgs/JavaScript-logo.png", alt:"JavaScript", height:"60", width:"60"},
                {imgurl: "https://s3.us-east-2.amazonaws.com/davidrzuluaga.com/assets/skillsimgs/CSS3_and_HTML5_logos_and_wordmarks.svg.png", alt:"CSS3", height:"80", width:"140"},
                {imgurl: "https://s3.us-east-2.amazonaws.com/davidrzuluaga.com/assets/skillsimgs/React.svg", alt:"React", height:"60", width:"60"},
                {imgurl: "https://s3.us-east-2.amazonaws.com/davidrzuluaga.com/assets/skillsimgs/Redux.png", alt:"Redux", height:"60", width:"60"},
                {imgurl: "https://s3.us-east-2.amazonaws.com/davidrzuluaga.com/assets/skillsimgs/bootstrap-stack.png", alt:"bootstrap-stack", height:"60", width:"60"},
                {imgurl: "https://s3.us-east-2.amazonaws.com/davidrzuluaga.com/assets/skillsimgs/jQuery.png", alt:"jQuery", height:"60", width:"140"},
                {imgurl: "https://s3.us-east-2.amazonaws.com/davidrzuluaga.com/assets/skillsimgs/Git-Logo.png", alt:"Git-Logo", height:"60", width:"140"}
            ]
        }
    }
    render() {
      return (
        <div className="skills">
            <div className="skill">
                <h1>Web Developer Skills</h1>
                {this.state.skills.map((skill, index) =>  
                    <img className="imgskill" src={skill.imgurl} alt={skill.alt} height={skill.height} width={skill.width} />
                )}
                <h1>Lenguages</h1>
                <h3><img className="imgskill" src={"https://s3.us-east-2.amazonaws.com/davidrzuluaga.com/assets/skillsimgs/ColFlag.png"} alt={"ColFlag"} height={60} width={60} /> C1 - <img className="imgskill" src={"https://s3.us-east-2.amazonaws.com/davidrzuluaga.com/assets/skillsimgs/USFlag.png"} alt={"USFlag"} height={60} width={60} /> B2</h3>
                <h1>Professional</h1>
                <h3> Management, Leadership, Service, Project Management, Sales, Mentoring</h3>
            </div>
            <Button id="cvlink" href="https://s3.us-east-2.amazonaws.com/davidrzuluaga.com/CV+David+R+Zuluaga.pdf" rel="noopener noreferrer" target="_blank" bsStyle="warning">Download my CV!</Button>
        </div>
        )
    }
}
export default Skills;