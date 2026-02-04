// ข้อมูลส่วนตัวทั้งหมด - ส่งผ่าน props ไปยัง components ต่างๆ
import Me from "../../images/me/me1.JPG"
import Food1 from "../../images/food/food1.jpeg"
import Food2 from "../../images/food/food2.jpeg"

const ProfileData = {
    // ข้อมูลพื้นฐาน
    name: "Nattakit Jinakul",
    nickname: "Nat",
    title: "Web Developer | Student",
    email: "nattakit@gmail.com",
    age: 25,
    bio: "สวัสดีครับ ผมเป็นนักศึกษาที่สนใจเรื่อง Web Development และกำลังเรียนรู้ React.js",

    // รูปโปรไฟล์
    profileImage: Me,

    // ทักษะ
    skills: [
        { name: "React", level: 80, color: "primary" },
        { name: "JavaScript", level: 75, color: "warning" },
        { name: "HTML/CSS", level: 90, color: "danger" },
        { name: "Bootstrap", level: 85, color: "info" }
    ],

    // การศึกษา
    education: [
        {
            degree: "ปริญญาตรี",
            major: "วิทยาการคอมพิวเตอร์",
            school: "มหาวิทยาลัย...",
            year: "2564 - ปัจจุบัน"
        }
    ],

    // Gallery รูปภาพ
    gallery: [
        { image: Me, title: "Profile", category: "me" },
        { image: Food1, title: "Food 1", category: "food" },
        { image: Food2, title: "Food 2", category: "food" }
    ],

    // Social Links
    socialLinks: [
        { name: "Facebook", icon: "fa-brands fa-facebook", url: "#" },
        { name: "Instagram", icon: "fa-brands fa-instagram", url: "#" },
        { name: "GitHub", icon: "fa-brands fa-github", url: "#" }
    ]
}

export default ProfileData
