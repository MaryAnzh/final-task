import { CloseButtonStyled } from "./styled";

type CloseButtonType = {
    callback: () => void,
}

export const CloseButton = (props: CloseButtonType) => {

    return (
        <CloseButtonStyled></CloseButtonStyled>
    );

}