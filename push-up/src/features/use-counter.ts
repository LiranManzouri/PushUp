import {useCallback, useState} from "react";

const useCounter = (initialValue: number = 0): [number, () => void, () => void, () => void] => {
    const [count, setCount] = useState<number>(initialValue);

    const increment = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount(prev => prev - 1);
    }, []);

    const reset = useCallback(() => {
        setCount(initialValue);
    }, []);

    return [count, increment, decrement, reset];

};

export default useCounter;