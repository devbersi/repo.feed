import React from "react";
import Home from "./Pages/home";
import "./global.scss";
import { RepoRoutes } from "./routes/main.routes";
import { ListProvider } from "./Context/repoContext";

function App() {
  return (
    <div className="AppMain">
      <ListProvider>
        <RepoRoutes />
      </ListProvider>
    </div>
  );
}

export default App;
