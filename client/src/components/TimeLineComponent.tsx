import { Box, Typography } from "@mui/material";
import TextComponent from "./ui/TextComponent";
import theme from "../theme";
import DateBox from "./ui/DateBox";

const DataExperience = [
  {
    title: "Full Stack Developer",
    date: "2023",
    description:
      "Problem solver, well-organized person, loyal employee with high attention to detail. Fan of Boxing, outdoor activities, video games, and coding of course.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "React",
      "Node.js",
      "MongoDB",
      "React",
      "Node.js",
      "MongoDB",
      "React",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    title: "Software Engineer",
    date: "2022 - 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Java", "Spring", "MySQL"],
  },
  {
    title: "Web Designer",
    date: "2022 - 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["C++", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Full Stack Developer",
    date: "2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Software Engineer",
    date: "2022 - 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Java", "Spring", "MySQL"],
  },
  {
    title: "Web Designer",
    date: "2022 - 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["C++", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Web Designer",
    date: "2022 - 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["C++", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Full Stack Developer",
    date: "2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Software Engineer",
    date: "2022 - 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Java", "Spring", "MySQL"],
  },
  {
    title: "Web Designer",
    date: "2022 - 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["C++", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Web Designer",
    date: "2022 - 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["C++", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Full Stack Developer",
    date: "2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Software Engineer",
    date: "2022 - 2023",
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
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Box
        sx={{
          width: "72%",
          height: "50%",
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
          <TextComponent text={"Experience"} type="title" />
          <Typography
            sx={{
              pt: "30px",
              textAlign: "left",
            }}
          >
            Resolving design problems, building smart user interfaces and useful
            interactions, developing rich web applications and seamless web
            experiences
          </Typography>
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
    </Box>
  );
};

export default TimeLineComponent;
