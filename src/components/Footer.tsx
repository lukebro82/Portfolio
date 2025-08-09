import cat from "../assets/cat.svg";

export const Footer = () => {
  return (
    <div className="bg-gray-900 h-[10dvh] text-white flex justify-between flex-row items-center pl-25 pr-25 border-t border-gray-700">
      <div>© 2025 - Lucas Ricci</div>
      <div className="flex flex-row gap-6 items-center">
        lucas.82@hotmail.com.ar
        <img src={cat} alt="GitHub Octocat" className="w-8 h-8" />
      </div>
    </div>
  );
};
