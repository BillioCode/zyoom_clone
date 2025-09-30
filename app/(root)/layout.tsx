import React, { Children } from "react";
import StreamVideoProvider from "@/providers/streamClientProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zyoom",
  description: "Video calling app",
  icons: {
    icon: "/icons/logo.svg",
  },
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
