import { Box, Typography } from "@mui/material";
import TextComponent from "./ui/TextComponent";
import profile from "../assets/image/T.png";
import cube from "../assets/image/dark_cube2.png";
import dot2 from "../assets/image/purple_romb2.png";
import theme from "../theme";

const AboutComponent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.main,
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "72%",
          height: "50%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "transparent",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            width: "570px",
            alignItems: "left",
          }}
        >
          <TextComponent text="Hi, I'm MQuân" type={"title"} />
          <TextComponent text="FullStack Developer" type={"title"} />

          <Typography
            sx={{
              fontWeight: 300,
              textAlign: "left",
              fontSize: 20,
              margin: "20px 0px",
              lineHeight: "24px",
              letterSpacing: "1px",
              opacity: 0.5,
            }}
          >
            FullStack Developer / JavaScript Fan / Wordpress Expert
          </Typography>
        </Box>
        <Box
          sx={{
            width: "600px",
            margin: "0px 100px 0px 0px",
            flexDirection: "column",
            display: "flex",
            gap: 2,
          }}
        >
          <Typography sx={{ textAlign: "left" }}>
            Professionally connected with the web development industry.
          </Typography>
          <Typography sx={{ textAlign: "left" }}>
            Problem solver, well-organized person, loyal employee with high
            attention to detail. Fan of Boxing, outdoor activities, video games,
            and coding of course.
          </Typography>
          <Typography sx={{ textAlign: "left" }}>
            Interested in the entire frontend spectrum and working on ambitious
            projects with interesting people.
          </Typography>
        </Box>
      </Box>
      <img
        src={profile}
        alt="profile"
        width={400}
        style={{
          opacity: 0.1,
          position: "absolute",
          zIndex: 1,
          right: "42%",
        }}
      />
      <img
        src={cube}
        alt="cube"
        width={200}
        style={{
          position: "absolute",
          bottom: "121px",
          left: "380px",
        }}
      />
      <img
        src={dot2}
        alt="dot2"
        width={149}
        style={{
          position: "absolute",
          top: "189px",
          left: "54%",
        }}
      />
    </Box>
  );
};

export default AboutComponent;
