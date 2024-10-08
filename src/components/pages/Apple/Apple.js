"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { useReveal } from "@/hooks/useReveal";

export default function Apple() {
  useReveal();

  return (
    <div className="activiter-container side-padding">
      <div>
        <h1 className="big-h1 center-text apple-h reveal">Apple</h1>
        <div className="horizontal max-width-large sub-section-smaller-gap"></div>
      </div>
      <div className="max-width-medium apple-text">
        <h1 className="center-text reveal">Front Page</h1>
        <p className="center-text reveal">
          The front page features a navbar that offers intuitive navigation,
          reflecting Apple's minimalist design. The main layout effectively
          organizes content, enhancing readability and guiding users through the
          information. At the bottom, a carousel is adding an interactive
          element with smooth transitions and animations.
        </p>
      </div>
      <div className="vertica-center">
        <div className="screenshot-container-a apple-image">
          <Image
            className="not-draggable reveal"
            src="/screenshot-a-1.png"
            fill={true}
            alt="screenshot apple"
          />
        </div>
      </div>
      <div className="max-width-medium apple-text">
        <h1 className="center-text reveal">Navigation</h1>
        <p className="center-text reveal">
          The navigation system is designed for an intuitive user experience,
          featuring a dynamic navbar that responds to user interactions. When
          hovering over individual items in the navbar, a selection menu opens,
          allowing users to explore additional options seamlessly. The menu
          dynamically changes based on the hovered item, providing contextual
          information relevant to the user's selection. Upon moving the cursor
          away from the menu, it automatically hides, maintaining a clean
          interface.
        </p>
      </div>
      <div className="vertica-center">
        <div className="screenshot-container-a apple-image">
          <Image
            className="not-draggable reveal"
            src="/screenshot-a-2.png"
            fill={true}
            alt="screenshot apple"
          />
        </div>
      </div>

      <div className="horizontal max-width-large sub-section">
        <div className="half">
          <h1 className="center-text reveal">Responsive Design</h1>
          <p className="center-text apple-text-mobile reveal">
            The website is fully responsive, adapting seamlessly to various
            screen sizes and devices. The navigation transforms into a compact
            icon on smaller screens, ensuring that the interface remains
            user-friendly and accessible.
          </p>
        </div>
        <div className="half center">
          <div className="screenshot-container-a-2">
            <Image
              className="not-draggable reveal"
              src="/screenshot-a-3.png"
              fill={true}
              alt="screenshot apple"
            />
          </div>
        </div>
      </div>
      <div className="additional-info">
        <h1>Check out the web & code</h1>
        <div className="technology-icon">
          <Image
            src="/github-logo.svg"
            style={{ margin: "10px" }}
            width={60}
            height={60}
            alt="logo github"
          />
        </div>
        <div className="inline">
          <p>web:</p>
          <Link
            className="github-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://fakeapple.vercel.app"
          >
            fakeapple.vercel.app
          </Link>
        </div>
        <div className="inline">
          <p>github link:</p>
          <Link
            className="github-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Tescosalat/fakeapple.git"
          >
            https://github.com/Tescosalat/fakeapple.git
          </Link>
        </div>
        <p>github CLI: gh repo clone Tescosalat/fakeapple</p>
      </div>
      <div className="button-section">
        <a className="no-decor" href="/#contact">
          <Button text={"contact"} />
        </a>
        <a className="no-decor" href="/#projects">
          <Button text={"see more projects"} classn="margin-button" />
        </a>
      </div>
    </div>
  );
}
