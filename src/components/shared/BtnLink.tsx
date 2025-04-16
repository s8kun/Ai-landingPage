interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
}
export const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border dark:bg-violet-600 cursor-pointer transition-all duration-300 hover:scale-95 ${className}`}
    >
      {" "}
      <span className="relative z-10 text-white ">{text}</span>{" "}
    </a>
  );
};
