import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Snehesh Mundale | Software Engineer",
  description: "Portfolio and Resume of Snehesh Mundale, a Software Engineer specialized in Golang, React, and Backend Systems.",
  keywords: ["Snehesh Mundale", "Software Engineer", "Golang", "React", "Resume", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-layers">
          <div className="grid-overlay"></div>
          <div className="blob-container">
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
          </div>
          <div className="symbols-container">
             <span className="symbol">{`{ }`}</span>
             <span className="symbol">{`< >`}</span>
             <span className="symbol">{`[ ]`}</span>
             <span className="symbol">{`&&`}</span>
             <span className="symbol">{`||`}</span>
             <span className="symbol">{`//`}</span>
             <span className="symbol">{`;`}</span>
             <span className="symbol">{`=>`}</span>
             <span className="symbol">{`#!`}</span>
             <span className="symbol">{`ptr*`}</span>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
