import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "نصرة",
  description: "تقديم الدعم",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{children}</div>
        <ToastContainer position="top-center" />
      </body>
    </html>
  );
}
