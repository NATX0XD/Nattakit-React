import React from 'react'

// รับ props: age, email, skills (array)
const AboutSection = ({ age, email, skills }) => {
    return (
        <section id="about" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5 fw-bold">
                    <i className="fa-solid fa-user me-2"></i>
                    เกี่ยวกับฉัน
                </h2>

                <div className="row justify-content-center">
                    {/* ข้อมูลส่วนตัว */}
                    <div className="col-md-5 mb-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <h5 className="card-title mb-4">ข้อมูลส่วนตัว</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <i className="fa-solid fa-cake-candles text-dark me-3"></i>
                                        <strong>อายุ:</strong> {age} ปี
                                    </li>
                                    <li className="mb-3">
                                        <i className="fa-solid fa-envelope text-dark me-3"></i>
                                        <strong>Email:</strong> {email}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ทักษะ */}
                    <div className="col-md-5 mb-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <h5 className="card-title mb-4">ทักษะ</h5>
                                {skills.map((skill, index) => (
                                    <div key={index} className="mb-3">
                                        <div className="d-flex justify-content-between mb-1">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="progress" style={{ height: '8px' }}>
                                            <div
                                                className={`progress-bar bg-${skill.color}`}
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
