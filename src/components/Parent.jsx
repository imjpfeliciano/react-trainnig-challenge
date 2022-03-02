import { useState } from "react";
import { ParentStyled, CounterStyled } from "./Components.styled";
import Child1 from "./Child1";

const Parent = () => {
    const [count, setCount] = useState(0);

    return (
        <CounterStyled>
            <ParentStyled>
                <Child1 />
                {count}
            </ParentStyled>
            <div>
                {count}
            </div>
            <button onClick={() => setCount(count + 1)}>
                Add
            </button>
        </CounterStyled>
        
    )

}

export default Parent;