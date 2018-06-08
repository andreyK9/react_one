
import React from 'react';
import './style.css';



export default class AddBg extends React.Component {
  render() { 
    const {onButtonClick} = this.props
    return (
      <div className='add_bg' onClick={onButtonClick} />
    );
  }
}
