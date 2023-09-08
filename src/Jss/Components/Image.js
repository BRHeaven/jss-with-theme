import { styled } from "styled-components";
const image = ({ src, alt, ...resProps }) => (
    <img src={src} alt={alt} {...resProps}/>
);
export const Image = styled(image)`
    display: block;
    width: 100%;
    height: 470px;
    border-bottom: 1px solid #000;
`;