import React from 'react'

// รับ props: name
const FooterIndex = ({ name }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-light py-3">
            <div className="container text-center">
                <p className="mb-0">
                    © {currentYear} Copyright by Mr. {name}
                </p>
            </div>
        </footer>
    )
}

export default FooterIndex
