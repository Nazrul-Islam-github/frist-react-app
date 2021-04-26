import React from 'react'
// import "./footer.css"

const Footer = () => {
    let footerStyle = {
        // position: "relative",
        // top: "70vh"
        // ,
        // width: "100%"
        // , marginTop: "2px"
    }
    return (
        <div className="bg-dark text-light" style={footerStyle}>
            <p className="text-center">Copyright &copy; all reserved by Nazrul</p>

        </div>
    )
}

export default Footer