import React, { Component } from 'react';
//import { Col } from 'react-bootstrap'
import '../App.css';

class Contact extends Component {
    render() {
      return (
        <div>
            <div className="contact">
                <div className="contactinfo">
                    <h1>Find me here!</h1>
                    <h3><i class="fa fa-envelope" /> david@DavidRZuluaga.com</h3> 
                </div>
            </div>
            <div className="social">
                <h3>
                    <a rel="noopener noreferrer" href="https://linkedin.com/in/davidrzuluaga/" target="_blank"><i class="fa fa-linkedin" /> davidrzuluaga - </a>
                    <a rel="noopener noreferrer" href="https://www.github.com/davidrzuluaga" target="_blank"><i class="fa fa-github" /> davidrzuluaga - </a>
                    <a rel="noopener noreferrer" href="https://www.facebook.com/davidricardozuluaga" target="_blank"><i class="fa fa-facebook"/> davidricardozuluaga - </a>
                    <a rel="noopener noreferrer" href="https://www.twitter.com/davidrzuluaga" target="_blank"><i class="fa fa-twitter" /> davidrzuluaga</a>
                </h3> 
            </div>
        </div>
        )
    }
}
export default Contact;