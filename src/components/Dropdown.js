import React from "react";

function Dropdown(props) {
  const handleChange = (dropdownVal) => {//dropdownVal is passed automatically
    props.changeHandler(dropdownVal.target.value, props.id)//calls change hanlder in Wrapper.js
  };


  const renderUnitType = (unitType) => {
    
    switch(unitType){
      case "length":
        return(
          <select value={props.value} onChange={handleChange} id={props.id}>
            <option value="mm">MM</option>
            <option value="cm">CM</option>
            <option value="m">M</option>
            <option value="km">KM</option>
            <option value="in">Inch</option>
            <option value="ft">Foot</option>
            <option value="mi">Mile</option>
          </select>
        )

      case "mass":
        return(
          <select value={props.value} onChange={handleChange} id={props.id}>
            <option value="mg">MG</option>
            <option value="g">G</option>
            <option value="kg">KG</option>
            <option value="oz">Oz</option>
            <option value="lb">LB</option>
          </select>
        )

      case "temp":
        return(
          <select value={props.value} onChange={handleChange} id={props.id}>
            <option value="C">Celsius</option>
            <option value="F">Farenheit</option>
            <option value="K">Kelvin</option>
          </select>
        )

      case "speed":
        return(
          <select value={props.value} onChange={handleChange} id={props.id}>
            <option value="m/s">Meter/Sec</option>
            <option value="ft/s">Foot/Sec</option>
            <option value="km/h">KM/H</option>
            <option value="m/h">Mile/H</option>
          </select>
        )
    }
  }

  return (
    <div>
      {renderUnitType(props.unitType)}
    </div>
   
  )
}
export default Dropdown;