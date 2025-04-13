import React, { useState } from "react";
import axios from "axios";
import BotonIngresar from "../../Buttons/BotonIngresar";
import { useNavigate } from "react-router-dom"; // 👈 Importar hook

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // 👈 Hook de navegación

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      console.log("entro Usuario:", username);
      localStorage.setItem("user", JSON.stringify(response.data));

      navigate("/dashboard"); // 👈 Redirigir a dashboard
    } catch (err) {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card w-50 shadow">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault(); // Evitar el comportamiento por defecto del formulario
              handleLogin(); // Llamar a la función de inicio de sesión
            }}
          >
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Usuario
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <div className="position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="form-control pe-5"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "15px",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? (
                    // ícono de ojo tachado (ocultar)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="gray"
                      viewBox="0 0 24 24"
                    >
                      <path d="M2 2l20 20m-3.88-3.88C16.25 18.51 14.22 19.25 12 19.25c-5.52 0-10-4.48-10-10 0-2.22.74-4.25 1.97-5.88M12 4.75c2.22 0 4.25.74 5.88 1.97M9.17 9.17a3 3 0 004.24 4.24" />
                    </svg>
                  ) : (
                    // ícono de ojo (ver)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="gray"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 5c-7.633 0-10 7-10 7s2.367 7 10 7 10-7 10-7-2.367-7-10-7zm0 12c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z" />
                    </svg>
                  )}
                </span>
              </div>
            </div>

            {error && <p className="text-danger">{error}</p>}

            <div className="text-center">
              <BotonIngresar onClick={handleLogin} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
