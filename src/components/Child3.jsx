import Child4 from "./Child4";
import { Child3Wrapper } from "./Components.styled"

const Child3 = () => {
    return (
        <Child3Wrapper>
            <Child4 />
        </Child3Wrapper>
    )
};

export default Child3;