import { styled } from "styled-components";

export const Form = styled.form`
    width: 80%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const FormControl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        margin-top: 20px;
        color: hsl(4, 100%, 67%);
    }
`;

export const Label = styled.label`
    display: block;
    margin-top: 25px;
    margin-bottom: 10px;
    color: #36384e;
    font-weight: bold;
`;

export const Input = styled.input`
    width: 100%;
    padding: 15px 10px;
    border-radius: 6px;
    border: none;
    outline: none;
    box-shadow: 0 0 0 1px #00000055;
    color: #36384e;
    font-weight: 600;
    background-color: ${props => (props.$isError ? "	#ff625755" : "#fff")};
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 15px 10px;
    border-radius: 6px;
    border: none;
    background-color: #242742;
    color: #fff;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
        background-image: linear-gradient(45deg, #fa3757 25%, #ff6257 75%);
    }
`;
