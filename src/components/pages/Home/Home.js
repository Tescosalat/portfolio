"use client";

import { useEffect, useState, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Form from "@/components/Form";
import Button from "@/components/Button";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Home() {
  const [copyNumberToggle, setCopyNumberToggle] = useState(false);
  const { activeSection, sectionRefs, scrollToSection } = useActiveSection();

  const copyWhatsapp = () => {
    setCopyNumberToggle(!copyNumberToggle);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setCopyNumberToggle(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, [copyNumberToggle]);

  //sidebar

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <>
      <main>
        <div className="scrollbar">
          <div
            onClick={(e) => handleLinkClick(e, "about")}
            className={activeSection === "about" ? "selected" : "not"}
          ></div>
          <div
            onClick={(e) => handleLinkClick(e, "projects")}
            className={activeSection === "projects" ? "selected" : "not"}
          ></div>
          <div
            onClick={(e) => handleLinkClick(e, "contact")}
            className={activeSection === "contact" ? "selected" : "not"}
          ></div>
        </div>
        <div
          id="about"
          className={`snap-item ${activeSection === "about" ? "active" : ""}`}
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <article>
            <div className="hero-section">
              <div className="column hero-text">
                <p className="p-mini">Hi, I’m Roman</p>
                <h2 className="more-important">a software developer</h2>
                <p>
                  My goal is to create solutions that bring real value to your
                  business. My aim is to collaborate with you to build solutions
                  that make a difference.
                </p>
                <Button
                  classn="explore-button"
                  text={"Explore"}
                  onClick={(e) => handleLinkClick(e, "projects")}
                />
              </div>
              <div className="profile">
                <Image
                  className="border-radius"
                  src="/profile.png"
                  fill={true}
                />
              </div>
            </div>
          </article>

          <section>
            <div
              onClick={(e) => handleLinkClick(e, "projects")}
              className="project-line"
            >
              <div className="see-my-project">
                <p className="p-important">see my projects</p>
                <MdOutlineKeyboardArrowDown className="icon" />
              </div>
            </div>
          </section>
        </div>

        <div
          id="projects"
          className={`snap-item ${
            activeSection === "projects" ? "active" : ""
          }`}
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <article className="article-projects">
            <div className="description-holder">
              <h1>Selected projects</h1>
              <p>
                I developed a full-stack web app from my own idea from scratch,
                to showcase my ability to bring ideas to life with a functional
                frontend and backend. I also recreated Apple's front page to
                demonstrate design replication. "This web" my latest project
                reflects my design thinking and my most recent code.
              </p>
            </div>
            <div className="projects-section side-padding">
              <Link href="/activiter" className="individual-project">
                <div className="two-rows">
                  <h1>Activiter</h1>
                  <p className="p-mini">backend & frontend web app</p>
                </div>
                <div className="technology-icons-container">
                  <Image
                    className="tech-icon"
                    src="/socketio.svg"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="tech-icon"
                    src="/next-logo.svg"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="tech-icon"
                    src="/js-logo.svg"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="tech-icon"
                    src="/scss-logo.svg"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="tech-icon"
                    src="/mongodb-logo.svg"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="tech-icon"
                    src="/firebase-logo.svg"
                    width={40}
                    height={40}
                  />
                </div>
              </Link>
              <Link href="/thisweb" className="individual-project">
                <div className="two-rows">
                  <h1>This web</h1>
                  <p className="p-mini">my design choices</p>
                </div>
                <div className="technology-icons-container">
                  <Image
                    className="tech-icon"
                    src="/next-logo.svg"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="tech-icon"
                    src="/scss-logo.svg"
                    width={40}
                    height={40}
                  />
                </div>
              </Link>
              <Link href="/apple" className="individual-project">
                <div className="two-rows">
                  <h1>Apple</h1>
                  <p className="p-mini">copy design</p>
                </div>
                <div className="technology-icons-container">
                  <Image
                    className="tech-icon"
                    src="/next-logo.svg"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="tech-icon"
                    src="/scss-logo.svg"
                    width={40}
                    height={40}
                  />
                </div>
              </Link>
            </div>
          </article>

          <section>
            <div
              onClick={(e) => handleLinkClick(e, "contact")}
              className="project-line"
            >
              <div className="see-my-project">
                <p className="p-important">get in touch</p>
                <MdOutlineKeyboardArrowDown className="icon" />
              </div>
            </div>
          </section>
        </div>

        <div
          id="contact"
          className={`snap-item ${activeSection === "contact" ? "active" : ""}`}
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <div className="form-part">
            <h1 className="contact-header">Contact me</h1>
            <Form />
          </div>

          <div className="contact">
            <div className="message">
              {copyNumberToggle && (
                <div className="message-number">
                  <p className="select-enabled">+573003773894</p>
                </div>
              )}
            </div>

            <div className="contact-icons">
              <FaWhatsapp onClick={copyWhatsapp} className="whatsapp" />

              <Link
                className="github-link"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Tescosalat"
              >
                <Image
                  src="/github-logo.svg"
                  style={{ margin: "10px" }}
                  width={60}
                  height={60}
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
