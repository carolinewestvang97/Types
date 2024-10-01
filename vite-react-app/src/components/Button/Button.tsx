import { useState } from "react";

export function Button(){
    const [count, setCount] = useState(0);

    function clickCount(){
        let increase = 1;

        if(count >= 100){
            increase = 100; 
        } else if (count >= 20){
            increase = 10;
        }
        setCount(count+increase) 
    }

    function buttonColor(){
        if (count == 0){
            return "grey";
        }
        else if (count % 3 == 0 && count % 5 == 0){
            return "blue"
        } else if (count % 3 == 0){
            return "red";
        }
        else if (count % 5 == 0) {
            return "green"
        } else {
            return "grey"
        }
    }

    return (
        <>
        <button style={{backgroundColor: buttonColor()}} onClick={clickCount}>Click me!</button>
        <p>Button clicked {count} times</p>
        </>
    )
}
