import Child2 from "./Child2";
import { Child1Wrapper } from "./Components.styled"

const Child1 = ({ count }) => {
    return (
        <Child1Wrapper>
            <Child2 />
            {count}
        </Child1Wrapper>
    )
};

export default Child1;