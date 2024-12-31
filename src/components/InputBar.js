import React from 'react'

function inputBar(props) {
  const handleChange = (inputVal) => {//inputVal is passsed automatically  
    props.changeHandler(inputVal.target.value, props.id)
  };
  return (
    <div>
      <input maxLength={25} type="text" value={props.inputValue} autocomplete="off" onChange={handleChange} id={props.id}/>
    </div>
  )
}

export default inputBar;