import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

const Contact = (props) => {
      return (
        <div>
            <div className="contact">
                <div className="contactinfo">
                    <h1>Find me here!</h1>
                    <h3><i className="fa fa-envelope" /> {props.pageInfo.email}</h3> 
                </div>
            </div>
            <div className="social">
                <h3>
                    {props.pageInfo.social.map((social, index) =>  
                        <a rel="noopener noreferrer" key={social.icon} href={social.link} target="_blank"><i class={social.icon} /> {social.user} - </a>
                    )}
                    <a href={"mailto:"+props.pageInfo.email}><i className="fa fa-envelope" /> </a>
                </h3> 
            </div>
        </div>
        )
    }
const mapStateToProps = state => {
    return {
        pageInfo: state.pageInfo
    }
}
export default connect(mapStateToProps)(Contact);