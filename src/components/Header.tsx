import React from "react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Helping</h1>
        <nav className="space-x-6">
          <a href="#vulnerabilidade" className="hover:text-blue-600">Vulnerabilidade</a>
          <a href="#fome" className="hover:text-blue-600">Fome</a>
          <a href="#alfabetizacao" className="hover:text-blue-600">Alfabetização</a>
        </nav>
      </div>
    </header>
  );
};