import { useState, createContext } from "react";
import { ParentStyled, CounterStyled, CounterBox } from "./Components.styled";
import Child1 from "./Child1";
import { Link } from "react-router-dom";

const initialState = {
    count: 0,
    text: '',
    onDecrement: () => {}
};

export const CounterContext = createContext(initialState)

export const CounterProvider = ({ children, value }) => {
    
    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    )
}

const Parent = () => {
    const [count, setCount] = useState(0);

    return (
        <CounterProvider value={{ count, text: 'hello', onDecrement: () => setCount(count - 1)}}>
            <CounterStyled>
                <ParentStyled>
                    <Child1 />
                    <CounterBox>
                        {count}
                    </CounterBox>
                </ParentStyled>
                <div>
                    {count}
                </div>
                <button onClick={() => setCount(count + 1)}>
                    Add
                </button>

                <Link to={"/"}>Regresar a home</Link>
            </CounterStyled>
        </CounterProvider> 
    )

}

export default Parent;