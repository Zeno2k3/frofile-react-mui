import { Box } from "@mui/material";
import TextComponent from "./ui/TextComponent";
import theme from "../theme";
import DateBox from "./ui/DateBox";

const DataExperience = [
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
      <TextComponent text={"Experience"} type="title" />
      <Box>
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
  );
};

export default TimeLineComponent;
