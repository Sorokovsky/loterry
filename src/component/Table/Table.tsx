import React, { Component } from 'react';
import './Table.scss';
import users from '../../store/users';
import Row from '../Form/Row';
import { observer } from 'mobx-react';
interface MyState{
    isOpen:boolean,
}
interface MyProps{}
@observer
class Table extends Component<MyProps, MyState> {
    constructor(props: MyProps){
        super(props);
        this.state = {
           isOpen: true,
        }
        this.toggle = this.toggle.bind(this);
        this.changeUsers = this.changeUsers.bind(this);
    }
    toggle(){
        this.setState({...this.state, isOpen: !this.state.isOpen})
    }
    changeUsers(){
        let us:string[] = [];
        us[0] = 'udefined';
        document.querySelectorAll('.person').forEach((item:any, index:number) => {
            us[index + 1] = item.value;
        });
        users.setPeople(us);
        
    }
    render() {
        return (
        <div className={`users ${this.state.isOpen ? 'open': ""}`}>
            <h2>Таблиця учасників</h2>
            {users.people.map((elem: string, index: number) => {
                if(index > 0){
                    return <Row onChange={() => {this.changeUsers()}} key={index} 
                    card={index} 
                    person={elem} />
                }
            })}
            <button onClick={(e) =>{e.preventDefault(); this.toggle();}} 
            className={`close ${!this.state.isOpen ? 'toopen': ""}`} 
            type='button'>+</button>
        </div>
    )
  }
}
export default Table;