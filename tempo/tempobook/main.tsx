import React from "react";
import ReactDOM from "react-dom/client";

import "/Users/peter/dev/starter-vite-swc/src/index.css";
import Renderer from "./renderer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Renderer />
  </React.StrictMode>,
);
