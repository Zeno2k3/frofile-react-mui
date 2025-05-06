import React, { useEffect, useRef } from "react";
import theme from "../theme";
import { alpha, Box, Button, Typography } from "@mui/material";
import LinkComponent from "../components/ui/LinkComponent";
import { useNavigation } from "../context/NavigationContext";
import github from "../assets/svg/svgexport-2.svg";

interface Section {
  id: string;
  title: string;
  component: React.ReactNode;
}

interface SmoothScrollProps {
  sections: Section[];
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ sections }) => {
  const { activeId, isScrolling, navigateTo } = useNavigation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Get the current section index from ID
  const getCurrentIndex = () => {
    return sections.findIndex((section) => section.id === activeId);
  };

  // Handle scroll when user scrolls with mouse wheel
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling) return;

      const currentIndex = getCurrentIndex();
      const direction = e.deltaY > 0 ? 1 : -1; // scroll up or down
      const nextIndex = Math.min(
        Math.max(0, currentIndex + direction),
        sections.length - 1
      );

      if (nextIndex !== currentIndex) {
        const nextSectionId = sections[nextIndex].id;
        navigateTo(nextSectionId);
      }
    };

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener("wheel", handleScroll, {
        passive: false,
      });
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("wheel", handleScroll);
      }
    };
  }, [activeId, isScrolling, sections, navigateTo]);

  // Handle arrow key events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      const currentIndex = getCurrentIndex();

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const nextIndex = Math.min(currentIndex + 1, sections.length - 1);
        if (nextIndex !== currentIndex) {
          const nextSectionId = sections[nextIndex].id;
          navigateTo(nextSectionId);
        }
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prevIndex = Math.max(currentIndex - 1, 0);
        if (prevIndex !== currentIndex) {
          const prevSectionId = sections[prevIndex].id;
          navigateTo(prevSectionId);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeId, isScrolling, sections, navigateTo]);

  // Handle touch events for mobile devices
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      const currentIndex = getCurrentIndex();

      // Detect swipe direction
      if (Math.abs(diff) > 50) {
        // Threshold to determine swipe vs tap
        if (diff > 0) {
          // Swipe up
          const nextIndex = Math.min(currentIndex + 1, sections.length - 1);
          if (nextIndex !== currentIndex) {
            const nextSectionId = sections[nextIndex].id;
            navigateTo(nextSectionId);
          }
        } else {
          // Swipe down
          const prevIndex = Math.max(currentIndex - 1, 0);
          if (prevIndex !== currentIndex) {
            const prevSectionId = sections[prevIndex].id;
            navigateTo(prevSectionId);
          }
        }
      }
    };

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener("touchstart", handleTouchStart);
      currentContainer.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("touchstart", handleTouchStart);
        currentContainer.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [activeId, isScrolling, sections, navigateTo]);

  // Handle navigation click
  const handleNavClick = (id: string) => {
    if (isScrolling || id === activeId) return;
    navigateTo(id);
  };

  // Get the current section index for render logic
  const currentIndex = getCurrentIndex();
  const isLastSection = currentIndex === sections.length - 1;

  return (
    <div
      className="smooth-scroll-container"
      ref={containerRef}
      style={{ height: "100vh" }}
    >
      {/* Navigation */}
      <div
        className="navigation"
        style={{
          position: "fixed",
          right: "50px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {sections.map((section, index) => (
          <Box
            key={section.id}
            onClick={() => handleNavClick(section.id)}
            sx={{
              width: "50px",
              height: "60px",
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "center",
              borderRight: 1,
              cursor: "pointer",
              borderColor: alpha("#fff", 0.5),
              justifyContent: "center",
              ":hover .scroll": {
                transition: "transform all 0.3s ease-in-out",
              },
              position: "relative",
            }}
            title={section.title}
          >
            <Typography
              sx={{
                fontSize: "15px",
                textAlign: "center",
              }}
            >{`${index}${index}`}</Typography>
            <Box
              key={`indicator-${section.id}`}
              className={"scroll"}
              sx={{
                width: "3px",
                height: "60px",
                borderRadius: "100px",
                transition: "all 0.3s ease-in-out",
                backgroundColor:
                  activeId === section.id
                    ? theme.palette.primary.main
                    : "transparent",
                position: "absolute",
                right: -1,
              }}
            />
          </Box>
        ))}
      </div>

      {sections.map((section) => (
        <div key={section.id} id={section.id}>
          {section.component}
        </div>
      ))}

      {!isLastSection ? (
        <LinkComponent
          style={{
            position: "fixed",
            right: "10px",
            bottom: "10%",
            zIndex: 100,
            display: "flex",
            rotate: "90deg",
          }}
          styleText={{
            color: alpha(theme.palette.primary.main, 0.5),
          }}
          color={theme.palette.primary.main}
          text={"Scroll Down"}
          rotate={"0deg"}
          onClick={() => {
            const nextIndex = currentIndex + 1;
            if (nextIndex < sections.length) {
              navigateTo(sections[nextIndex].id);
            }
          }}
        />
      ) : (
        <LinkComponent
          style={{
            position: "fixed",
            right: "10px",
            bottom: "10%",
            zIndex: 100,
            display: "flex",
            rotate: "270deg",
            transform: "revert",
          }}
          styleText={{
            color: alpha(theme.palette.primary.main, 0.5),
          }}
          color={theme.palette.primary.main}
          text={"Back To Top"}
          rotate={"0deg"}
          onClick={() => {
            navigateTo(sections[0].id);
          }}
        />
      )}
      <Button
        sx={{
          position: "fixed",
          bottom: 50,
          left: "40px",
          zIndex: 100,
        }}
      >
        <img src={github} alt="icon" style={{ width: 30, height: 30 }} />
      </Button>
    </div>
  );
};

export default SmoothScroll;
