import React, { Component } from 'react';
//import { Col } from 'react-bootstrap'
import store from "../store";
import '../App.css';

class Description extends Component {
    constructor() {
        super()
        this.state = {
            pageInfo: {description: [""]}
        }
        store.subscribe(() => {
          this.setState({
            pageInfo: store.getState().pageInfo
          })
        })
    }
    render() {
      return (
          <div className="description">
            {this.state.pageInfo.description.map((desc, index) =>  
                <p key={desc}>{desc}</p>
            )}
        </div>
        )
    }
}
export default Description;