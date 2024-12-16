import { Inter, Montserrat, Poppins } from "next/font/google";
import "@/styles/index.css";
import Navbar from "@/components/Navbar";
import { AppWrapper } from "@/context";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

const ptext = Montserrat({
  subsets: ["latin"],
  variable: "--ptext",
  display: "swap",
  weight: "400",
});

const htext = Poppins({
  subsets: ["latin"],
  variable: "--htext",
  display: "swap",
  weight: "200",
});

export const metadata = {
  title: "Software DEV",
  description:
    "Showcasing my projects and skills as a software developer. Explore my work in full-stack development, design replication, and innovative solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${htext.variable} ${ptext.variable}`}
    >
      <body className={inter.className}>
        <AppWrapper>
          <Navbar />
          {children}
          <SpeedInsights />
          <Analytics />
        </AppWrapper>
      </body>
    </html>
  );
}
