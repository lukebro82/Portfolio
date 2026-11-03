import { type FormEvent, useState } from "react";
import Swal from "sweetalert2";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/cat.svg";
import mailIcon from "../assets/email.svg";
import { useForm } from "../hooks/useForm";
import { sendMail } from "../helpers/sendMail";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const Contacto = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { nombre, email, mensaje, onInputChange, onResetForm } = useForm({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, completá tu nombre, email y mensaje antes de enviar.",
        background: "#131924",
        color: "#ffffff",
        confirmButtonColor: "#e11d74",
      });
      return;
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      Swal.fire({
        icon: "warning",
        title: "Email inválido",
        text: "Por favor, ingresá un email válido (ej: nombre@dominio.com).",
        background: "#131924",
        color: "#ffffff",
        confirmButtonColor: "#e11d74",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await sendMail(mensaje, nombre, email);

      Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        text: "Gracias por escribirme. Te responderé a la brevedad.",
        background: "#131924",
        color: "#ffffff",
        confirmButtonColor: "#e11d74",
      });

      onResetForm();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "No se pudo enviar",
        text:
          error instanceof Error
            ? error.message
            : "Ocurrió un problema al enviar el mensaje. Intentá nuevamente.",
        background: "#131924",
        color: "#ffffff",
        confirmButtonColor: "#e11d74",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex-1 max-w-6xl mx-auto w-full px-6 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Columna Izquierda: Info y Redes */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-mono text-primary-pink-hover tracking-wider">
            CONTACTO DIRECTO
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Hablemos sobre tu próximo proyecto
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Estoy disponible para oportunidades laborales como Desarrollador
            Fullstack o Frontend, así como proyectos freelance.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <a
            href="mailto:lucas.82@hotmail.com.ar"
            className="flex items-center gap-4 p-4 rounded-xl bg-background-secondary border border-white/10 hover:border-primary-pink/40 transition-colors"
          >
            <div className="p-2.5 rounded-lg bg-white/5">
              <img src={mailIcon} alt="" className="w-6 h-6 invert" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-slate-400">Email</span>
              <span className="text-sm md:text-base font-medium text-white">
                lucas.82@hotmail.com.ar
              </span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/lucas-ricci82/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-background-secondary border border-white/10 hover:border-primary-pink/40 transition-colors"
          >
            <div className="p-2.5 rounded-lg bg-white/5">
              <img src={linkedin} alt="" className="w-6 h-6 invert" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-slate-400">LinkedIn</span>
              <span className="text-sm md:text-base font-medium text-white">
                linkedin.com/in/lucas-ricci82
              </span>
            </div>
          </a>

          <a
            href="https://github.com/lukebro82"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-background-secondary border border-white/10 hover:border-primary-pink/40 transition-colors"
          >
            <div className="p-2.5 rounded-lg bg-white/5">
              <img src={github} alt="" className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-slate-400">GitHub</span>
              <span className="text-sm md:text-base font-medium text-white">
                github.com/lukebro82
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Columna Derecha: Formulario */}
      <div className="lg:col-span-7 bg-background-secondary border border-white/10 rounded-2xl p-6 md:p-8">
        <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="nombre"
              className="text-sm font-medium text-slate-200"
            >
              Nombre completo
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={nombre}
              onChange={onInputChange}
              disabled={isSubmitting}
              className="border border-white/15 rounded-xl px-4 py-3 w-full text-white bg-background focus:border-primary-pink focus:outline-none focus:ring-1 focus:ring-primary-pink transition-colors disabled:opacity-60"
              placeholder="Ej. Juan Pérez"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-200"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={onInputChange}
              disabled={isSubmitting}
              className="border border-white/15 rounded-xl px-4 py-3 w-full text-white bg-background focus:border-primary-pink focus:outline-none focus:ring-1 focus:ring-primary-pink transition-colors disabled:opacity-60"
              placeholder="tu.email@ejemplo.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="mensaje"
              className="text-sm font-medium text-slate-200"
            >
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={mensaje}
              onChange={onInputChange}
              disabled={isSubmitting}
              className="border border-white/15 rounded-xl px-4 py-3 w-full text-white bg-background focus:border-primary-pink focus:outline-none focus:ring-1 focus:ring-primary-pink transition-colors resize-none disabled:opacity-60"
              rows={5}
              placeholder="Contame sobre el puesto o proyecto en el que podemos trabajar juntos..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary-pink hover:bg-primary-pink-hover disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary-pink focus:ring-offset-2 focus:ring-offset-background transition-all duration-200 text-white font-semibold py-3.5 px-6 rounded-xl mt-1 cursor-pointer"
          >
            {isSubmitting ? "Enviando mensaje..." : "Enviar Mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
};
