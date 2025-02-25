"use client";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { Link, scroller } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";
import Button from "./shared/button";

const NavBar: FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const [activeLink, setActiveLink] = useState("features");
  const router = useRouter();

  const links = [
    { href: "features", label: "Features" },
    { href: "solution", label: "Solution" },
    { href: "resources", label: "Resources" },
    { href: "pricing", label: "Pricing" },
    { href: "api", label: "API" },
  ];

  const navigateAndScroll = (href: string) => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        scroller.scrollTo(href, {
          smooth: true,
          offset: -100,
          duration: 500,
        });
      }, 100);
    } else {
      scroller.scrollTo(href, {
        smooth: true,
        offset: -100,
        duration: 500,
      });
    }
  };

  useEffect(() => {
    if (pathname !== "/") return setActiveLink("");
  }, [router]);

  return (
    <div
      className={`py-6 mx-5 sm:mx-12 xl:mx-16 fixed top-0 left-0 right-0 z-50 bg-transparent flex lg:items-center lg:justify-between px-6 sm:px-16 lg:px-0 flex-row-reverse lg:flex-row  transition-all duration-300`}
    >
      <div className="">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={115}
          height={39}
        />
      </div>

      <nav className="flex justify-between px-16">
        <div className="lg:hidden" onClick={toggleMenu}>
          <button className="text-2xl">
            <Image
              src="/svg/hamburger-menu.svg"
              alt="menu-icon"
              height={24}
              width={24}
            />
          </button>
        </div>

        <div className={`flex-col lg:flex whitespace-nowrap lg:whitespace-normal lg:flex-row gap-y-3 lg:justify-between lg:ms-10 mt-4 lg:mt-0 text-[18px] ${isOpen ? "flex" : "hidden"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              smooth={true}
              offset={-100}
              duration={500}
              spy={true}
              onSetActive={() => setActiveLink(link.href)}
              onClick={() => navigateAndScroll(link.href)}
              className={`relative font-semibold cursor-pointer lg:mt-0 text-sm ${activeLink === link.href
                ? "bg-white rounded-[4px] text-azure50"
                : "text-white"
                } hover:bg-white hover:rounded-[4px] hover:text-azure50 mx-1 px-4 py-3 group`}
            >
              <div className="flex items-center gap-1">
                {link.label}
                <IoMdArrowDropdown size={17} color={activeLink === link.href ? "text-azure50" : "text-white"} />
              </div>
            </Link>
          )
          )}

        </div>
      </nav>

      <div className=" flex items-center gap-5">
        <Button
          text="Login"
          className="bg-transparent border border-white text-white"
        />

        <Button
          text="Get Started for Free"
          className=" bg-white text-azure50"
        />
      </div>
    </div>
  );
};

export default NavBar;
