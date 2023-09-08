import { styled } from "styled-components";

const Section = ({className, ...resProps}) => (
    <section className={className} {...resProps}></section>
);
export const SectionHome = styled(Section)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 80%;
    margin: 50px auto 0;
`;