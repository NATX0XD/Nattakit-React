import React from 'react'

// About Section receives props: personalInfo, contact
const AboutSection = ({ personalInfo, contact }) => {
    return (
        <section id="about" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5 fw-bold">
                    <i className="fa-solid fa-user me-2"></i>
                    About Me
                </h2>

                <div className="row justify-content-center">
                    {/* Personal Info */}
                    <div className="col-md-5 mb-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <h5 className="card-title mb-4">
                                    <i className="fa-solid fa-id-card me-2"></i>
                                    Personal Information
                                </h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <strong>Full Name:</strong> {personalInfo.fullName}
                                    </li>
                                    <li className="mb-2">
                                        <strong>Nickname:</strong> {personalInfo.nickname}
                                    </li>
                                    <li className="mb-2">
                                        <strong>Age:</strong> {personalInfo.age} years old
                                    </li>
                                    <li className="mb-2">
                                        <strong>Date of Birth:</strong> {personalInfo.dateOfBirth}
                                    </li>
                                    <li className="mb-2">
                                        <strong>Nationality:</strong> {personalInfo.nationality}
                                    </li>
                                    <li className="mb-2">
                                        <strong>Religion:</strong> {personalInfo.religion}
                                    </li>
                                    <li className="mb-2">
                                        <strong>Address:</strong> {personalInfo.address}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-5 mb-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <h5 className="card-title mb-4">
                                    <i className="fa-solid fa-address-book me-2"></i>
                                    Contact Information
                                </h5>
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <i className="fa-solid fa-envelope text-dark me-3"></i>
                                        <strong>Email:</strong> {contact.email}
                                    </li>
                                    <li className="mb-3">
                                        <i className="fa-solid fa-phone text-dark me-3"></i>
                                        <strong>Phone:</strong> {contact.phone}
                                    </li>
                                    <li className="mb-3">
                                        <i className="fa-brands fa-line text-dark me-3"></i>
                                        <strong>Line:</strong> {contact.line}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
