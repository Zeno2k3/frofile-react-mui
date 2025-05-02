import { Box, Button, styled, Typography } from "@mui/material";
import TextComponent from "./ui/TextComponent";
import React from "../assets/fa-brands--react.svg";
import Nodejs from "../assets/grommet-icons--node.svg";
import JS from "../assets/cib--javascript.svg";
import CSS from "../assets/flowbite--css-solid.svg";
import HTML from "../assets/uil--html5.svg";
import Php from "../assets/akar-icons--php-fill.svg";
import Mysql from "../assets/skill-icons--mysql-dark.svg";
import Python from "../assets/famicons--logo-python.svg";
import Fastapi from "../assets/devicon-plain--fastapi.svg";
import Redux from "../assets/skill-icons--redux.svg";
import Figma from "../assets/ion--logo-figma.svg";
import VisualStudio from "../assets/uil--visual-studio.svg";
import Axios from "../assets/simple-icons--axios.svg";
import Express from "../assets/lineicons--expressjs.svg";
import Mongodb from "../assets/mongodb-svgrepo-com.svg";

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
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        flexDirection: "column",
      }}
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
      <TextComponent
        text={"Skill & Experience"}
        type={"title"}
        style={{ lineHeight: 2 }}
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
    </Box>
  );
};

export default SkillComponent;
