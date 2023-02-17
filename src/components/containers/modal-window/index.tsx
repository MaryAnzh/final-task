import { CloseButton } from "@/components/common/close-button";
import { AppFeature } from "../app-featuare";
import { ModalWindowStyled } from "./styled";

type ModalWindowType = {
    width: string,
    hight: string,
    close: () => void,
}

export const ModalWindow = (props: ModalWindowType) => {
    const style = {
        maxWidth: `${props.width}px`,
        minHeight: `${props.hight}px`,
    }
    const close = () => {
        props.close();
    }

    return (

        <ModalWindowStyled style={style}>
            <CloseButton callback={close} />
            <AppFeature />
        </ModalWindowStyled>
    );
}