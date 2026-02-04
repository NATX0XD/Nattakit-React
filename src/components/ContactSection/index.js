import React from 'react'

// รับ props: email, socialLinks (array of { name, icon, url })
const ContactSection = ({ email, socialLinks }) => {
    return (
        <section id="contact" className="py-5 bg-dark text-white">
            <div className="container text-center">
                <h2 className="mb-5 fw-bold">
                    <i className="fa-solid fa-address-book me-2"></i>
                    ติดต่อ
                </h2>

                {/* Email */}
                <p className="lead mb-4">
                    <i className="fa-solid fa-envelope me-2"></i>
                    {email}
                </p>

                {/* Social Links */}
                <div className="d-flex justify-content-center gap-4">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            className="text-white fs-2"
                            title={link.name}
                        >
                            <i className={link.icon}></i>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ContactSection
