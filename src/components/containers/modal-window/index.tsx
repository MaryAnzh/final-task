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

    return (
        <ModalWindowStyled style={style} />
    );
}