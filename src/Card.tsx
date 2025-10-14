import React from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, href }) => {
  return (
    <a
      href={href}
      className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
};

export default Card;

