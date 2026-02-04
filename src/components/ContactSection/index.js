import React from 'react'

// Contact Section receives props: contact, socialLinks
const ContactSection = ({ contact, socialLinks }) => {
    return (
        <section id="contact" className="py-5 bg-dark text-white">
            <div className="container text-center">
                <h2 className="mb-5 fw-bold">
                    <i className="fa-solid fa-address-book me-2"></i>
                    Contact Me
                </h2>

                {/* Contact Details */}
                <div className="mb-4">
                    <p className="mb-2">
                        <i className="fa-solid fa-envelope me-2"></i>
                        {contact.email}
                    </p>
                    <p className="mb-2">
                        <i className="fa-solid fa-phone me-2"></i>
                        {contact.phone}
                    </p>
                </div>

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
