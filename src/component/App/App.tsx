import React, {Component} from 'react';
import Form from '../Form/Form';
import Table from '../Table/Table';
import './App.scss';

class App extends Component{
  render(){
    return (
      <>
         <Table />
         <Form />
      </>
     )
  }
}
export default App;