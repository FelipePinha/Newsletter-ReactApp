import { styled } from "styled-components";

export const ImageWrapper = styled.div`
    width: 35%;

    img {
        max-width: 100%;
    }

    @media (max-width: 768px) {
        width: 100%;

        img {
            width: 100%;
        }
    }
`;
