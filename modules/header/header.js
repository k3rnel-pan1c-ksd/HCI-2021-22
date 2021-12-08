import { useState } from "react";
import Image from "next/image";

import LogoImg from "../../assets/logo.png";
import HeroImg from "../../assets/hero.png";
import NavBar from "../../components/navbar";

const hamburgerWidth = 45;
const hamburgerHeight = hamburgerWidth / (35 / 50);

const magnifierWidth = 26;
const magnifierHeight = magnifierWidth / (26 / 25);

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <header className="px-5 py-5 relative flex items-center bg-hci-header sm:bg-transparent sm:h-80">
      <div className="hidden sm:block z--1">
        <Image
          src={HeroImg}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          alt="Hero image"
        />
      </div>

      <main className="max-w-4xl mx-auto flex-grow flex flex-col">
        <div className="z-10 flex justify-between items-center sm:mb-16">
          <Image
            src={LogoImg}
            layout="fixed"
            width={50}
            height={50}
            alt="Design logo"
          />
          <div className="flex items-center sm:hidden">
            <Image
              className="cursor-pointer"
              src={"/magnifier.svg"}
              layout="fixed"
              width={magnifierWidth}
              height={magnifierHeight}
              alt="Menu"
            />
            <div className="w-8" />
            <Image
              onClick={() => setIsClicked(!isClicked)}
              className={`cursor-pointer transition-all ease-linear duration-700 ${
                isClicked ? "transform rotate-90" : ""
              }`}
              src={"/hamburger.svg"}
              layout="fixed"
              width={hamburgerWidth}
              height={hamburgerHeight}
              alt="Menu"
            />
          </div>
          <NavBar />
        </div>
        <div className="hidden sm:block">
          <h1 className="text-5xl font-roboto-condensed font-bold mb-2 text-hci-lila">
            Design Matters
          </h1>
          <h3 className="text-3xl font-roboto-condensed font-light text-hci-lila text-opacity-60">
            Entrust us with your digital appearance
          </h3>
        </div>
      </main>
    </header>
  );
};

export default Header;
