import React, { Component } from 'react';
interface MyProps{
    card: number;
    person: string;
    onChange: Function;
}
interface MyState{}
export default class Row extends Component<MyProps, MyState> {
    constructor(props:MyProps){
        super(props);
    }
    render() {
        return (
            <div className='row'>
                <span className='number'>{this.props.card}</span>
                <input onChange={() => this.props.onChange()} 
                className={'person'} 
                type="text" 
                defaultValue={this.props.person}/>
            </div>
        )
    }
}
