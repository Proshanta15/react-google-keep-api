import React from 'react';

const Footer = () =>{

    const year = new Date().getFullYear();

    return(
        <>
            <div className="footer">
                <p>Copyright &copy;{year} Google keep Api</p>
            </div>
        </>
    )
}
export default Footer;