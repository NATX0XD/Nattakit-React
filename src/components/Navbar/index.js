import React from 'react'

// รับ props: name
const NavbarIndex = ({ name }) => {

    const navItems = [
        { name: 'Home', href: '#hero', icon: 'fa-solid fa-house' },
        { name: 'About', href: '#about', icon: 'fa-solid fa-user' },
        { name: 'Gallery', href: '#gallery', icon: 'fa-solid fa-images' },
        { name: 'Education', href: '#education', icon: 'fa-solid fa-graduation-cap' },
        { name: 'Contact', href: '#contact', icon: 'fa-solid fa-envelope' }
    ]

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#hero">
                    {name}
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <a className="nav-link" href={item.href}>
                                    <i className={`${item.icon} me-1`}></i>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarIndex