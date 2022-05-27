import React, { Component } from 'react';
import './Form.scss';
import users from '../../store/users';
import { observer } from 'mobx-react';
type MyState = {
  result: string;
}
@observer
class Form extends Component<{}, MyState>{
    constructor(props:{}){
      super(props);
      this.generate = this.generate.bind(this);
      this.state = {result: 'Тут буде переможець'}
      } 
     generate(){
      const minElement:HTMLInputElement = document.querySelector("#min")!;
      let min:number = Number(minElement.value);
      const maxElement:HTMLInputElement = document.querySelector("#max")!;
      let max:number = Number(maxElement.value);
      let rand:number = (Math.floor(Math.random() * (max - min + 1)) + min);
      let res:string = '';  
      console.log(users.people);
      
      if(users.people.filter((x: string) => x === 'undefined').length > max-1){
        res = `Вже немає кому перемагати`;
        this.setState({...this.state, result: res})
      }else if(users.people[rand] === 'undefined'){
        this.generate();
      }else{
        res = `${rand}. ${users.people[rand]}`;
        users.people[rand] = 'undefined';
        this.setState({...this.state, result: res})
      }
    }
  render(){
    return(
      <div className="form" onSubmit={(e) => {e.preventDefault()}}>
          <form action="#">
            <div className="inputs">
              <div className="input">
              <label htmlFor="min">Введіть мінімальне число</label>
              <input type="number" id='min' defaultValue={1} />
              </div>
              <div className="input">
              <label htmlFor="max">Введіть максимальне число</label>
              <input type="number" id='max' defaultValue={50} />
              </div>
              </div>
              <button onClick={() => {this.generate()}} type="submit" id='randomize'>Генерувати результат</button>
          </form>
          <hr />
          <h4 className="res">{this.state.result}</h4>
      </div>
    )
  }
}
export default Form;
