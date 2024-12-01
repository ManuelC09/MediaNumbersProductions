import React from "react";

// Interfaz para tipar las props
interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode; // Puedes pasar cualquier ícono como un elemento React
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-500 text-white rounded-lg shadow-lg p-6 flex flex-col items-start space-y-4">
      {/* Ícono */}
      <div className="text-4xl">{icon}</div>

      {/* Título */}
      <h3 className="text-2xl font-bold">{title}</h3>

      {/* Descripción */}
      <p className="text-base text-gray-400">{description}</p>
    </div>
  );
};

export default Card;
