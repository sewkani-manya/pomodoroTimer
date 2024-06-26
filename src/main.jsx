import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FormDataProvider from "./formdata/FormDataContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FormDataProvider>
    <App />
  </FormDataProvider>
);
