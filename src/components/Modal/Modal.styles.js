import { styled } from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
`;

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    width: 350px;
    background-color: #fff;
    border-radius: 15px;

    h2 {
        font-size: 2.3rem;
        color: #242742;
        margin: 10px auto;
    }

    p {
        color: #36384e;
        margin: 0 auto;
        font-size: 1.2rem;

        span {
            font-weight: bold;
        }
    }

    button {
        margin: 20px auto 0;
        width: 100%;
        padding: 12px 0;
        border-radius: 10px;
        border: none;
        background-color: #242742;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: #36384e;
        }
    }

    @media (max-width: 768px) {
        width: 100vw;
        height: 100vh;
        border-radius: 0;
    }

    @media (max-width: 500px) {
        button {
            font-size: 1.2rem;
        }
    }
`;
