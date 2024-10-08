import { useEffect, useRef, useState } from "react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef([]);

  const scrollToSection = (sectionId) => {
    const section = sectionRefs.current.find((el) => el && el.id === sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach(
      (section) => section && observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  return { activeSection, sectionRefs, scrollToSection };
};
