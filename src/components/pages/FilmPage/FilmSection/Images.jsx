import React, {useState} from 'react'

import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const Images = ({images}) => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [curentImg, setCurentImg] = useState("")

    const openModal = (img) => {
        setCurentImg(img)
        setIsOpenModal(true)
    }

    return (
        <div className="images-section">
            <h2>Кадры из фильма:</h2>
            <div className = {isOpenModal ? "modalWindow open" : "modalWindow"}>
                <HighlightOffIcon className = "close" onClick = {() => setIsOpenModal(false)} />
                <img className = "curentImg" src = {curentImg} />
            </div>
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

export default Images