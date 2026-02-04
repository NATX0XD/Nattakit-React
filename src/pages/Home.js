import React from 'react'

// Import data from ProfileData
import ProfileData from '../configurations/data/ProfileData'

// Import Components
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import EducationSection from '../components/EducationSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
    // Get data from ProfileData
    const {
        name,
        title,
        profileImage,
        bio,
        personalInfo,
        contact,
        education,
        socialLinks
    } = ProfileData

    return (
        <>
            {/* Hero Section - props: name, title, profileImage, bio */}
            <HeroSection
                name={name}
                title={title}
                profileImage={profileImage}
                bio={bio}
            />

            {/* About Section - props: personalInfo, contact */}
            <AboutSection
                personalInfo={personalInfo}
                contact={contact}
            />

            {/* Education Section - props: education */}
            <EducationSection education={education} />

            {/* Contact Section - props: contact, socialLinks */}
            <ContactSection
                contact={contact}
                socialLinks={socialLinks}
            />
        </>
    )
}

export default Home