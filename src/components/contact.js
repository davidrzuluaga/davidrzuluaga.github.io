import React, { Component } from 'react';
//import { Col } from 'react-bootstrap'
import '../App.css';
import store from "../store";

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            pageInfo: {social: [""]}
        }
        store.subscribe(() => {
          this.setState({
            pageInfo: store.getState().pageInfo
          })
        })
    }
    render() {
      return (
        <div>
            <div className="contact">
                <div className="contactinfo">
                    <h1>Find me here!</h1>
                    <h3><i className="fa fa-envelope" /> {this.state.pageInfo.email}</h3> 
                </div>
            </div>
            <div className="social">
                <h3>
                    {this.state.pageInfo.social.map((social, index) =>  
                        <a rel="noopener noreferrer" key={social.icon} href={social.link} target="_blank"><i class={social.icon} /> {social.user} - </a>
                    )}
                    <a href={"mailto:"+this.state.pageInfo.email}><i className="fa fa-envelope" /> </a>
                </h3> 
            </div>
        </div>
        )
    }
}
export default Contact;