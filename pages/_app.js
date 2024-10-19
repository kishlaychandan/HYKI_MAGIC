import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import ChatBots from "@/components/ChatBot/ChatBots";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>HYKI MAGIC FLOOR CLEANER</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <Header />
        <Component {...pageProps} />
        <ChatBots />
        <div className=" flex items-center justify-center gap-4  fixed mb-3 bottom-0 left-[48%] p-2">
          <Link
          // insta account: hyki.kmk
            href="https://www.instagram.com/hyki.kmk"
            className="w-10 h-10 bg-red-600 hover:bg-red-400 text-white  rounded-full  flex items-center justify-center  cursor-pointer"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            href="https://wa.me/7026202925"
            className="w-10 h-10 bg-green-600 hover:bg-green-400 text-white rounded-full flex items-center justify-center   cursor-pointer"
          >
            <FaWhatsapp size={24} />
          </Link>
        </div>
        <Footer />
      </ThemeProvider>
      
    </>
  );
}
