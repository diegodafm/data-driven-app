import React, {Component} from 'react';
import styles from './Home-hashed.scss';
import {Teste, FieldComponent} from '../../components/fields';

export default class HomePage extends Component{

    state = {
        name: 'Teste'
    };

    handleFieldValue = (value) => {
        this.setState({
            name: value
        });
    }

    render(){
        const {name: nameValue} = this.state;
        return (
            <div>
                <h1>HOME PAGE</h1>
                <FieldComponent id="1" label="name" placeholder="Input your name" value={nameValue} onValueChange={this.handleFieldValue}></FieldComponent>
            </div>
        )
    }
}