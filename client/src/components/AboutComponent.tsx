import { Box } from "@mui/material";
import TextComponent from "./ui/TextComponent";

const AboutComponent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
      }}
    >
      <TextComponent text={"Minh Quân.dev"} type="title" />
    </Box>
  );
};

export default AboutComponent;
