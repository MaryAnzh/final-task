import React, { useState } from 'react';
import { ModalWindow } from "../modal-window";
import { PopUpStyled } from "./styled";

type PopUpType = {
    isOpen: boolean,
    closePopUp: () => void,
}

export const PopUp = (props: PopUpType) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const style = {
        animation: `toShow 0.5s forwards`,
    }

    const onAnimationEnd = () => {
        if (props.isOpen) {
            setIsModalOpen((prev) => prev = true);
        }
    }

    const close = () => {
        props.closePopUp();
    }

    return (
        <PopUpStyled style={style} onAnimationEnd={onAnimationEnd}>
            <ModalWindow
                width='860'
                hight='400'
                isModalOpen={isModalOpen}
                close={close}
                setModal={setIsModalOpen} />
        </PopUpStyled>
    );
}