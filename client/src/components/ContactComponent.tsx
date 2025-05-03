import { Box } from "@mui/material";
import TextComponent from "./ui/TextComponent";
import theme from "../theme";

const ContactComponent = () => {
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
      <TextComponent text={"Contact"} type="title" />
    </Box>
  );
};

export default ContactComponent;
