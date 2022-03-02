import Child3 from "./Child3";
import { useContext } from "react";
import { Child2Wrapper, CounterBox } from "./Components.styled"
import { CounterContext } from "./Parent";

const Child2 = () => {
    const { count, text, onDecrement } = useContext(CounterContext);

    return (
        <Child2Wrapper>
            <Child3 />
            <CounterBox>{count} - {text}</CounterBox>
            <button onClick={onDecrement}>decrement</button>
        </Child2Wrapper>
    )
};

export default Child2;