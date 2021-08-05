import React from 'react'

const Footer = () => {
    return (
        <nav className=" fixed-bottom bg-dark d-flex justify-content-center flex-md-row">
            <h4 className="text-white">
                
            </h4>
            <span className="text-secondary">
                by <a href="https://github.com/AYYLAM0" target="blank"> Dan Dunne </a> <i className="bi bi-github text-warning"></i>
                | <a href="https://github.com/Nparson88" target="blank"> Nich Parson </a> <i className="bi bi-github text-warning"></i>
                | <a href="https://github.com/tfreed94" target="blank"> Troy Freed Jr. </a> <i className="bi bi-github text-warning"></i>
                | <a href="https://github.com/vickphat" target="blank"> Vick Phat </a> <i className="bi bi-github text-warning"></i>     
            </span>
        </nav>

    )
}

export default Footer;