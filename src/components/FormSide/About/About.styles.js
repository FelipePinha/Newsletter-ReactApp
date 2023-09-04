import { styled } from "styled-components";

export const AboutContainer = styled.div`
    h1 {
        color: #242742;
        font-size: 2.5rem;
        margin-bottom: 10px;
    }

    p {
        color: #36384e;
        font-size: 1.2rem;
    }
`;

export const List = styled.ul`
    margin-top: 20px;
    list-style: none;

    li {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
    }
`;
