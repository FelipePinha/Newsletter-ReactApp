import * as C from "./ImageSide.styles";
import Illustration from "../../../public/images/illustration-sign-up-desktop.svg";

const ImageSide = () => {
    return (
        <C.ImageWrapper>
            <img src={Illustration} alt="illustration" />
        </C.ImageWrapper>
    );
};

export default ImageSide;
