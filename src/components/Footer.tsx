import cat from "../assets/cat.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/email.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 text-slate-400">
      <div className="max-w-6xl mx-auto w-full px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm font-mono">
          © {currentYear} — Lucas Emanuel Ricci
        </p>

        <div className="flex flex-row gap-5 items-center">
          <a
            href="mailto:lucas.82@hotmail.com.ar"
            aria-label="Enviar correo electrónico a Lucas Ricci"
            className="p-2 rounded-lg hover:bg-white/5 hover:scale-105 transition-all"
          >
            <img
              src={mail}
              alt="Email"
              className="w-5 h-5 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          </a>
          <a
            href="https://github.com/lukebro82"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de GitHub de Lucas Ricci"
            className="p-2 rounded-lg hover:bg-white/5 hover:scale-105 transition-all"
          >
            <img
              src={cat}
              alt="GitHub"
              className="h-5 w-5 opacity-80 hover:opacity-100 transition-opacity"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-ricci82/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn de Lucas Ricci"
            className="p-2 rounded-lg hover:bg-white/5 hover:scale-105 transition-all"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="h-5 w-5 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
