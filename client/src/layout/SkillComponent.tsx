import { Box, Button, styled, Typography } from "@mui/material";
import TextComponent from "../components/ui/TextComponent";
import React from "../assets/svg/fa-brands--react.svg";
import Nodejs from "../assets/svg/grommet-icons--node.svg";
import JS from "../assets/svg/cib--javascript.svg";
import CSS from "../assets/svg/flowbite--css-solid.svg";
import HTML from "../assets/svg/uil--html5.svg";
import Php from "../assets/svg/akar-icons--php-fill.svg";
import Mysql from "../assets/svg/skill-icons--mysql-dark.svg";
import Python from "../assets/svg/famicons--logo-python.svg";
import Fastapi from "../assets/svg/devicon-plain--fastapi.svg";
import Redux from "../assets/svg/skill-icons--redux.svg";
import Figma from "../assets/svg/ion--logo-figma.svg";
import VisualStudio from "../assets/svg/uil--visual-studio.svg";
import Axios from "../assets/svg/simple-icons--axios.svg";
import Express from "../assets/svg/lineicons--expressjs.svg";
import Mongodb from "../assets/svg/mongodb-svgrepo-com.svg";
import theme from "../theme";
import code from "../assets/svg/code-blue1.svg";
import code2 from "../assets/svg/code-blue2.svg";
import { motion } from "framer-motion";
const dataSkill = [
  {
    id: 1,
    name: "React",
    component: React,
  },
  {
    id: 2,
    name: "JavaScript",
    component: JS,
  },
  {
    id: 3,
    name: "Html5",
    component: HTML,
  },
  {
    id: 4,
    name: "CSS3",
    component: CSS,
  },
  {
    id: 5,
    name: "PHP",
    component: Php,
  },
  {
    id: 6,
    name: "Node",
    component: Nodejs,
  },
  {
    id: 7,
    name: "Mysql",
    component: Mysql,
  },
  {
    id: 8,
    name: "Python",
    component: Python,
  },
  {
    id: 9,
    name: "FastApi",
    component: Fastapi,
  },
  {
    id: 10,
    name: "Redux Toolkit",
    component: Redux,
  },
  {
    id: 11,
    name: "Figma",
    component: Figma,
  },
  {
    id: 12,
    name: "Visual Studio",
    component: VisualStudio,
  },
  {
    id: 13,
    name: "Axios",
    component: Axios,
  },
  {
    id: 14,
    name: "Express",
    component: Express,
  },
  {
    id: 15,
    name: "Mongodb",
    component: Mongodb,
  },
];

const BoxIcon = styled("div")(() => ({
  flexDirection: "row",
  alignItems: "center",
  margin: "0px 0px 30px 42px",
  textAlign: "center",
}));

const SkillComponent = () => {
  const getTextVariants = {
    hidden: {
      x: 330,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };
  return (
    <Box
      id={"skill"}
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.main,
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={code}
        width={"900px"}
        alt="code"
        style={{
          position: "absolute",
          top: -444,
          left: -550,
          zIndex: 10,
          rotate: "180deg",
          filter: "blur(5px)",
          opacity: 0.6,
        }}
      />
      <motion.div
        variants={getTextVariants}
        initial="hidden"
        whileInView="visible"
      >
        <Typography
          sx={{
            fontSize: 18,
            textTransform: "uppercase",
            fontWeight: 200,
            p: "0px 14px 0px 0px",
            lineHeight: "24px",
            textAlign: "center",
          }}
        >
          A problem is a chance for you to do your best.
        </Typography>
      </motion.div>
      <TextComponent
        text={"Skills & Tech"}
        type={"title"}
        style={{ pb: "20px" }}
      />
      <TextComponent
        text={
          "The main area of expertise is front end development (client side of the web)."
        }
      />
      <TextComponent
        style={{
          maxWidth: "40%",
          textAlign: "center",
          wordWrap: "break-word",
          overflow: "hidden",
          mb: 2,
          lineHeight: 1.6,
        }}
        text={
          "HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts.I have also full-stack developer experience with one of the most popular open source CMS on the web - WordPress"
        }
      />

      <Typography sx={{ margin: " 0px 0px 32px 0px" }}>
        Visit my
        <Button
          sx={{
            color: "#f4a949",
            ":hover": {
              textDecoration: "underline",
            },
          }}
        >
          Linkedin
        </Button>
        for more details.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap", // xuống dòng các khối
          justifyContent: "center",
          maxWidth: "50%",
          margin: "0 auto",
        }}
      >
        {dataSkill.map((skill) => (
          <BoxIcon key={skill.id}>
            <img src={skill.component} />
            <Typography>{skill.name}</Typography>
          </BoxIcon>
        ))}
      </Box>
      <img
        src={code2}
        width={"900px"}
        alt="code"
        style={{
          position: "absolute",
          bottom: -440,
          right: -535,
          zIndex: 10,
          rotate: "0deg",
          filter: "blur(5px)",
          opacity: 0.6,
        }}
      />
    </Box>
  );
};

export default SkillComponent;
