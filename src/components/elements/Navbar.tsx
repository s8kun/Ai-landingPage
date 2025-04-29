import logo from "../../assets/icon.svg";
import { Container } from "../shared/Container";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useThemeStore } from "../../store/ThemeStore";
import { useState } from "react";

export const navItems = [
  { href: "#", text: "Home" },
  { href: "#services", text: "Services" },
  { href: "#about-us", text: "About Us" },
  { href: "#pricing", text: "Pricing" },
];

export const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <Container>
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="EdgeAi logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-heading-1">EdgeAi</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex gap-6 text-heading-2">
              {navItems.map((item, key) => (
                <NavItem key={key} href={item.href} text={item.text} />
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <BtnLink text="Get Started" href="#cta" />
              <button
                onClick={toggleTheme}
                className="p-3 rounded-full border border-gray-400"
              >
                {theme === "dark" ? (
                  <MdOutlineLightMode className="text-white size-6" />
                ) : (
                  <MdOutlineDarkMode className="text-black size-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button className="lg:hidden" onClick={toggleMobileNav}>
            <RxHamburgerMenu className="size-8 text-heading-1 mr-2.5 cursor-pointer" />
          </button>

          {/* Mobile Nav Overlay */}
          <div
            className={`fixed inset-0 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-40 ${
              isMobileNavOpen ? "translate-x-0" : "translate-x-full"
            } lg:hidden`}
          >
            <div className="flex justify-end p-4">
              <AiOutlineCloseCircle
                className="size-10 mr-2.5 cursor-pointer"
                onClick={closeMobileNav}
              />
            </div>
            <ul className="flex flex-col items-center justify-center gap-8 text-lg min-h-[70vh]">
              {navItems.map((item, key) => (
                <li key={key}>
                  <a
                    href={item.href}
                    onClick={closeMobileNav}
                    className="hover:text-violet-300 transition-colors duration-200"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};
