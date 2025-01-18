import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import { LocaleProvider } from "./contexts/LocaleContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NewNotePage from "./pages/NewNotePage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import {
  getAccessToken,
  getUserLogged,
  putAccessToken,
} from "./utils/network-data";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: localStorage.getItem("theme") || "light",
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === "light" ? "dark" : "light";
          localStorage.setItem("theme", newTheme);
          return { theme: newTheme };
        });
      },

      locale: localStorage.getItem("locale") || "id",
      toggleLocale: () => {
        this.setState((prevState) => {
          const newLocale = prevState.locale === "id" ? "en" : "id";
          localStorage.setItem("locale", newLocale);
          return { locale: newLocale };
        });
      },

      initializing: true,
      authUser: null,
      onLogin: async (accessToken) => {
        putAccessToken(accessToken);
        const { error, data } = await getUserLogged();
        if (!error && data) {
          this.setState({ authUser: data });
        }
      },
      onLogout: () => {
        putAccessToken(null);
        this.setState({ authUser: null });
      },
    };
  }

  async componentDidMount() {
    document.documentElement.setAttribute("data-theme", this.state.theme);

    const accessToken = getAccessToken();

    if (accessToken) {
      const { error, data } = await getUserLogged();

      if (!error && data) {
        this.setState({ authUser: data });
      }
    }

    this.setState({ initializing: false });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute("data-theme", this.state.theme);
    }
  }

  render() {
    if (this.state.initializing) {
      return <div>Loading...</div>;
    }

    return (
      <ThemeProvider
        value={{ theme: this.state.theme, toggleTheme: this.state.toggleTheme }}
      >
        <LocaleProvider
          value={{
            locale: this.state.locale,
            toggleLocale: this.state.toggleLocale,
          }}
        >
          <UserProvider
            value={{
              authUser: this.state.authUser,
              onLogin: this.state.onLogin,
              onLogout: this.state.onLogout,
            }}
          >
            <div className="app-container">
              <Header />
              <main>
                <Routes>
                  <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/archives" element={<ArchivePage />} />
                    <Route path="/notes/new" element={<NewNotePage />} />
                    <Route path="/notes/:noteId" element={<DetailPage />} />
                  </Route>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
            </div>
          </UserProvider>
        </LocaleProvider>
      </ThemeProvider>
    );
  }
}

export default App;
