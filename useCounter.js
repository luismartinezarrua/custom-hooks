import { useState } from "react"

export const useCounter=(initialValue=10)=>{
    const [counter, setCounter] = useState(initialValue);

    const suma=(value=1)=>{setCounter(counter+value);}
    const resta=(value=1)=>{
        if (counter===0) return;
        setCounter(counter-value);}
    const reset=()=>{setCounter(0);}

    return{
        counter: counter,
        suma,
        resta,
        reset,
    }
}