"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [passwordError, setPasswordError] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password") {
      // Validación de la contraseña
      let errorMessage = "";

      // Verificamos si no se cumplen los requisitos
      if (value.length < 8 && !/[A-Z]/.test(value) && !/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        errorMessage += "La contraseña debe tener al menos 8 caracteres, una mayúscula y un caracter especial ";
      }

      // Establecemos el mensaje de error
      setPasswordError(errorMessage.trim());
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Inicio de sesión:", formData);
    } else {
      console.log("Registro de nuevo usuario:", formData);
    }
  };

  // Resetear errores y campos al cambiar entre iniciar sesión y crear cuenta
  const handleFormSwitch = () => {
    setIsLogin(!isLogin);
    setPasswordError(""); // Resetear el error de contraseña
    setPasswordTouched(false); // Resetear el estado de "tocado"
    setFormData({ email: "", password: "" }); // Limpiar los campos de formulario
  };

  return (
    <div className="w-full max-w-lg mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900">
          {isLogin ? "Iniciar sesión" : "Crear una cuenta"}
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          {isLogin
            ? "Accede a tu cuenta para disfrutar de nuestras ofertas."
            : "Únete a nuestra comunidad de lectores."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-lg text-gray-900">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Ingresa tu correo electrónico"
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-300 outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="text-lg text-gray-900">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Ingresa tu contraseña"
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-300 outline-none"
            onFocus={() => setPasswordTouched(true)} // Marcar cuando el campo haya sido tocado
          />
          {/* Mostrar el mensaje de error completo hasta que todos los requisitos estén cumplidos */}
          {!isLogin && passwordTouched && passwordError && (
            <p className="text-red-500 text-sm mt-2">{passwordError}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md transition transform hover:scale-105"
        >
          {isLogin ? "Iniciar sesión" : "Registrarse"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
          <button
            onClick={handleFormSwitch}
            className="text-indigo-600 hover:underline ml-2"
          >
            {isLogin ? "Crear una cuenta" : "Iniciar sesión"}
          </button>
        </p>
      </div>
    </div>
  );
}
