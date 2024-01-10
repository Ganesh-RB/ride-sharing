import "./App.css";
import "./global.css";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";

import AppRoutes from "./AppRoutes";

function App() {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [userId, setUserId] = React.useState(null);

  return (
    <NextUIProvider>
      <AppRoutes user={user} setUser={setUser} setToken={setToken} setUserId={setUserId} userId={userId} />
    </NextUIProvider>
  );
}

export default App;
