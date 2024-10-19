import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import Greeting from "./Greetings.jsx";
import RenderName from "./RenderName";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RenderName name="Sonam" />
  </StrictMode>
);
