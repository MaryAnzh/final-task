import { CloseButton } from "@/components/common/close-button";
import { AppFeature } from "../app-featuare";
import { ModalWindowStyled } from "./styled";

type ModalWindowType = {
    width: string,
    hight: string,
}

export const ModalWindow = (props: ModalWindowType) => {
    const style = {
        maxWidth: `${props.width}px`,
        minHeight: `${props.hight}px`,
    }
    const fn = () => { console.log('Ku-ku') }

    return (

        <ModalWindowStyled style={style}>
            <CloseButton callback={fn} />
            <AppFeature />
        </ModalWindowStyled>
    );
}