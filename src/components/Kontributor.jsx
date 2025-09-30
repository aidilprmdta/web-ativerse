import { react } from "react";

const Kontributor = ({ name, role, image }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mb-4"        
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-500">{role}</p>
    </div>
  );
};

export default Kontributor;