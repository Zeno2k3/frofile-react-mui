import TextComponent from "./ui/TextComponent";
import { Box } from "@mui/material";

const ShowProject = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <TextComponent text={"Show Project"} type="title" />
    </Box>
  );
};

export default ShowProject;
