import { Container } from "../shared/Container";
import logo from "../../assets/icon.svg";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative pt-20 rounded-t-3xl bg-box-bg">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={logo} className="w-7 h-7" alt="EdegAI Logo" />
            <span className="text-lg font-semibold text-heading-1">EdegAI</span>
          </div>

          <ul className="flex gap-6 text-heading-1">
            {navItems.map((item, key) => (
              <NavItem key={key} href={item.href} text={t(item.key)} />
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
