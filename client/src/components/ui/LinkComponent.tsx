import { styled, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface Props {
  text: string;
  rotate: "0deg" | "90deg";
  color?: string;
  onChange?: () => void;
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
}));

const LinkComponent: React.FC<Props> = ({
  text,
  color = "#9c27b0",
  rotate,
  onChange,
}) => {
  return (
    <LinkCustom rotate={rotate} onChange={onChange}>
      <Typography sx={{ color: color, height: "30px" }}>{text}</Typography>
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
