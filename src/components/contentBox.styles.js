import { styled } from "styled-components";

export const ContentBox = styled.section`
    background-color: #fff;
    width: 85%;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap-reverse;

    @media (max-width: 768px) {
        padding: 0;
        width: 100%;
    }
`;
