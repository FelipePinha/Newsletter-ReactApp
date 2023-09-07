import { useState } from "react";

import About from "./components/FormSide/About/About";
import Form from "./components/FormSide/Form/Form";
import ImageSide from "./components/ImageSide/ImageSide";
import Modal from "./components/Modal/Modal";

import { FormWrapper } from "./components/FormSide/FormWrapper.styles";
import { Center } from "./components/center.styles";
import { ContentBox } from "./components/contentBox.styles";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [email, setEmail] = useState("");

    return (
        <>
            <GlobalStyle />
            <Center>
                <ContentBox>
                    <FormWrapper>
                        <About />
                        <Form setModalIsOpen={setModalIsOpen} email={email} setEmail={setEmail} />
                    </FormWrapper>
                    <ImageSide />
                </ContentBox>
            </Center>
            <Modal
                isOpen={modalIsOpen}
                setIsOpen={setModalIsOpen}
                email={email}
                setEmail={setEmail}
            />
        </>
    );
}

export default App;
