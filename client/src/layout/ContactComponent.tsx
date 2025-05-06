import { Box, Button, Typography } from "@mui/material";
import theme from "../theme";
import code from "../assets/svg/code-blue1.svg";
import code2 from "../assets/svg/code-blue2.svg";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "../three/Earth.tsx";
import { motion } from "framer-motion";

const ContactComponent = () => {
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
      id="contact"
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
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          style={{
            width: "950px",
          }}
        >
          <ambientLight intensity={0.3} />
          <Earth rotationSpeed={0.0025} />
          <directionalLight position={[5, 0, 0]} intensity={5} />
          <OrbitControls enableZoom={false} />
        </Canvas>
        <Box
          sx={{
            width: "360px",
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            mr: "60px",
          }}
        >
          <motion.div
            variants={getTextVariants}
            initial="hidden"
            whileInView="visible"
          >
            <Typography
              sx={{
                textAlign: "left",
              }}
            >
              What would you do if you had a software expert available at your
              fingertips?
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
              }}
            >
              Want to start new project? Or just say hey.You can also follow me
              on{" "}
              <Button
                sx={{
                  color: "#f4a949",
                  cursor: "pointer",
                  p: 0,
                  ":hover": {
                    textDecoration: "underline",
                    transition: "all 0.3s ease-in-out",
                  },
                }}
              >
                Instagram
              </Button>
              .
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                fontWeight: 700,
                fontSize: 32,
                ":hover": {
                  color: "#f4a949",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                },
              }}
            >
              mquan592003@gmail.com
            </Typography>
          </motion.div>
        </Box>
      </Box>
      <img
        src={code2}
        width={"900px"}
        alt="code"
        style={{
          position: "absolute",
          bottom: -430,
          right: -550,
          zIndex: 10,
          rotate: "0deg",
          filter: "blur(5px)",
          opacity: 0.6,
        }}
      />
    </Box>
  );
};

export default ContactComponent;
