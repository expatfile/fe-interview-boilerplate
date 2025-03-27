import { type FunctionComponent, type PropsWithChildren } from "react";
import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Good luck and have fun! 🎉",
  description: "Expatfile FE interview boilerplate",
};

type RootLayoutProps = PropsWithChildren;

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
