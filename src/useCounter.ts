import {useState} from "react";


function useCounter()
{
    const [counter, setCounter] = useState(0);
    function increment()
    {
        setCounter(prev => prev + 1);
    }

    function decrement()
    {
        setCounter(prev => prev - 1);
    }

    return {
        counter,
        increment,
        decrement
    };
}

export default useCounter;