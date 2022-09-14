import React, {useState} from 'react'

import { ModalWindow } from './ModalWindow';

export const Images = ({images}) => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [curentImg, setCurentImg] = useState("")

    const openModal = (img) => {
        setCurentImg(img)
        setIsOpenModal(true)
    }

    return (
        <div className="images-section">
            <h2>Кадры из фильма:</h2>
            <ModalWindow
                isOpenModal={isOpenModal}
                curentImg = {curentImg}
                setIsOpenModal = {setIsOpenModal}
            />
            <div className="images">
                {
                    images.map( image => (
                        <img key = {image.imageUrl} src = {image.imageUrl} onClick = {() => openModal(image.imageUrl)}/>
                    ))
                }
            </div>
        </div>
    )
}
