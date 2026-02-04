// Profile Data - All personal information passed via props
import Me from "../../images/me/me1.JPG"

const ProfileData = {
    // Basic Info
    name: "Nattakit Jinakul",
    nickname: "Nat",
    title: "Web Developer | Student",
    bio: "Hello! I'm a passionate student interested in Web Development and currently learning React.js",

    // Profile Image
    profileImage: Me,

    // Personal Details
    personalInfo: {
        fullName: "Mr. Nattakit Jinakul",
        nickname: "Nat",
        age: 25,
        dateOfBirth: "January 1, 2001",
        nationality: "Thai",
        religion: "Buddhism",
        address: "Bangkok, Thailand"
    },

    // Contact Info
    contact: {
        email: "nattakit@gmail.com",
        phone: "+66 123 456 789",
        line: "@nattakit"
    },

    // Education
    education: [
        {
            degree: "Bachelor's Degree",
            major: "Computer Science",
            school: "University Name",
            year: "2021 - Present"
        }
    ],

    // Social Links
    socialLinks: [
        { name: "Facebook", icon: "fa-brands fa-facebook", url: "#" },
        { name: "Instagram", icon: "fa-brands fa-instagram", url: "#" },
        { name: "GitHub", icon: "fa-brands fa-github", url: "#" }
    ]
}

export default ProfileData
