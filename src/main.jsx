import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from "./components/GlobalStyles";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <GlobalStyles>
      <Provider store={store}>
    <App />
      </Provider>
    </GlobalStyles>
  </StrictMode>
);
