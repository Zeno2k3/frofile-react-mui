import React, { useEffect, useRef, useState } from "react";
import theme from "../theme";
import { alpha, Box, Typography } from "@mui/material";
import LinkComponent from "../components/ui/LinkComponent";

interface Section {
  id: string;
  title: string;
  component: React.ReactNode;
}

interface SmoothScrollProps {
  sections: Section[];
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<number>(0); // Vị trí của section hiện tại index
  const [isScrolling, setIsScrolling] = useState<boolean>(false); // Đang trong quá trình scroll
  const containerRef = useRef<HTMLDivElement>(null); // Tham chiếu đến component hiện tại
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  // Xử lý scroll khi người dùng cuộn
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling) return;

      const direction = e.deltaY > 0 ? 1 : -1; // cuộn lên hay cuộn xuống
      const nextSectionIndex = Math.min(
        Math.max(0, activeSection + direction),
        sections.length - 1
      );

      if (nextSectionIndex !== activeSection) {
        scrollToSection(nextSectionIndex);
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
  }, [activeSection, isScrolling, sections.length]);

  // Xử lý sự kiện phím mũi tên
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const nextSection = Math.min(activeSection + 1, sections.length - 1);
        if (nextSection !== activeSection) {
          scrollToSection(nextSection);
        }
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prevSection = Math.max(activeSection - 1, 0);
        if (prevSection !== activeSection) {
          scrollToSection(prevSection);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection, isScrolling, sections.length]);

  // Xử lý cảm ứng trên thiết bị di động
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      // Phát hiện hướng vuốt
      if (Math.abs(diff) > 50) {
        // Ngưỡng để xác định là vuốt chứ không phải chạm
        if (diff > 0) {
          // Vuốt lên
          const nextSection = Math.min(activeSection + 1, sections.length - 1);
          if (nextSection !== activeSection) {
            scrollToSection(nextSection);
          }
        } else {
          // Vuốt xuống
          const prevSection = Math.max(activeSection - 1, 0);
          if (prevSection !== activeSection) {
            scrollToSection(prevSection);
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
  }, [activeSection, isScrolling, sections.length]);

  // Hàm scroll tới section
  const scrollToSection = (index: number) => {
    setIsScrolling(true);
    setActiveSection(index);

    // Sử dụng scrollIntoView với behavior: smooth
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Hết hiệu ứng scroll sau 800ms để tránh scroll liên tục
    setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  };

  // Xử lý click vào navigation
  const handleNavClick = (index: number) => {
    if (isScrolling || index === activeSection) return;
    scrollToSection(index);
  };

  return (
    <div
      className="smooth-scroll-container"
      ref={containerRef}
      style={{ height: "100vh" }}
    >
      {/* Navigation*/}
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
            id={section.id}
            onClick={() => handleNavClick(index)}
            sx={{
              width: "50px",
              height: "60px",
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "center",
              borderRight: 1,
              borderColor: alpha("#fff", 0.5),
              justifyContent: "center",
              cursor: "pointer",
              ":hover .scroll": {
                transition: "transform all 0.3s ease-in-out",
              },
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                textAlign: "center",
              }}
            >{`${index}${index}`}</Typography>
            <Box
              key={section.id}
              className={"scroll"}
              sx={{
                width: "3px",
                height: "60px",
                borderRadius: "100px",
                transition: "all 0.3s ease-in-out",
                backgroundColor: activeSection === index
                  ? theme.palette.primary.main
                  : "transparent",
                position: "absolute",
                right: -1,
              }}
              title={section.title}
            ></Box>
          </Box>
        ))}
      </div>

      {sections.map((section, index) => (
        <div
          key={section.id}
          ref={(el) => {
            if (el) {
              sectionRefs.current[index] = el;
            }
          }}
        >
          {section.component}
        </div>
      ))}
      {activeSection !== 5 ? (
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
            color: alpha(theme.palette.primary.main, 0.5)
          }}
          color={theme.palette.primary.main}
          text={"Scroll Down"}
          rotate={"0deg"}
          onClick={() => {
            setActiveSection(activeSection + 1);
            scrollToSection(activeSection + 1);
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
            color: alpha(theme.palette.primary.main, 0.5)
          }}
          color={theme.palette.primary.main}
          text={"Back To Top"}
          rotate={"0deg"}
          onClick={() => {
            setActiveSection(0);
            scrollToSection(0);
          }}

        />
      )}
    </div>
  );
};

export default SmoothScroll;
