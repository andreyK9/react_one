
import React from 'react';
import './style.css';
import AddBg from '../AddBg'
import AddBorder from '../AddBorder'
import AddText from '../AddText'



export default class Perfomanse extends React.Component {

  state = {
    redBg: false,
    blackBd: false,
    textValue: false
  }

  render() { 
    const {redBg, blackBd, textValue} = this.state
    const bg = redBg ? 'red_bg ' : ''
    const bd = blackBd ? 'black_bd ' : ''
    return (
      <div className='perfomanse'>
        <div className={'view '+ bg + bd}>{textValue && 'React Рулит !!!'}</div>
        <div className='wrap'>
          <AddBg onButtonClick={this.onBgroundBtnClick.bind(this)} />
          <AddBorder onButtonClick={this.onBorderBtnClick.bind(this)} />
          <AddText onButtonClick={this.onTextBtnClick.bind(this)} />
        </div>
      </div>
    );
  }

  onBgroundBtnClick = () => {
    this.setState({
      redBg: !this.state.redBg
    })
  }

  onBorderBtnClick = () => {
    this.setState({
      blackBd: !this.state.blackBd
    })
  }

  onTextBtnClick = () => {
    this.setState({
      textValue: !this.state.textValue
    })
  }

}
