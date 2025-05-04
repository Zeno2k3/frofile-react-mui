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
  borderRadius: "20px",
  fontSize: "18px",
  fontWeight: 500,
  textAlign: "center",
}));

const DateBox: React.FC<Props> = ({ title, date, description, Tags }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: "20px 20px 30px",
        ":hover": {
          borderRadius: 3.5,
          backgroundColor: alpha("#2dd4bf1a", 0.2),
          transition: "all 0.3s ease-in-out",
          boxShadow: `0 0 0 1px ${alpha("#2dd4bf1a", 0.3)}`,
        },
        cursor: "pointer",
        ":hover .title": {
          color: "#5eead4",
        },
      }}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          fontWeight: 500,
          mr: 10,
          opacity: 0.5,
          fontSize: "22px",
          flexShrink: 0, // Không cho phần tử co lại khi không đủ không gian
        }}
      >
        {date}
      </Typography>
      <Box
        sx={{ width: 550, display: "flex", flexDirection: "column", gap: 1 }}
      >
        <Typography
          className="title"
          sx={{ textAlign: "left", fontWeight: 700, fontSize: "22px" }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            fontWeight: 500,
            fontSize: "16px",
            opacity: 0.5,
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 0.5,
            flexWrap: "wrap",
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
