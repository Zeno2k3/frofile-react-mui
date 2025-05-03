import theme from "../theme";
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
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <TextComponent text={"Show Project"} type="title" />
    </Box>
  );
};

export default ShowProject;
