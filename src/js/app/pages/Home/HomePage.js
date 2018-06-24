import React, {Component} from 'react';
import styles from './Home-hashed.scss';
import {DrivenField} from '../../components/dataDriven';
// /Users/dmendonca/dev/dafm/data-driven-app/src/js/app/components/dataDriven/index.js
import {components, getComponent} from '../../services/componentMapping';
import dataDrivenConfig from '../../services/dataDriven';

console.log('dataDrivenConfig', dataDrivenConfig);

export default class HomePage extends Component{

    state = {};

    handleFieldValue = (field, value) => {
        this.setState({
            [field]: value
        });
    }

    render(){
        const {firstName, lastName, email, password} = this.state;
        const FieldComponentMapped = getComponent('fieldComponent');
        return (
            <form>
                <h1>HOME PAGE</h1>
                <DrivenField ></DrivenField>
                <FieldComponentMapped id="firstName" name="firstName" label="First Name" placeholder="First Name" value={firstName} onValueChange={this.handleFieldValue}></FieldComponentMapped>
                <FieldComponentMapped id="lastName" name="lastName" label="Last Name" placeholder="Last Name" value={lastName} onValueChange={this.handleFieldValue}></FieldComponentMapped>
                <FieldComponentMapped id="email" name="email" label="E-mail" type="email" placeholder="E-mail" value={email} onValueChange={this.handleFieldValue}></FieldComponentMapped>
                <FieldComponentMapped id="password" name="password" label="Password" type="password" placeholder="Password" value={password} onValueChange={this.handleFieldValue}></FieldComponentMapped>
            </form>
        )
    }
}