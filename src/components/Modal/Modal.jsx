import * as C from "./Modal.styles";
import IconSuccess from "../../assets/icon-success.svg";

const Modal = ({ isOpen, setIsOpen, email, setEmail }) => {
    const closeModal = () => {
        setIsOpen(false);
        setEmail("");
    };

    if (isOpen) {
        return (
            <C.Overlay>
                <C.Modal>
                    <img src={IconSuccess} alt="success image" />
                    <h2>Thanks for Subscribing!</h2>
                    <p>
                        A confirmation email has been sent to <span>{email}</span>. plase open to
                        check the content.
                    </p>
                    <button onClick={closeModal}>Dismiss message</button>
                </C.Modal>
            </C.Overlay>
        );
    }

    return null;
};

export default Modal;
