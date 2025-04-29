interface NavItemProps {
  href: string;
  text: string;
  onClick?: () => void;
}

export const NavItem = ({ href, text, onClick }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className="duration-300 font-medium ease-linear hover:text-primary py-3"
      >
        {text}
      </a>
    </li>
  );
};
