import { useState } from "react";
import "./RegisterPage.css";
import { registerUser } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { setLocalStorage } from "../../services/localStorage";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { Header } from "../Header/Header";


export default function RegisterContainer() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
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
      newErrors.email = t("register.errorEmail");
    if (form.password.length < 5 || form.password.length > 15)
      newErrors.password = t("register.errorPassword");
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = t("register.errorConfirm");
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    try {
      const data = await registerUser(form.email, form.password);
      console.log(data);
      
      setLocalStorage("logeado", data.accessToken);
      navigate("/");
    } catch (error) {
      setApiError(error.message);
    }
  };

  return (
    <>
      <Header/>
    <div className="register-bg">

      <div className="register-square register-square--a" />
      <div className="register-square register-square--b" />

      <div className="register-card">
        <div className="register-header">
          <h1 className="register-header__title">{t("register.title")}</h1>
          <div className="register-header__underline" />
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="register-row">
            <div className="register-field">
              <label className="register-label">{t("register.email")}</label>
              <input
                className={`register-input${errors.email ? " register-input--error" : ""}`}
                type="email"
                name="email"
                placeholder={t("register.placeholderEmail")}
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className="register-error">{errors.email}</p>}
            </div>
          </div>

          <div className="register-row">
            <div className="register-field">
              <label className="register-label">{t("register.password")}</label>
              <input
                className={`register-input${errors.password ? " register-input--error" : ""}`}
                type="password"
                name="password"
                placeholder={t("register.placeholderPassword")}
                value={form.password}
                onChange={handleChange}
              />
              {errors.password && <p className="register-error">{errors.password}</p>}
            </div>
            <div className="register-field">
              <label className="register-label">{t("register.confirmPassword")}</label>
              <input
                className={`register-input${errors.confirmPassword ? " register-input--error" : ""}`}
                type="password"
                name="confirmPassword"
                placeholder={t("register.placeholderConfirm")}
                value={form.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <p className="register-error">{errors.confirmPassword}</p>}
            </div>
          </div>

          {apiError && <p className="register-error" style={{ marginBottom: "12px" }}>{apiError}</p>}

          <button type="submit" className="register-btn-submit">
            {t("register.submit")}
          </button>

          <p className="register-footer">
            {t("register.hasAccount")}{" "}
            <a href="/login">{t("register.login")}</a>
          </p>
        </form>
      </div>
    </div>
    </>
  );
}