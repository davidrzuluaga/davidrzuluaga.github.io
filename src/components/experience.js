import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';

const XPCard = (xp, index) => {
  xp = xp.xp;
  return (
  <Col sm={6}>
    <Alert key={index} className={'xpcard'}>
      <Row>
        <Col sm={2}>
          <img src={xp.logo} alt={xp.institution} height='60' width='60' />
        </Col>
        <Col sm={10}>
          <h2>
            <a rel='noopener noreferrer' target='_blank' href={xp.link}>
              {xp.title}
            </a>
          </h2>
          <h4>{xp.subtitle}</h4>
          <h4>{xp.institution}</h4>
          <p>{xp.dates}</p>
        </Col>
      </Row>
    </Alert>
  </Col>
)};

const Experience = props => {
  return (
    <div className='experience'>
      <div className='xp'>
        <h1>Experience</h1>
        <h2>Work</h2>
        <Row>
          {props.pageInfo.experience.filter(ed=>ed.area === "work").map((xp, index) => (
            <XPCard xp={xp} index={index} />
          ))}
        </Row>
        <h2>Education</h2>
        <Row>
          {props.pageInfo.experience.filter(ed=>ed.area === "education").map((xp, index) => (
            <XPCard xp={xp} index={index} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Experience;
