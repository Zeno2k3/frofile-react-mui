import { styled, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface Props {
  text: string;
  color?: string | "#9c27b0";
}

const LinkCustom = styled("button")(() => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
}));

const LinkComponent: React.FC<Props> = ({ text, color }) => {
  return (
    <LinkCustom>
      <Typography sx={{ color: color }}>{text}</Typography>
      <KeyboardArrowRightIcon />
    </LinkCustom>
  );
};

export default LinkComponent;
