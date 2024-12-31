import React, { Component } from 'react';
import Dropdown from './Dropdown';
import InputBar from './InputBar';
import ConvertUnits from './Converter';

class Wrapper extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
          inputValueL:"1000",    
          inputValueR:"1",
          unitLeftField: "mm",
          unitRightField:"m",
          unitType: "length"
        }
        //bind event handler
        this.updateInputValue= this.updateInputValue.bind(this)
        this.updateUnitField = this.updateUnitField.bind(this)
        this.switchUnitType = this.switchUnitType.bind(this)
    }

    convert(id){//convert units
        if (id == 1){//if left field was changed update right field
            this.setState({
                inputValueR: ConvertUnits(this.state.inputValueL, this.state.unitLeftField, this.state.unitRightField)})
            
        }
        if (id == 2){
            this.setState({
                inputValueL: ConvertUnits(this.state.inputValueR, this.state.unitRightField, this.state.unitLeftField)})
        }
    }

    updateInputValue(inputValue, id){//updates on input field change
        if (id == 1){
            this.setState({
            inputValueL: inputValue}, () => {this.convert(id)})//callback function to convert units
        }
        if (id == 2){
            this.setState({
            inputValueR: inputValue}, () => {this.convert(id)})
        }
    }
    
      
    updateUnitField(unit, id){//set what units user has selected, id identifies either left or right field
        if (id == 1){
            if (this.state.unitRightField == unit){//if both units would be the same, swap them 
                this.setState({
                    inputValueL: this.state.inputValueR,    
                    inputValueR: this.state.inputValueL,
                    unitLeftField: unit,
                    unitRightField: this.state.unitLeftField}, () => {this.convert(id)})
                return;
            }

            //if both units are not same
            this.setState({
                unitLeftField: unit}, () => {this.convert(id)})//callback function to convert units
        }
        if (id == 2){
            if (this.state.unitLeftField == unit){//if both units would be the same, swap them 
                this.setState({
                    inputValueL: this.state.inputValueR,    
                    inputValueR: this.state.inputValueL,
                    unitLeftField: this.state.unitRightField,
                    unitRightField: unit}, () => {this.convert(id)})
                return;
            }

            this.setState({
                unitRightField: unit}, () => {this.convert(id)})//callback function to convert units
        }
    }  
    
    switchUnitType(button){//switch between length, weight etc
        let unitID = button.target.getAttribute('id')

        this.setState({//update type of unit
            unitType: unitID}
        )
        

        switch(unitID){
            //set default values when user selects new unit
            case "length":
                this.setState({
                    inputValueL:"1000",    
                    inputValueR:"1",
                    unitLeftField: "mm",
                    unitRightField:"m"})
                break;

            case "mass":
                this.setState({
                    inputValueL:"1000",    
                    inputValueR:"1",
                    unitLeftField: "g",
                    unitRightField:"kg"})
                break;
            case "temp":
                this.setState({
                    inputValueL:"0",    
                    inputValueR:"32",
                    unitLeftField: "C",
                    unitRightField:"F"})
                break;
            case "speed":
                this.setState({
                    inputValueL:"0",    
                    inputValueR:"0",
                    unitLeftField: "km/h",
                    unitRightField:"m/h"})
                break;
        }
    }

    render() {
        return (
            <div class="wrapper">
                <div class = "unitSelect">
                    <button id="length" class="button-4" type="button" onClick={this.switchUnitType}>Length</button>
                    <button id="mass" class="button-4" type="button" onClick={this.switchUnitType}>Mass</button>
                    <button id= "temp" class="button-4" type="button"  onClick={this.switchUnitType}>Temp</button>
                    <button id= "speed" class="button-4" type="button"  onClick={this.switchUnitType}>Speed</button>
                </div>
                <div class="leftField">
                    <InputBar id={1} inputValue={this.state.inputValueL} changeHandler={this.updateInputValue} />
                    <Dropdown id={1} unitType={this.state.unitType} changeHandler ={this.updateUnitField} value={this.state.unitLeftField}/>
                    
                </div>
                <div  class="rightField">
                    <InputBar id={2} inputValue={this.state.inputValueR} changeHandler={this.updateInputValue} />
                    <Dropdown id={2} unitType={this.state.unitType} changeHandler ={this.updateUnitField} value={this.state.unitRightField}/>
                    
                </div>

            </div>
        )
    }
}

export default Wrapper;