import React from 'react'

// รับ props: gallery (array of { image, title, category })
const GallerySection = ({ gallery }) => {
    return (
        <section id="gallery" className="py-5 bg-white">
            <div className="container">
                <h2 className="text-center mb-5 fw-bold">
                    <i className="fa-solid fa-images me-2"></i>
                    แกลเลอรี่
                </h2>

                <div className="row g-4 justify-content-center">
                    {gallery.map((item, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-3">
                            <div className="card border-0 shadow-sm overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="card-img-top"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body text-center py-2">
                                    <small className="text-muted">{item.title}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default GallerySection
