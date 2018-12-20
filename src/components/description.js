import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

const Description = (props) => {

      return (
        <div className="description">
            {props.pageInfo.description.map((desc, index) =>  
                <p key={desc}>{desc}</p>
            )}
        </div>
        )
    }

const mapStateToProps = state => {
    return {
        pageInfo: state.pageInfo
    }
}
export default connect(mapStateToProps)(Description);