import React, {FC} from "react";
import useCounter from "./use-counter";

const PushUpTracker: FC = () => {

    const [count, increment, decrement, reset] = useCounter();

    return (
        <div>
            {count}
            <button onClick={() => increment()}>increment</button>
            <button onClick={() => decrement()}>decrement</button>
            <button onClick={() => reset()}>reset</button>
        </div>
    );
}

export default PushUpTracker;