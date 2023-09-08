import { styled } from "styled-components";

const text = ({ ...resProps}) => (
    <p {...resProps}></p>
);
export const TextName = styled(text)`
    text-align: center;
    text-transform: capitalize;
    text-shadow: 0 0 0 #d4ad59;
    font-size: 1.4em;
    font-weight: bold;
    letter-spacing: .5px;
`;
export const TextDMY = styled(text)`
    text-align: center;
    font-size: 1.2em;
    font-weight: bolder;
    letter-spacing: 1px;
    margin-top: 5px;
`;