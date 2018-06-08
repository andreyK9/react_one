
import React from 'react';
import './style.css';



export default class AddBorder extends React.Component {


  render() { 
    const {onButtonClick} = this.props
    return (
      <div className='add_border' onClick={onButtonClick} />
    );
  }
}
