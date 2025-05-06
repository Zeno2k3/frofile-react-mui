import { styled, SxProps, Theme, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigation } from "../../context/NavigationContext";
interface Props {
  text: string;
  rotate: "0deg" | "90deg";
  color?: string;
  styleText?: SxProps<Theme>;
  style?: SxProps<Theme>;
  onClick?: () => void;
  href?: string;
  target?: string;
}

const LinkCustom = styled("a")<Pick<Props, "rotate">>(({ rotate }) => ({
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
  backgroundColor: 'transparent',
}));

const LinkComponent: React.FC<Props> = ({
  text,
  color = "#9c27b0",
  rotate,
  styleText,
  style,
  onClick,
  href,
  target,
}) => {
  const { navigateTo } = useNavigation();

  const handleClick = (e: React.MouseEvent) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const id = href.substring(1);
      navigateTo(id);
    }
    if (onClick) {
      onClick();
    }
  };
  return (
    <LinkCustom rotate={rotate} onClick={handleClick} sx={style}
      href={href}
      target={target}>
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
