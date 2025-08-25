import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from "./components/GlobalStyles";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </GlobalStyles>
  </StrictMode>
);
