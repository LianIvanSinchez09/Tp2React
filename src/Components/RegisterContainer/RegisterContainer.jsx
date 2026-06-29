import { useState } from "react";
import "./RegisterPage.css";
import { registerUser } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { setLocalStorage } from "../../services/localStorage";


export default function RegisterContainer() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setApiError("");
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim() || !form.email.includes("@"))
      newErrors.email = "Email inválido";
    if (form.password.length < 5 || form.password.length > 15)
      newErrors.password = "La contraseña debe tener entre 5 y 15 caracteres";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    return newErrors;
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    try {
      const data = await registerUser(form.email, form.password);
      // guarda el id y redirige
      setLocalStorage("logeado", data.id);
      navigate("/");
    } catch (error) {
      setApiError(error.message);
    }
  };

  if (submitted) {
    return (
      <div className="register-bg">
        <div className="register-square register-square--a" />
        <div className="register-square register-square--b" />
        <div className="register-success">
          <div className="register-success__emoji">🎉</div>
          <h2 className="register-success__title">¡Registro exitoso!</h2>
          <p className="register-success__subtitle">Ya podés iniciar sesión en tu cuenta.</p>
          <button className="register-btn-back" onClick={() => setSubmitted(false)}>
            Volver
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="register-bg">
      <div className="register-square register-square--a" />
      <div className="register-square register-square--b" />

      <div className="register-card">
        <div className="register-header">
          <h1 className="register-header__title">Registrarse</h1>
          <div className="register-header__underline" />
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="register-row">
            <div className="register-field">
              <label className="register-label">Email</label>
              <input
                className={`register-input${errors.email ? " register-input--error" : ""}`}
                type="email"
                name="email"
                placeholder="correo@ejemplo.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className="register-error">{errors.email}</p>}
            </div>
          </div>

          <div className="register-row">
            <div className="register-field">
              <label className="register-label">Contraseña</label>
              <input
                className={`register-input${errors.password ? " register-input--error" : ""}`}
                type="password"
                name="password"
                placeholder="Entre 5 y 15 caracteres"
                value={form.password}
                onChange={handleChange}
              />
              {errors.password && <p className="register-error">{errors.password}</p>}
            </div>
            <div className="register-field">
              <label className="register-label">Confirmar contraseña</label>
              <input
                className={`register-input${errors.confirmPassword ? " register-input--error" : ""}`}
                type="password"
                name="confirmPassword"
                placeholder="Repetí tu contraseña"
                value={form.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <p className="register-error">{errors.confirmPassword}</p>}
            </div>
          </div>

          {/* Error del servidor (ej: email duplicado) */}
          {apiError && <p className="register-error" style={{ marginBottom: "12px" }}>{apiError}</p>}

          <button type="submit" className="register-btn-submit">
            Registrarse →
          </button>

          <p className="register-footer">
            ¿Ya tenés cuenta?{" "}
            <a href="/login">Iniciá sesión</a>
          </p>
        </form>
      </div>
    </div>
  );
}