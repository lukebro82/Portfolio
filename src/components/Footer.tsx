import cat from "../assets/cat.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/email.svg";

export const Footer = () => {
  return (
    <div className="bg-gray-900 h-[10dvh] text-white flex justify-around flex-row items-center border-t border-gray-700 max-w-full flex-shrink-0">
      <div>© 2025 - Lucas Ricci</div>
      <div className="flex flex-row gap-4 md:gap-6 items-center">
        <a
          href="mailto:lucas.82@hotmail.com.ar"
          className="hover:scale-110 transition-transform"
        >
          {" "}
          <img
            src={mail}
            alt="Email"
            className="w-6 h-6 md:w-9 md:h-9 invert"
          />
        </a>
        <a
          href="https://github.com/lukebro82"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          {" "}
          <img src={cat} alt="GitHub" className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-ricci82/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="h-6 w-6 md:h-8 md:w-8 invert hover:opacity-80 transition-opacity"
          />
        </a>
      </div>
    </div>
  );
};
