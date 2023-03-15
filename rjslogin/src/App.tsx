import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import { RegisterPage } from "./components/pages/RegisterPage";
import HomePage from "./components/pages/HomePage";
import { AuthProvider } from "./context/AuthContext";
import GlobalStyles from "./styles/GlobalStyles";
import { Provider } from "react-redux";
import { store } from "./redux/stores/store";

const AppState = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <AppState>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppState>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
