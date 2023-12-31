import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "IMDB Movies App",
    description:
        "This is IMDB movies app, free movies watch, new movies, action movies, top movies.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
