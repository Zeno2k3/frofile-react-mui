import theme from "../theme";
import LinkComponent from "../components/ui/LinkComponent";
import TextComponent from "../components/ui/TextComponent";
import { Box, Button, Typography } from "@mui/material";

import shrere_lg from "../assets/image/sphere_lg.png";
import shrere_sm from "../assets/image/sphere_sm.png";
import shrere_md from "../assets/image/sphere_md.png";

import code from "../assets/svg/code-blue1.svg";
import code2 from "../assets/svg/code-blue2.svg";

const ShowProject = () => {
  return (
    <Box
      id={"project"}
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
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            width: "570px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}>
          <TextComponent text={"Portfolio & Previous Projects"} type="title" style={{ textAlign: "center" }} />
          <Typography>I have built various different projects to fit different aspects of the client's business.
            If you want to see more examples of my work than the ones showcased in this site, please {" "}
            <Button sx={{ color: "#f4a949", p: 0 }}>contact me</Button>
          </Typography>
          <LinkComponent text="See Project" rotate='0deg' />
        </Box>
      </Box>
      <img src={shrere_lg} alt="shrere_lg" style={{
        position: "absolute",
        width: "170px",
        zIndex: 1,
        top: "330px",
        right: "20%",
        rotate: "20deg",
      }} />
      <img src={shrere_sm} alt="shere_sm" style={{
        position: "absolute",
        width: "105px",
        zIndex: 1,
        bottom: "149px",
        left: "20%",
      }} />
      <img src={shrere_md} alt="shere_md" style={{
        position: "absolute",
        width: "70px",
        zIndex: 1,
        top: "249px",
        left: "30%",
      }} />
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
        }} />
    </Box>
  );
};

export default ShowProject;
