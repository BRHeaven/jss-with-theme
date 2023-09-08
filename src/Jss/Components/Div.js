import { styled } from "styled-components";
const div = ({ ...resProps}) => (
    <div {...resProps}></div>
);
export const DivDefault = styled(div)`
    display: block;
    width: 100%;
`;
export const DivImage = styled(DivDefault)`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const DivInfo = styled(DivDefault)`
    padding: 8px 0;
`;