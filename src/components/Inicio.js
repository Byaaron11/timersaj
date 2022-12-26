import React, { Component } from 'react'
import CountDown from '../Countdown';

export default class Inicio extends Component {

    iniciarContador(seconds) {
        CountDown(seconds);
    }

  render() {
    return (
      <div>
        <h3>Iniciar Todos los temporizadores</h3>
        <CountDown seconds={20}/>
        <button className='btn btn-success' onClick={() => this.iniciarContador(20)}>Start</button>
        <hr/>
      </div>
    )
  }
}
