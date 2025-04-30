import { useTranslation } from "react-i18next";

interface NavItemProps {
  href: string;
  text: string; // This should be the translation key
  onClick?: () => void;
}

export const NavItem = ({ href, text, onClick }: NavItemProps) => {
  const { t } = useTranslation();

  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className="block py-2 px-3 text-base font-medium transition-colors duration-300 ease-in-out hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
      >
        {t(text)}
      </a>
    </li>
  );
};
