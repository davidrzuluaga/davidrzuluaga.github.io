import React from 'react';

const Description = props => {
  return (
    <div className='description'>
      {props.pageInfo.description.map((desc, index) => (
        <p key={desc}>{desc}</p>
      ))}
    </div>
  );
};

export default Description
