import React from 'react'

import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const ModalWindow = ({
    isOpenModal,
    curentImg,
    setIsOpenModal
}) => {
    return (
        <div className = {isOpenModal ? "modalWindow open" : "modalWindow"}>
            <HighlightOffIcon className = "close" onClick = {() => setIsOpenModal(false)} />
            <img className = "curentImg" src = {curentImg} />
        </div>
    )
}