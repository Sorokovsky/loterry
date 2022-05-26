import React, { FunctionComponent, useState } from 'react'
import users from '../../store/users';
import './Form.scss';
const Form:FunctionComponent = () => {
    let [result, setResult] = useState("Тут буде переможець");     
    const generate = () => {
        const minElement:HTMLInputElement = document.querySelector("#min")!;
        let min:number = Number(minElement.value);
        const maxElement:HTMLInputElement = document.querySelector("#max")!;
        let max:number = Number(maxElement.value);
        let rand:number = (Math.floor(Math.random() * (max - min + 1)) + min);
        let res:string = '';        
        if(users.filter(x=> x === 'undefined').length > max){
          res = `Вже немає кому перемагати`;
          setResult(res);
        }else if(users[rand] === 'undefined'){
          generate();
        }else{
          res = `${rand}. ${users[rand]}`;
          users[rand] = 'undefined';
          setResult(res);
        }
        
    }
  return (
    <div className="form" onSubmit={(e) => {e.preventDefault()}}>
        <form action="#">
          <div className="inputs">
            <div className="input">
            <label htmlFor="min">Введіть мінімальне число</label>
            <input type="number" id='min' value={1} />
            </div>
            <div className="input">
            <label htmlFor="max">Введіть максимальне число</label>
            <input type="number" id='max' value={50} />
            </div>
            </div>
            <button  onClick={()=>{generate()}} type="submit" id='randomize'>Генерувати результат</button>
        </form>
        <hr />
        <h4 className="res">{result}</h4>
    </div>
  )
}
export default Form;