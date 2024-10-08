"use client";

import { FaDownload } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { useAppContext } from "@/context";

export default function Navbar() {
  const { nav } = useAppContext();

  return (
    <div>
      <nav>
        <Link href="/">
          <div className="nav-spacing flex-start">
            <Image
              width={50}
              height={40}
              className="logo"
              src="/logo.png"
              alt="logo"
            />
          </div>
        </Link>
        {nav && (
          <div className="nav-messages">
            <span className="bigger-p">&lt;&nbsp;</span>
            <p className="bigger-p">{nav}</p>
            <span className="bigger-p">&nbsp;/&gt;</span>
          </div>
        )}
        <div className="nav-spacing flex-end">
          <Link
            className="no-decor"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button classn={"button-nav"} text={"resume"} icon={FaDownload} />
          </Link>
        </div>
      </nav>
    </div>
  );
}
