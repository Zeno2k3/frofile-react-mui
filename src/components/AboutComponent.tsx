import { Box, Typography } from "@mui/material";

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
      <Typography variant="h3" color="warning">
        Welcome About
      </Typography>
    </Box>
  );
};

export default AboutComponent;
