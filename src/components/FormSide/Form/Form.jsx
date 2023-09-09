import { useState } from "react";
import emailjs from "@emailjs/browser";
import * as C from "./Form.styles";

const Form = ({ setModalIsOpen, email, setEmail }) => {
    const [error, setError] = useState(false);

    const HandleSubmit = e => {
        e.preventDefault();

        if (!email || !email.includes("@")) {
            setError(true);
            return;
        }

        const templateParams = {
            email: email,
        };

        emailjs
            .send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                response => {
                    console.log("email enviado", response.status, response.text);
                    setModalIsOpen(true);
                },
                err => {
                    console.log("erro: " + err);
                }
            );
    };

    const handleChangeEmail = e => {
        setEmail(e.target.value);
        setError(false);
    };

    return (
        <C.Form onSubmit={HandleSubmit}>
            <C.FormControl>
                <C.Label htmlFor="email">Email Address</C.Label>
                {error ? <p>Valid email required</p> : null}
            </C.FormControl>
            <C.Input
                $isError={error}
                onChange={handleChangeEmail}
                value={email}
                type="text"
                placeholder="Digite seu email"
                name="email"
            />
            <C.SubmitButton>Subscribe to monthly newsletter</C.SubmitButton>
        </C.Form>
    );
};

export default Form;
