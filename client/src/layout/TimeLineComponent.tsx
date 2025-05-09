import { Box, Typography } from "@mui/material";
import TextComponent from "../components/ui/TextComponent";
import theme from "../theme";
import DateBox from "../components/ui/DateBox";
import code from "../assets/svg/code-blue1.svg";
import code2 from "../assets/svg/code-blue2.svg";
import { motion } from "framer-motion";

const DataExperience = [
  {
    title: "Full Stack Developer",
    date: "2024 - 2025",
    description:
      "Problem solver, well-organized person, loyal employee with high attention to detail. Fan of Boxing, outdoor activities, video games, and coding of course.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Web ",
    date: "2023 - 2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Java", "Spring", "MySQL"],
  },
  {
    title: "Web Designer",
    date: "2022 - 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["C++", "HTML", "CSS", "JavaScript"],
  },
];

const TimeLineComponent = () => {
  const getTextVariants = {
    hidden: {
      x: -330,
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
      id="timeline"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.main,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={code2}
        width={"900px"}
        alt="code"
        style={{
          position: "absolute",
          top: -450,
          right: -535,
          zIndex: 10,
          rotate: "0deg",
          filter: "blur(5px)",
          opacity: 0.6,
        }}
      />
      <Box
        sx={{
          width: "72%",
          height: "60%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Box
          sx={{
            width: "550px",
          }}
        >
          <motion.div
            variants={getTextVariants}
            initial="hidden"
            whileInView="visible"
          >
            <TextComponent text={"Timeline"} type="title" />
            <Typography
              sx={{
                pt: "30px",
                textAlign: "left",
              }}
            >
              Resolving design problems, building smart user interfaces and
              useful interactions, developing rich web applications and seamless
              web experiences
            </Typography>
          </motion.div>
        </Box>
        <Box
          sx={{
            height: "100%",
            overflowY: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {DataExperience.map((experience, i) => (
            <DateBox
              key={i}
              title={experience.title}
              date={experience.date}
              description={experience.description}
              Tags={experience.tags}
            />
          ))}
        </Box>
      </Box>
      <img
        src={code}
        width={"900px"}
        alt="code"
        style={{
          position: "absolute",
          bottom: -440,
          left: -550,
          zIndex: 10,
          rotate: "180deg",
          filter: "blur(5px)",
          opacity: 0.6,
        }}
      />
    </Box>
  );
};

export default TimeLineComponent;
