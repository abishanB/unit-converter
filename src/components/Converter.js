function ConvertUnits(value, initUnit, convertUnit){
    var convert = require('convert-units')
    
    if (initUnit == "km"){//km not included in libary
        value = value* 1000
        initUnit = "m"
    }

    if (convertUnit == "km"){
        return (convert(value).from(initUnit).to("m"))/1000
    }

    let finalValue = convert(value).from(initUnit).to(convertUnit)

  
    return finalValue
    

}



export default ConvertUnits;