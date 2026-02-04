import React from 'react'

// Import ข้อมูลจาก ProfileData
import ProfileData from '../configurations/data/ProfileData'

// Import Components
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import GallerySection from '../components/GallerySection'
import EducationSection from '../components/EducationSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
    // ดึงข้อมูลจาก ProfileData
    const {
        name,
        title,
        profileImage,
        bio,
        age,
        email,
        skills,
        education,
        gallery,
        socialLinks
    } = ProfileData

    return (
        <>
            {/* Hero Section - ส่ง props: name, title, profileImage, bio */}
            <HeroSection
                name={name}
                title={title}
                profileImage={profileImage}
                bio={bio}
            />

            {/* About Section - ส่ง props: age, email, skills */}
            <AboutSection
                age={age}
                email={email}
                skills={skills}
            />

            {/* Gallery Section - ส่ง props: gallery */}
            <GallerySection gallery={gallery} />

            {/* Education Section - ส่ง props: education */}
            <EducationSection education={education} />


        </>
    )
}

export default Home