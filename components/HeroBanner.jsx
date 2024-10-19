import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
    return (
        <div className="relative w-full max-w-[1350px] mx-auto">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-12 md:right-24 bottom-4 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="text-white text-sm md:text-lg" />
                    </div>
                )}
                renderArrowNext={(clickHandler) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-2 md:right-4 bottom-4 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="rotate-180 text-white text-sm md:text-lg" />
                    </div>
                )}
            >
                {["/s1.jpg", "/s2.jpg", "/kamakhyaBanner1.jpg"].map((src, index) => (
                    <div key={index} className="relative">
                        <img
                            src={src}
                            alt={`Banner ${index + 1}`}
                            className="w-full h-full object-contain"
                        />
                        <div className="absolute bottom-3 left-1 md:bottom-6 md:left-5 bg-white px-4 py-2 md:px-8 md:py-4 font-oswald text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                            <Link href="https://hyki.mini.store" target="_blank" rel="noopener noreferrer">
                                Shop now
                            </Link>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default HeroBanner;
