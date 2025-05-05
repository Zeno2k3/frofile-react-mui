import { styled, SxProps, Theme, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
interface Props {
  text: string;
  rotate: "0deg" | "90deg";
  color?: string;
  styleText?: SxProps<Theme>;
  style?: SxProps<Theme>;
  onClick?: () => void;
}

const LinkCustom = styled("div")<Pick<Props, "rotate">>(({ rotate }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  cursor: "pointer",
  "&:hover .arrow-icon": {
    transform: rotate === "0deg" ? "translateX(20px)" : "rotate(90deg)",
    transition: "transform 0.3s ease",
  },
  height: "30px",
  zIndex: 50,
}));

const LinkComponent: React.FC<Props> = ({
  text,
  color = "#9c27b0",
  rotate,
  styleText,
  style,
  onClick,
}) => {
  return (
    <LinkCustom rotate={rotate} onClick={onClick} sx={style}>
      <Typography sx={{ ...styleText, height: "30px" }}>
        {text}
      </Typography>
      <KeyboardArrowRightIcon
        className="arrow-icon"
        sx={{
          color: color,
          transition: "transform 0.3s ease",
        }}
      />
    </LinkCustom>
  );
};

export default LinkComponent;
