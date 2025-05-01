import logo from "../../assets/icon.svg";
import { Container } from "../shared/Container";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useThemeStore } from "../../store/ThemeStore";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";

export const navItems = [
  { href: "#", key: "navbar.home" },
  { href: "#services", key: "navbar.services" },
  { href: "#about-us", key: "navbar.aboutUs" },
  { href: "#pricing", key: "navbar.pricing" },
];

export const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);
  const closeMobileNav = () => setIsMobileNavOpen(false);
  const { t } = useTranslation();

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
          <div className="hidden lg:flex items-center justify-between flex-1 ml-12">
            <ul className="flex gap-5 text-heading-2">
              {navItems.map((item, key) => (
                <NavItem key={key} href={item.href} text={t(item.key)} />
              ))}
            </ul>
            <div className="flex items-center gap-4.5 mr-3">
              <BtnLink
                className="outline-none"
                text={t("button")}
                href="#cta"
              />
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
              <LanguageSwitcher />
            </div>
          </div>
          {/* Mobile Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-gray-400"
            >
              {theme === "dark" ? (
                <MdOutlineLightMode className="text-white size-6" />
              ) : (
                <MdOutlineDarkMode className="text-black size-6" />
              )}
            </button>
            <button onClick={toggleMobileNav}>
              <RxHamburgerMenu className="size-8 text-heading-1 cursor-pointer" />
            </button>
            <LanguageSwitcher />
          </div>
          {/* Mobile Nav */}
          <div
            className={`fixed inset-0 ${
              theme === "dark"
                ? "bg-gray-900 text-white"
                : "bg-white text-black"
            } transform transition-transform duration-300 ease-in-out z-40 ${
              isMobileNavOpen ? "translate-x-0" : "translate-x-full"
            } lg:hidden`}
          >
            <div className="flex justify-end p-4 mr-3">
              <AiOutlineCloseCircle
                className="size-10 cursor-pointer"
                onClick={closeMobileNav}
              />
            </div>
            <ul className="flex flex-col items-center justify-center gap-8 text-lg min-h-[70vh]">
              {navItems.map((item, key) => (
                <NavItem
                  key={key}
                  href={item.href}
                  text={t(item.key)}
                  onClick={closeMobileNav}
                />
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};
