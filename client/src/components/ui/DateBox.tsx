import { alpha, Box, styled, Typography } from "@mui/material";

interface Props {
  title: string;
  date: string;
  description: string;
  Tags: string[];
}

const TagSkill = styled("div")(() => ({
  backgroundColor: "#2dd4bf1a",
  color: "#5eead4",
  padding: "5px 10px",
  borderRadius: "5px",
  fontSize: "18px",
  fontWeight: 500,
  textAlign: "center",
}));

const DateBox: React.FC<Props> = ({ title, date, description, Tags }) => {
  return (
    <Box
      sx={{
        display: "flex",
        p: "10px 10px 6px 10px",
        ":hover": {
          borderRadius: 3.5,
          backgroundColor: alpha("#2dd4bf1a", 0.2),
          transition: "all 0.3s ease-in-out",
        },
      }}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          fontWeight: 300,
          fontSize: "22px",
        }}
      >
        {date}
      </Typography>
      <Box>
        <Typography
          sx={{ textAlign: "left", fontWeight: 700, fontSize: "22px" }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ textAlign: "left", fontWeight: 300, fontSize: "16px" }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          {Tags.map((tag, i) => (
            <TagSkill key={i}>{tag}</TagSkill>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DateBox;
