import * as C from "./About.styles";
import IconList from "../../../assets/icon-list.svg";

const About = () => {
    return (
        <C.AboutContainer>
            <h1>Stay Updated!</h1>
            <p>Join 60.000+ product managers receiving monthly updates on:</p>
            <C.List>
                <li>
                    <img src={IconList} alt="icone do item" />
                    <p>Product discovery and building what matters</p>
                </li>
                <li>
                    <img src={IconList} alt="icone do item" />
                    <p>Measuring to ensure updates are a success</p>
                </li>
                <li>
                    <img src={IconList} alt="icone do item" />
                    <p>And much more</p>
                </li>
            </C.List>
        </C.AboutContainer>
    );
};

export default About;
