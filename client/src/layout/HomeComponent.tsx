import { Box, Typography } from "@mui/material";
import TextComponent from "../components/ui/TextComponent";
import dot from "../assets/image/side-dots.png";
import slider from "../assets/image/purple_romb1.png";
import LinkComponent from "../components/ui/LinkComponent";
import theme from "../theme";
import code from "../assets/svg/code-blue1.svg";
import { useNavigation } from "../context/NavigationContext";
import { motion } from "framer-motion";

const HomeComponent = () => {
  const { navigateTo } = useNavigation();

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

  const getImageVariants = {
    hidden: {
      y: -30,
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
      id="home"
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "72%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: theme.palette.secondary.main,
          zIndex: 100,
        }}
      >
        <Box
          sx={{
            width: "550px",
            alignItems: "left",
          }}
        >
          <motion.div
            variants={getTextVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            <TextComponent
              type="title"
              text="Font-End Software Developer"
              style={{ p: "0px 0px 30px 0px" }}
            />
          </motion.div>

          <motion.div
            variants={getTextVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            <Typography sx={{ textAlign: "left", width: "500px" }}>
              Resolving design problems, building smart user interfaces and
              useful interactions, developing rich web applications and seamless
              web experiences
            </Typography>
            <LinkComponent
              text={"About me"}
              rotate={"90deg"}
              styleText={{
                color: "#9c27b0",
              }}
              onClick={() => navigateTo("about")}
            />
          </motion.div>
        </Box>
        <Box
          sx={{
            p: "0px 100px 0px 0px",
          }}
        >
          <Box
            sx={{
              width: "450px", // Tăng kích thước container
              height: "400px", // Chỉ định chiều cao rõ ràng
              position: "relative", // cần thiết để zIndex hoạt động
              zIndex: 2, // cao hơn ảnh dot
              top: "45px",
              left: "40%",
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "50%",
              right: "5%",
              transform: "translateY(50%) rotate(90deg)",
              zIndex: 1,
            }}
          >
            <img src={dot} alt="dot" />
          </Box>
        </Box>
      </Box>
      <motion.img
        src={slider}
        alt="slider"
        width={200}
        style={{
          position: "absolute",
          bottom: 10,
          left: "35%",
        }}
        variants={getImageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
      />
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

export default HomeComponent;
