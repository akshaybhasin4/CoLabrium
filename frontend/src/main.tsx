import { render } from "preact";
import "./index.css";
import { App } from "./app.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext.tsx";

render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("app")!
);
