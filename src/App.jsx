import About from "./components/FormSide/About/About";
import Form from "./components/FormSide/Form/Form";
import { FormWrapper } from "./components/FormSide/FormWrapper.styles";
import ImageSide from "./components/ImageSide/ImageSide";
import { Center } from "./components/center.styles";
import { ContentBox } from "./components/contentBox.styles";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
    return (
        <>
            <GlobalStyle />
            <Center>
                <ContentBox>
                    <FormWrapper>
                        <About />
                        <Form />
                    </FormWrapper>
                    <ImageSide />
                </ContentBox>
            </Center>
        </>
    );
}

export default App;
