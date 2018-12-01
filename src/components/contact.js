import React, { Component } from 'react';
//import { Col } from 'react-bootstrap'
import '../App.css';

class Contact extends Component {
    render() {
      return (
        <div className="contact">
            <div className="contactinfo">
                <h1>Find me here!</h1>
                <h3><i class="fa fa-envelope" /> david@DavidRZuluaga.com</h3> 
                <a href="https://linkedin.com/in/davidrzuluaga/" target="_blank"><h3><i class="fa fa-linkedin" /> davidrzuluaga</h3></a>
                <a href="https://www.github.com/davidrzuluaga" target="_blank"><h3><i class="fa fa-github" /> davidrzuluaga</h3></a>
                <a href="https://www.facebook.com/davidricardozuluaga" target="_blank"><h3><i class="fa fa-facebook"/> davidricardozuluaga</h3></a>
                <a href="https://www.twitter.com/davidrzuluaga" target="_blank"><h3><i class="fa fa-twitter" /> davidrzuluaga</h3></a>
        
            </div>
        </div>
        )
    }
}
export default Contact;