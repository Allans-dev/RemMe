import React, { Component } from 'react';
import quickAdd from '../components/quickAdd';

class HomePage extends Component {

  submit (values) {
    console.log(values)
  }

  render(){
    return (
      <quickAdd onSubmit={this.submit} />
    );
  }

}
