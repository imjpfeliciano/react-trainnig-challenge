import styled from 'styled-components';

export const CounterStyled = styled.div`
    width: max-content;
    margin: 0 auto;
    font-weight: bold;
    text-align: center;
    vertical-align: baseline;
    position: relative;
`;

export const ParentStyled = styled.div`
    width: 500px;
    height: 500px;
    background-color: blue;
    margin: 2rem auto;
    /* display: flex; */
    color: white;
`;

export const Child1Wrapper = styled.div`
    width: 400px;
    height: 400px;
    background-color: magenta;
`;

export const Child2Wrapper = styled.div`
    width: 300px;
    height: 300px;
    background-color: greenyellow;
`;

export const Child3Wrapper = styled.div`
    width: 200px;
    height: 200px;
    background-color: orange;
`;

export const Child4Wrapper = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
`;

export const CounterBox = styled.h1`
    position: absolute;
    padding-left: 1rem;
`;
