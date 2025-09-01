import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../components/constants";
import { SectionWrapper } from "../../components/hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import profileImage from "../../assets/Profile/Eshrak.png";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-deep_sky rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-25 h-25 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Hi, I’m Eshrak  — a passionate Full-Stack JavaScript Developer
          specializing in the MERN stack. I focus on building scalable,
          high-performance web applications with a strong backend foundation
          using Node.js, Express.js, and PostgreSQL.
          <br />
          <br />
          My expertise lies in designing RESTful APIs, integrating databases,
          and implementing secure authentication systems. I ensure that every
          application I build is robust, maintainable, and optimized for
          real-world use cases.
          <br />
          <br />
          On the frontend, I create responsive and intuitive interfaces with
          React, Redux, and Tailwind CSS, seamlessly connecting the user
          experience to a powerful backend.
          <br />
          <br />
          I’m actively enhancing my skills through advanced courses like
          Programming Hero’s Level 2 (Next Level Web Development), working
          hands-on with TypeScript, Prisma, GraphQL, MongoDB, and modern backend
          tools. I don’t just learn — I implement and ship real projects.
          <br />
          <br />
          If you’re looking for someone to transform ideas into production-ready
          web applications with a focus on backend excellence and full-stack
          performance, I’m ready to collaborate.
        </motion.p>

        {/* Image Section */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 1)}
          className="w-full flex justify-center"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="max-w-full h-[550px] object-contain -mt-44"
          />
        </motion.div>
      </div>

      <div className="mt-20 flex justify-center items-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
