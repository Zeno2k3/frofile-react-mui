import { Button, Stack, styled, Typography } from "@mui/material";
import theme from "../theme";
import { keyframes } from "@mui/system";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";

const switchAnimation = keyframes`
  0%, 45% { opacity: 1; }
  50%, 95% { opacity: 0; }
  100% { opacity: 1; }
`;
const LogoBox = styled("div")(() => ({
  position: "relative",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    position: "absolute",
    top: 0,
    left: 0,
  },
  "& .logo2": {
    opacity: 0,
    animation: `${switchAnimation} 3s infinite reverse`,
  },
}));
const CustomButton = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#f0f8ff",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#f0f8ff",
    color: "#000",
  },
  fontFamily: theme.typography.fontFamily,
  borderWidth: 2,
  borderColor: "#f0f8ff",
  borderRadius: 6,
  fontSize: 16,
  fontWeight: 600,
  textAlign: "center",
  cursor: "pointer",
  borderStyle: "solid",
  paddingBlock: 12,
  paddingInline: 32,
}));

const HeaderComponent = () => {
  return (
    <>
      <Stack
        sx={{
          top: 0,
          left: 0,
          right: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "transparent",
          p: "44px",
          position: "fixed",
          zIndex: 1000,
        }}
      >
        <Button
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <LogoBox
            sx={{
              width: 34,
              height: 24,
            }}
          >
            <img src={logo1} className="logo1" />
            <img src={logo2} className="logo2" />
          </LogoBox>
          <Typography
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              fontSize: 32,
              letterSpacing: 6, // khoảng cách của chữ
            }}
          >
            DVLPR
          </Typography>
        </Button>
        <CustomButton>Contact</CustomButton>
      </Stack>
    </>
  );
};

export default HeaderComponent;
