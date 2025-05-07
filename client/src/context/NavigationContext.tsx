import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

interface Section {
  id: string;
  title: string;
}

interface NavigationContextType {
  activeId: string;
  isScrolling: boolean;
  sections: Section[];
  navigateTo: (id: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};

interface NavigationProviderProps {
  children: React.ReactNode;
  sections: Section[];
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
  sections,
}) => {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  // Initialize IntersectionObserver to detect active section during manual scrolling
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.6, // section is considered visible when 60% in view
    };

    const newObserver = new IntersectionObserver((entries) => {
      if (isScrolling) return; // Don't update during programmatic scrolling

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id !== activeId) {
            setActiveId(id);
            history.replaceState(null, "", `#${id}`);
          }
        }
      });
    }, observerOptions);

    // Observe all section elements
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        newObserver.observe(element);
      }
    });

    return () => {
      newObserver.disconnect();
    };
  }, [sections, activeId, isScrolling]);

  // Handle URL hash changes and initial load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && !isScrolling) {
        const sectionExists = sections.some((section) => section.id === hash);
        if (sectionExists) {
          navigateTo(hash);
        }
      }
    };

    // Handle direct URL navigation (initial load)
    if (window.location.hash) {
      handleHashChange();
    } else if (sections.length > 0) {
      // If no hash in URL, set to first section
      navigateTo(sections[0].id);
    }

    // Listen for hash changes (when user clicks on anchor links)
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [sections]); // intentionally leave out dependencies for initial setup

  const navigateTo = useCallback(
    (id: string) => {
      if (!id || isScrolling) return;

      setIsScrolling(true);
      setActiveId(id);

      // Use scrollIntoView with smooth behavior
      const sectionElement = document.getElementById(id);
      if (sectionElement) {
        sectionElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // Update URL hash without triggering a page jump
      history.pushState(null, "", `#${id}`);

      // End scroll effect after 800ms to prevent continuous scrolling
      setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    },
    [isScrolling]
  );

  const value = {
    activeId,
    isScrolling,
    sections,
    navigateTo,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
