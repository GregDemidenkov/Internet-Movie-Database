import React from 'react'

const Footer = () => {
    const date = new Date();
    return(
        <footer>
            <p>© {date.getFullYear()}, Демиденков Григорий </p>
            <p>Github: <a href="https://github.com/GregDemidenkov">https://github.com/GregDemidenkov</a></p>
        </footer>
    )
}

export default Footer;