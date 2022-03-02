import { useContext } from "react";
import { Child4Wrapper, CounterBox } from "./Components.styled"
import { CounterContext } from "./Parent";

const Child4 = () => {
    const { count } = useContext(CounterContext);

    return (
        <Child4Wrapper>
            <CounterBox>{count}</CounterBox>
        </Child4Wrapper>
    )
};

export default Child4;