import React,{useState} from "react";
export default function Calculator(){
    const[calculator,setCalculator]=useState({num1:"",num2:""})
   
    const handleNum1 = (e) => {
        setCalculator({
            ...calculator,
            num1: e.target.value
        })
    }

    const handleNum2 = (e) => {
        setCalculator({
            ...calculator,
            num2: e.target.value
        })
    }

   

    const handleSum = (e) => {
        setCalculator({
            ...calculator,
            sum: parseInt(calculator.num1) + parseInt(calculator.num2)
        })
    }

    const handleSub = (e) => {
        setCalculator({
            ...calculator,
            sub: parseInt(calculator.num1) - parseInt(calculator.num2)
        })
    }

    const handleMul = (e) => {
        setCalculator({
            ...calculator,
            mul: parseInt(calculator.num1) * parseInt(calculator.num2)
        })
    }

    const handleDiv = (e) => {
        setCalculator({
            ...calculator,
            div: parseInt(calculator.num1) / parseInt(calculator.num2)
        })
    }

    
    
        return(
            <div>
                <input 
                    placeholder="enter a number"
                    onChange={handleNum1}     
                />
                <br/>
                <input 
                    placeholder="enter a number"
                    onChange={handleNum2}     
                />
                <br/>
                <button
                    onClick={handleSum}
                >
                    ADD
                </button>
                <br/>
                <button
                    onClick={handleSub}
                >
                    SUBTRACT
                </button>
                <br/>
                <button
                    onClick={handleMul}
                >
                    MULTIPLY
                </button>
                <br/>
                <button
                    onClick={handleDiv}
                >
                    DIVIDE
                </button>
                <br/>
                sum is : {calculator.sum}
                <br/>
                difference is : {calculator.sub}
                <br/>
                product is : {calculator.mul}
                <br/>
                quotient is : {calculator.div}
                
                
            </div>
        )
}
