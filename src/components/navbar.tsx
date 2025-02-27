"use client";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { Link, scroller } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";
import Button from "./shared/button";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const NavBar: FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const [activeLink, setActiveLink] = useState("features");
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` ${scrolled ? "bg-[rgb(95,52,234,0.95)]" : "bg-transparent"} pt-3 pb-3 px-6 lg:px-12 xl:px-16 2xl:max-w-[1440px] mx-auto fixed top-0 left-0 right-0 z-50 flex justify-between lg:grid  lg:grid-cols-[10%_65%_46%] xl:grid-cols-[15%_65%_30%] items-center  transition-all duration-300`}
    >
      <div className="">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={115}
          height={39}
          className="w-[50px] sm:w-[115px]"
        />
      </div>

      <nav className="md:flex justify-between xl:px-12 order-3  lg:order-2">
        <div className="lg:hidden" onClick={toggleMenu}>
          <button className="text-2xl">
          {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
          {isOpen && (
          <div className="lg:hidden  mt-6 grid grid-cols-1 bg-[rgb(95,52,234,0.95)] gap-2 ms-0 absolute left-0 right-0">
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
                className="text-white font-semibold text-lg py-3"
              >
                <div className="flex items-center justify-between px-6">
                  {link.label}
                  <IoMdArrowDropdown size={20} />
                </div>
              </Link>
            ))}
           
          </div>
        )}
          </button>
        </div>

        <div className={`hidden lg:flex whitespace-nowrap lg:whitespace-normal lg:visible gap-y-3 lg:justify-between lg:ms-10 mt-4 lg:mt-0 text-[18px] ${isOpen ? "flex" : "hidden" }`}
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
                <IoMdArrowDropdown size={17}
                  color={activeLink === link.href ? "text-azure50" : "text-white"}
                  className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
              </div>
            </Link>
          )
          )}

        </div>
      </nav>

      <div className="inline-flex items-start lg:flex sm:items-center gap-2 sm:gap-5 order-2 lg:order-3">
        <Button
          text="Login"
          className="bg-transparent border border-white text-white text-[9px] sm:text-normal"
        />

        <Button
          text="Get Started for Free"
          className=" bg-white text-azure50 text-[9px] sm:text-normal text-wrap"
        />
      </div>

  
    </div>
  );
};

export default NavBar;
