import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store";
import translations from "./translations";
import { I18nextProvider } from "react-i18next";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={translations}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
