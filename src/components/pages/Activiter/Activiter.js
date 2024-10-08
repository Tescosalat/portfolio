"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { useReveal } from "@/hooks/useReveal";

export default function Activiter() {
  useReveal();

  return (
    <div className="activiter-container side-padding">
      <div className="portfolio-section">
        <h1 className="big-h1 center-text reveal">Activiter</h1>
        <div className="horizontal max-width-large sub-section-smaller-gap">
          <div className="half mobile-gap">
            <h1 className="center-text reveal">About</h1>
            <p className="center-text margin-top-b reveal">
              Activiter connects people through shared activities and interests.
              Users can create and find activity points on a map for sports,
              events, or meet-ups in their area. The integrated chat feature
              allows direct communication, making it easy to join and organize
              activities. Perfect for discovering new opportunities and meeting
              others nearby.
            </p>
          </div>
          <div className="half technologies">
            <div className="text-icons">
              <h1 className="reveal">Technologies</h1>
              <div className="technologies-container reveal">
                <div className="technology-icon">
                  <Image
                    className="not-draggable"
                    src="/js-logo.svg"
                    width={40}
                    height={40}
                  />
                  <p>Javascript</p>
                </div>
                <div className="technology-icon">
                  <Image
                    className="not-draggable"
                    src="/next-logo.svg"
                    width={40}
                    height={40}
                  />
                  <p>Next</p>
                </div>
                <div className="technology-icon">
                  <Image
                    className="not-draggable"
                    src="/mongodb-logo.svg"
                    width={40}
                    height={40}
                  />
                  <p>MongoDB</p>
                </div>
                <div className="technology-icon">
                  <Image
                    className="not-draggable"
                    src="/firebase-logo.svg"
                    width={40}
                    height={40}
                  />
                  <p>Firebase</p>
                </div>

                <div className="technology-icon">
                  <Image
                    className="not-draggable"
                    src="/socketio.svg"
                    width={40}
                    height={40}
                  />
                  <p>SocketIO</p>
                </div>
                <div className="technology-icon">
                  <Image
                    className="not-draggable"
                    src="/scss-logo.svg"
                    width={40}
                    height={40}
                  />
                  <p>SCSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="horizontal max-width-large sub-section mobile-swap">
        <div className="half center">
          <div className="screenshot-container">
            <Image
              className="not-draggable reveal"
              src="/screenshot-1.png"
              fill={true}
            />
          </div>
        </div>
        <div className="half mobile-gap">
          <h1 className="center-text reveal">Login & Sign up</h1>
          <p className="center-text margin-top-b reveal">
            Sign up and set up your profile by adding a photo, allowing you to
            engage with the community and showcase your identity.
          </p>
          <p className="p-description center-text margin-top reveal">
            The app provides a login and registration system where credentials
            are hashed and stored in MongoDB. Profile images are uploaded to
            Google Firebase, with links stored in MongoDB. Middleware and
            cookies are utilized to determine which page to display based on
            user authentication status.
          </p>
        </div>
      </div>
      <div className="horizontal max-width-large sub-section">
        <div className="half mobile-gap">
          <h1 className="center-text reveal">How It Works</h1>
          <p className="center-text margin-top-b reveal">
            Upon logging in, users access an interactive map showcasing activity
            points created by others. Clicking on a point reveals event details,
            with a simple option to join. This opens a chat either joining an
            existing conversation or starting a new one to coordinate plans.
            Below the map, users can explore ongoing events, ensuring they stay
            connected and engaged with real-time activities.
          </p>
          <p className="p-description center-text margin-top reveal">
            This feature utilizes Google Maps API to display pins stored in the
            database, accessed via HTTP requests. Pin data is fetched every 15
            seconds or upon{" "}
            <span className="p-description" style={{ whiteSpace: "nowrap" }}>
              re-render
            </span>
            .
          </p>
        </div>
        <div className="half center">
          <div className="screenshot-container">
            <Image
              className="not-draggable reveal"
              src="/screenshot-3.png"
              fill={true}
            />
          </div>
        </div>
      </div>
      <div className="horizontal max-width-large sub-section  mobile-swap">
        <div className="half center">
          <div className="screenshot-container">
            <Image
              className="not-draggable reveal"
              src="/screenshot-4.png"
              fill={true}
            />
          </div>
        </div>
        <div className="half mobile-gap">
          <h1 className="center-text reveal">Host an Event</h1>
          <p className="center-text margin-top-b reveal">
            Easily create a new event by clicking directly on the map. This
            intuitive feature makes it simple to plan gatherings and connect
            with others in the community.
          </p>
          <p className="p-description center-text margin-top reveal">
            After creating the event, the corresponding data will be updated in
            the MongoDB database via HTTP.
          </p>
        </div>
      </div>
      <div className="horizontal max-width-large sub-section">
        <div className="half mobile-gap">
          <h1 className="center-text reveal">Chat with Friends</h1>
          <p className="center-text margin-top-b reveal">
            The real-time chat feature allows you to communicate instantly about
            anything whether it's planning events, sharing updates, or just
            connecting.
          </p>
          <p className="p-description center-text margin-top reveal">
            The chat functionality operates on a Node.js server using Next.js
            and Socket.IO for real-time communication, with MongoDB for message
            storage. Users connect via WebSockets and register with a username,
            linking it to their socket ID. When a user sends a private message,
            it is stored in MongoDB and emitted to the recipient's socket.
          </p>
        </div>
        <div className="half center">
          <div className="screenshot-container">
            <Image
              className="not-draggable reveal"
              src="/screenshot-2.png"
              fill={true}
            />
          </div>
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
          />
        </div>
        <div className="inline">
          <p>github link:</p>
          <Link
            className="github-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Tescosalat/activiterf.git"
          >
            https://github.com/Tescosalat/activiterf.git
          </Link>
        </div>
        <p>github CLI: gh repo clone Tescosalat/activiterf</p>
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
