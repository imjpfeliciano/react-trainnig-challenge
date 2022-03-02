import Child3 from "./Child3";
import { Child2Wrapper } from "./Components.styled"

const Child2 = () => {
    return (
        <Child2Wrapper>
            <Child3 />
        </Child2Wrapper>
    )
};

export default Child2;