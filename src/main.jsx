import ReactDOM from "react-dom/client";
import { TodoContextProvider } from "./store/index.js";
import App from "./App.jsx";

import "./index.css";
import "./style/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
