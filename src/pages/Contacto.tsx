import linkedin from "../assets/linkedin.svg";
import github from "../assets/cat.svg";
import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";
import { sendMail } from "../helpers/senMail";

export const Contacto = () => {
  const { nombre, email, mensaje, onInputChange, onResetForm }: any = useForm({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, completa todos los campos.",
        background: "#1f2937",
        color: "#ffffff",
        confirmButtonColor: "#2563eb",
      });
      return;
    }

    await sendMail("1021096407032922113", mensaje, nombre, email);

    Swal.fire({
      icon: "success",
      title: "Mensaje enviado correctamente!",
      text: "Gracias por tu mensaje.",
      background: "#1f2937",
      color: "#ffffff",
      confirmButtonColor: "#2563eb",
    });

    onResetForm();
  };
  return (
    <div className="bg-gray-900 h-[80dvh] text-white flex flex-col items-center gap-6 md:gap-10 p-6 md:p-10 overflow-y-auto">
      <div className="flex flex-row justify-center gap-6 md:gap-8 p-2 w-full max-w-md">
        <a
          href="https://www.linkedin.com/in/lucas-ricci82/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="h-14 w-14 invert hover:opacity-80 transition-opacity"
          />
        </a>
        <a
          href="https://github.com/lukebro82"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img
            src={github}
            alt="GitHub"
            className="h-14 w-14 hover:opacity-80 transition-opacity"
          />
        </a>
      </div>

      <div className="w-full max-w-md">
        <form onSubmit={onSubmit} className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="nombre"
              className="text-sm font-medium text-gray-300"
            >
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={nombre}
              onChange={onInputChange}
              className="border border-gray-600 rounded-md px-3 py-3 w-full text-white bg-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              placeholder="Tu nombre completo"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={onInputChange}
              className="border border-gray-600 rounded-md px-3 py-3 w-full text-white bg-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              placeholder="tu.email@ejemplo.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="mensaje"
              className="text-sm font-medium text-gray-300"
            >
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={mensaje}
              onChange={onInputChange}
              className="border border-gray-600 rounded-md px-3 py-3 w-full text-white bg-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
              rows={4}
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 text-white font-semibold py-3 px-6 rounded-md mt-2"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};
