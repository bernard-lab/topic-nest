import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Topic Nest",
  description:
    "Explore TopicNest, a powerful web application designed for creating, managing, and discussing topics. Perfect for learning and showcasing CRUD operations (Create, Read, Update, Delete), TopicNest offers a seamless experience for users to generate, view, modify, and remove topics. Enhance your web development skills with this intuitive and user-friendly platform. Discover the best practices for CRUD methods in a practical, real-world project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto p-4">
          <Navbar />
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
