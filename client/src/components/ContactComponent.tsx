import { Box, Button, Typography } from "@mui/material";
import theme from "../theme";
import earthlight from "../assets/image/earthlights1k.jpg"

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
        <img src={earthlight} alt="" style={{
          width: "750px",
        }} />
        <Box
          sx={{
            width: "330px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}>
          <Typography
            sx={{
              textAlign: "left",
            }}>What would you do if you had a software expert available at your fingertips?</Typography>
          <Typography
            sx={{
              textAlign: "left",
            }}>
            Want to start new project? Or just say hey.You can also follow me on {" "}
            <Button
              sx={{
                color: "#f4a949",
                cursor: "pointer",
                p: 0,
                ":hover": {
                  textDecoration: "underline",
                  transition: "all 0.3s ease-in-out",
                }
              }}
            >Instagram</Button>.</Typography>
          <Typography
            sx={{
              textAlign: "left",
              fontWeight: 700,
              fontSize: 32,
              ":hover": {
                color: "#f4a949",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
              }
            }}
          >mquan592003@gmail.com</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactComponent;
