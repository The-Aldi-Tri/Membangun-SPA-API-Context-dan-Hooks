import React from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import LocaleContext from "../contexts/LocaleContext";

function LoginPage() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <section className="login-page">
      <h2>
        {locale === "en"
          ? "Login to use app, please."
          : "Yuk, login untuk menggunakan aplikasi."}
      </h2>
      <LoginInput />
      {locale === "en" ? (
        <p>
          {"Don't have an account? "}
          <Link to="/register">Register here</Link>
        </p>
      ) : (
        <p>
          {"Belum punya akun? "}
          <Link to="/register">Daftar di sini</Link>
        </p>
      )}
    </section>
  );
}

export default LoginPage;
