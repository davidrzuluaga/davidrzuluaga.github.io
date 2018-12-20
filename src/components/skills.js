import React from 'react';
import { connect } from 'react-redux';
import { Button} from 'react-bootstrap';
import '../App.css';

const Skills = (props) => {
      return (
        <div className="skills">
            <div className="skill">
                <h1>Web Developer Skills</h1>
                {props.pageInfo.webDevSkills.map((skill, index) =>  
                    <img className="imgskill" src={skill.imgurl} key={skill.alt} alt={skill.alt} height={skill.height} width={skill.width} />
                )}
                <h1>Languages</h1>
                    {props.pageInfo.langSkills.map((skill, index) =>  
                       <div className="langSkills" key={skill.alt}><img className="imgskill" src={skill.imgurl} alt={skill.alt} height={skill.height} width={skill.width} /> {skill.level}</div>
                    )}                   
                <h1>Professional</h1>
                <h3>{props.pageInfo.proSkills.map((skill, index) => skill + ", " )} among others. </h3>
            </div>
            <Button id="cvlink" href={props.pageInfo.CV} rel="noopener noreferrer" target="_blank" bsStyle="warning">Download my CV!</Button>
        </div>
        )
    }
    const mapStateToProps = state => {
        return {
            pageInfo: state.pageInfo
        }
    }
export default connect(mapStateToProps)(Skills);