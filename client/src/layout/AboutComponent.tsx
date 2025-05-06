import { Box, Typography } from "@mui/material";
import TextComponent from "../components/ui/TextComponent";
import profile from "../assets/image/T.png";
import cube from "../assets/image/dark_cube2.png";
import dot2 from "../assets/image/purple_romb2.png";
import theme from "../theme";
import code from "../assets/svg/code-blue1.svg";
import code2 from "../assets/svg/code-blue2.svg";
import { motion } from "framer-motion";

const AboutComponent = () => {
  const getTextVariants = {
    hidden: {
      y: -300,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const getImageVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
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
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.main,
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
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
            zIndex: 100,
          }}
        >
          <motion.div
            variants={getTextVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            <TextComponent text="Hi, I'm MQuân" type={"title"} />
            <TextComponent text="Web Developer" type={"title"} />

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
              FontEnd Developer / JavaScript Fan / Wordpress Expert
            </Typography>
          </motion.div>
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
          <motion.div
            variants={getTextVariants}
            initial="hidden"
            whileInView="visible"
          >
            <Typography sx={{ textAlign: "left" }}>
              Professionally connected with the web development industry.
            </Typography>
            <Typography sx={{ textAlign: "left" }}>
              Problem solver, well-organized person, loyal employee with high
              attention to detail. Fan of Boxing, outdoor activities, video
              games, and coding of course.
            </Typography>
            <Typography sx={{ textAlign: "left" }}>
              Interested in the entire frontend spectrum and working on
              ambitious projects with interesting people.
            </Typography>
          </motion.div>
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
      <motion.img
        src={cube}
        alt="cube"
        width={200}
        style={{
          position: "absolute",
          bottom: "121px",
          left: "380px",
        }}
        variants={getImageVariants}
        initial="hidden"
        whileInView="visible"
      />
      <motion.img
        src={dot2}
        alt="dot2"
        width={149}
        style={{
          position: "absolute",
          top: "189px",
          left: "54%",
        }}
        variants={getImageVariants}
        initial="hidden"
        whileInView="visible"
      />
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

export default AboutComponent;
