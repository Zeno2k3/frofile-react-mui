import { Box } from "@mui/material";
import TextComponent from "./ui/TextComponent";

const TimeLineComponent = () => {
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
      <TextComponent text={"Time line"} type="title" />
    </Box>
  );
};

export default TimeLineComponent;
