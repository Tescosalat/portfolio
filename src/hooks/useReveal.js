import { useEffect } from "react";

export const useReveal = (selector = ".reveal") => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    });
    const revealElements = document.querySelectorAll(selector);
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
};
