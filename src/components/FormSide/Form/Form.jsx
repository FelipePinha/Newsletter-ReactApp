import * as C from "./Form.styles";

const Form = () => {
    return (
        <form>
            <C.Label>Email Address</C.Label>
            <C.Input type="email" placeholder="Digite seu email" />
            <C.SubmitButton>Subscribe to monthly newsletter</C.SubmitButton>
        </form>
    );
};

export default Form;
