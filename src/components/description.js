import React, { Component } from 'react';
//import { Col } from 'react-bootstrap'
import '../App.css';
import pageInfo from '../pageinfo';

class Description extends Component {
    constructor() {
        super()
        this.state = {
            description: pageInfo.description
        }
    }
    render() {
      return (
          <div class="description">
            {this.state.description.map((desc, index) =>  
                <p>{desc}</p>
            )}
        </div>
        )
    }
}
export default Description;