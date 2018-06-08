
import React from 'react';
import './style.css';



export default class AddText extends React.Component {


  render() { 
    const {onButtonClick} = this.props
    return (
      <div className='add_text' onClick={onButtonClick} >text</div>
    );
  }
}
