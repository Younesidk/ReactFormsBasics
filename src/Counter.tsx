import useCounter from "./useCounter.ts";


function Counter()
{
    const {counter, increment, decrement} = useCounter();

    return (
        <div>
            <button onClick={increment}>
                +
            </button>

            <button onClick={decrement}>
                -
            </button>

            <p>
                Counter: {counter}
            </p>
        </div>
    );
}

export default Counter;