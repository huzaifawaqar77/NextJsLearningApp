import { Inter } from "next/font/google";
import "./globals.css";
import { FormContextProvider } from "@/context/FormContext";

const inter = Inter({ subsets: ["latin"] });
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FormContextProvider>{children}</FormContextProvider>
      </body>
    </html>
  );
}
