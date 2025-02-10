import React from "react";
import { motion } from "framer-motion";
import { FaUserTie } from "react-icons/fa";
import ProfileImg from '../images/laptop.webp'


const workExperience = [
  {
    title: "Web Developer",
    company: "Faktary E-Solutions",
    dates: "June 2024 - Present",
  },
  {
    title: "Intern",
    company: "Hindustan Times",
    dates: "July 2021 - Oct 2021",
  },
];

const Works = () => {
  const fade = {
    opacity: 1,
    transition: {
      duration: 1.4,
    },
  };

  return (
    <div
      id="works"
      style={{
        background: "#0d0d2b",
        padding: "50px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "50px",
          width: "100%",
        }}
      >
        {/* Left Side - Image */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={fade}
  viewport={{ once: true }}
  drag  // Enables dragging
  dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }} // Limits movement
  dragElastic={0.2} // Adds a smooth elastic effect
  style={{ flex: 1, display: "flex", justifyContent: "center", cursor: "grab" }}
>
  <motion.img
    src={ProfileImg}
    alt="Work Illustration"
    style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
    whileHover={{ scale: 1.1 }} // Slightly enlarges when hovered
    whileTap={{ scale: 0.9 }} // Shrinks slightly when clicked
  />
</motion.div>

<div></div>


        {/* Right Side - Experience */}
        <motion.div
          style={{ flex: 1, textAlign: "left" }}
          initial={{ opacity: 0 }}
          whileInView={fade}
        >
          <div style={{ marginBottom: "20px" }}>
          <p style={{ color: "#fff", fontSize: "28px", fontWeight: "bold", textTransform: "uppercase" }}>
            Work Experiences
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {workExperience.map((job, index) => (
            <div
              key={index}
              style={{
                background: "linear-gradient(135deg, #1f1c47, #2b2b52,rgb(82, 43, 72))",
                borderRadius: "12px",
                padding: "20px",
                color: "white",
                boxShadow: "0px 0px 10px rgba(157, 78, 237, 0.5)",
                border: "2px solid transparent",
                transition: "border 0.3s ease, box-shadow 0.3s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid #9d4edd";
                e.currentTarget.style.boxShadow = "0px 0px 15px rgba(157, 78, 237, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid transparent";
                e.currentTarget.style.boxShadow = "0px 0px 10px rgba(157, 78, 237, 0.5)";
              }}
            >
              <p style={{alignItems:"center", fontSize: "20px", fontWeight: "bold", color: "#00ff99" }}>
                {job.dates}
              </p>
              <div>
                <h3 style={{ display: "flex", alignItems: "center", fontSize: "20px", color: "#9d4edd" }}>
                  <FaUserTie style={{ marginRight: "10px", color: "#9d4edd" }} />
                  {job.title}
                </h3>
                <p style={{ fontSize: "20px", color: "#a8a8a8" }}>{job.company}</p>
              </div>
            </div>
          ))}
        </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Works;
