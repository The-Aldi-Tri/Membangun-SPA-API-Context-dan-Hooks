import React from "react";
import { Link } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import LocaleContext from "../contexts/LocaleContext";

function RegisterPage() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <section className="register-page">
      <h2>
        {locale === "en"
          ? "Fill the form to register account."
          : "Isi form untuk mendaftar akun."}
      </h2>
      <RegisterInput />
      {locale === "en" ? (
        <p>
          {"Already have an account? "}
          <Link to="/login">Login here</Link>
        </p>
      ) : (
        <p>
          {"Sudah punya akun? "}
          <Link to="/login">Daftar di sini</Link>
        </p>
      )}
    </section>
  );
}

export default RegisterPage;
