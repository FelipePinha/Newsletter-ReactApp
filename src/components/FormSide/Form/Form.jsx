import { useState } from "react";
import emailjs from "@emailjs/browser";
import * as C from "./Form.styles";

const Form = () => {
    const [email, setEmail] = useState("");
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
            .send("service_ivkegqb", "template_4ib836y", templateParams, "jTR4cvQgc3EThWdIN")
            .then(
                response => {
                    console.log("email enviado", response.status, response.text);
                },
                err => {
                    console.log("erro: " + err);
                }
            );

        setEmail("");
    };

    const handleChangeEmail = e => {
        setEmail(e.target.value);
        setError(false);
    };

    return (
        <C.Form onSubmit={HandleSubmit}>
            <C.FormControl>
                <C.Label htmlFor="email">Email Address</C.Label>
                {error ? <p>Valid email required</p> : ""}
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
