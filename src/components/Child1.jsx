import Child2 from "./Child2";
import { Child1Wrapper } from "./Components.styled"

const Child1 = () => {
    return (
        <Child1Wrapper>
            <Child2 />
        </Child1Wrapper>
    )
};

export default Child1;