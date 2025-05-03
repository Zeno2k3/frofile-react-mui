import { Box, Typography } from "@mui/material";
import TextComponent from "./ui/TextComponent";
import Home from "../assets/img-home.svg";
import dot from "../assets/side-dots.png";
import slider from "../assets/purple_romb1.png";
import LinkComponent from "./ui/LinkComponent";

const HomeComponent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh", // chiều cao trình duyệt
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "72%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#000",
        }}
      >
        <Box
          sx={{
            width: "550px",
            alignItems: "left",
          }}
        >
          <TextComponent
            type="title"
            text="Software Engineer Fullstack.dev"
            style={{ p: "0px 0px 30px 0px" }}
          />
          <Typography sx={{ textAlign: "left", width: "500px" }}>
            Resolving design problems, building smart user interfaces and useful
            interactions, developing rich web applications and seamless web
            experiences
          </Typography>
          <LinkComponent text={"About me"} rotate={"90deg"} />
        </Box>
        <Box
          sx={{
            p: "0px 100px 0px 0px",
          }}
        >
          <img
            src={Home}
            alt="Home"
            width={605}
            style={{
              position: "relative", // cần thiết để zIndex hoạt động
              zIndex: 2, // cao hơn ảnh dot
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "50%",
              right: 50,
              transform: "translateY(50%) rotate(90deg)",
              zIndex: 1,
            }}
          >
            <img src={dot} alt="dot" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          left: "35%",
        }}
      >
        <img src={slider} alt="slider" width={200} />
      </Box>
    </Box>
  );
};

export default HomeComponent;
