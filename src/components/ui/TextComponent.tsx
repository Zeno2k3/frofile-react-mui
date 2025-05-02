import { SxProps, Theme, Typography } from "@mui/material";
import React from "react";

interface Props {
  text: string;
  type?: "title" | "text";
  style?: SxProps<Theme>;
}

const TextComponent: React.FC<Props> = ({ text, type = "text", style }) => {
  return (
    <>
      {type == "title" ? (
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 62,
            textAlign: "left",
            transition: "all 0.3s ease-in-out",
            lineHeight: 1,
            "& span": {
              display: "inline-block",
              transition: "transform 0.3s ease, color 0.3s ease",
              "&:hover": {
                color: "#f4a949",
                transform: "translateY(3px)",
              },
            },
            cursor: "pointer",
            ...style,
          }}
        >
          {text.split("").map((char, index) => (
            <span key={index}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </Typography>
      ) : (
        <Typography sx={{ ...style }}>{text}</Typography>
      )}
    </>
  );
};

export default TextComponent;
