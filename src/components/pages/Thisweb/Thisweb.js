"use client";

import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function Thisweb() {
  useReveal();

  return (
    <div className="activiter-container side-padding">
      <div className="portfolio-section">
        <h1 className="big-h1 center-text reveal">This web</h1>
        <div className="horizontal max-width-large sub-section-smaller-gap">
          <div className="half">
            <h1 className="center-text reveal">Layout</h1>
            <p className="center-text margin-top-b mobile-gap reveal">
              The layout has three sections: Hero introduces the developer,
              Projects showcases key work, and Contact allows easy
              communication.
            </p>
          </div>
          <div className="half center technologies">
            <div className="layout reveal">
              <div className="layout-part">
                <h2>hero</h2>
              </div>
              <div className="layout-part">
                <h2>projects</h2>
              </div>
              <div className="layout-part">
                <h2>contact</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="horizontal max-width-large sub-section mobile-swap">
        <div className="half center reveal">
          <div className="controls-1">
            <Image src="/controls-1.png" fill={true} alt="controls feature" />
          </div>
          <div className="controls-1">
            <Image src="/controls-2.png" fill={true} alt="controls feature" />
          </div>
          <div className="controls-2">
            <Image src="/controls-3.png" fill={true} alt="controls feature" />
          </div>
        </div>
        <div className="half">
          <h1 className="center-text reveal">Intuitive navigation</h1>
          <p className="center-text margin-top-b mobile-gap reveal">
            The site navigation is designed to enhance user engagement with
            multiple call-to-action elements. A down arrow subtly signals more
            content below, while an Explore button further emphasizes the
            invitation to interact. Users can seamlessly scroll between sections
            or utilize the clickable scroll indicator on the side for quick
            access, ensuring an intuitive and smooth browsing experience
            throughout the site.
          </p>
        </div>
      </div>
      <div className="horizontal max-width-large sub-section">
        <div className="half">
          <h1 className="center-text reveal">Navbar</h1>
          <p className="center-text margin-top-b mobile-gap reveal">
            The navbar features a minimalist design with just two elements: a
            logo that leads to the home page and a link to my resume. While I
            considered incorporating a hamburger button and top navigation, I
            believe that this would not enhance the user experience in this
            case. The call-to-action elements are strategically placed for a
            seamless experience, and the page is simple enough that additional
            navigation at the top is unnecessary.
          </p>
        </div>
        <div className="half center reveal">
          <div className="nav-1">
            <Image src="/nav-1.png" fill={true} alt="navbar screenshot" />
          </div>
          <div className="nav-2">
            <Image src="/nav-2.png" fill={true} alt="navbar screenshot" />
          </div>
        </div>
      </div>
      <div className="verical-center max-width-large technologies">
        <div>
          <h1 className="center-text reveal">Color Palette</h1>
          <p className="left-text margin-top-b reveal">
            <span className="color-s-1">#743AEF</span> Primary color used
            frequently for a vibrant and modern look.
          </p>
          <p className="left-text margin-top-b reveal">
            <span className="color-s-2">#AD49E1</span>Secondary color
            highlighting additional or technical info in the Activiter section.
          </p>
          <p className="left-text margin-top-b reveal">
            <span className="color-s-3">#f8f8f8</span> White for important
            headers and call-to-action elements.
          </p>
          <p className="left-text margin-top-b reveal">
            <span className="color-s-4">#D5D5D5</span> Gray for plain text,
            creating subtle contrast from headers.
          </p>
          <p className="left-text margin-top-b mobile-gap reveal">
            <span className="color-s-5">#020202</span> Soft black for a more
            comfortable dark theme experience.
          </p>
        </div>
        <div className="center color-container reveal">
          <div className="color color-1">
            <p className="contrast-1">#f8f8f8</p>
          </div>
          <div className="color color-2">
            <p className="contrast-1">#D5D5D5</p>
          </div>
          <div className="color color-3">
            <p className="contrast-1">#AD49E1</p>
          </div>
          <div className="color color-4">
            <p className="contrast-1">#743AEF</p>
          </div>
          <div className="color color-5">
            <p className="contrast-2">#020202</p>
          </div>
        </div>
      </div>
      <div className="horizontal-space-around sub-section font-container">
        <div className="vertical max-width-small reveal">
          <h1 className="center-text font-header">Ag</h1>
          <p>
            Poppins is used for headers with a text weight of 200, giving a
            light and airy feel while still maintaining a bold visual presence.
          </p>
        </div>
        <div className="vertical max-width-small reveal">
          <p className="center-text font-header">Ag</p>
          <p>
            Montserrat serves as the body text at a weight of 400, ensuring
            readability and providing a modern, professional appearance
            throughout the design.
          </p>
        </div>
      </div>
      <div className="additional-info">
        <h1>Check out my code</h1>
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
          <p>github link:</p>
          <Link
            className="github-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Tescosalat/portfolio.git"
          >
            https://github.com/Tescosalat/portfolio.git
          </Link>
        </div>
        <p>github CLI: gh repo clone Tescosalat/portfolio</p>
      </div>
      <div className="button-section">
        <a className="no-decor" href="/#contact">
          <Button text={"contact"} />
        </a>
        <a className="no-decor" href="/#projects">
          <Button text={"see more projects"} classn={"margin-button"} />
        </a>
      </div>
    </div>
  );
}
