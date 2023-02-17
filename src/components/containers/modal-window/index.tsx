import React, { useState } from 'react';
import { CloseButton } from '@/components/common/close-button';
import { AppFeature } from '../app-feature';
import { ModalWindowStyled } from './styled';

type ModalWindowType = {
    width: string,
    hight: string,
    isModalOpen: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    close: () => void,
}

export const ModalWindow = (props: ModalWindowType) => {

    const style = {
        maxWidth: `${props.width}px`,
        minHeight: `${props.hight}px`,
        transform: `translateY(${props.isModalOpen ? '0%' : '-150%'})`,
    }

    const closeModal = () => {
        props.setModal((prev) => prev = false);
    }

    const onTransitionEnd = () => {
        if (!props.isModalOpen) {
            props.close();
        }
    }

    return (

        <ModalWindowStyled style={style} onTransitionEnd={onTransitionEnd}>
            <CloseButton callback={closeModal} />
            <AppFeature />
        </ModalWindowStyled>
    );
}