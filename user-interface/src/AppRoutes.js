import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NextUIProvider, User } from "@nextui-org/react";

import Login from "./pages/Login";
import Header from "./component/Header";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

export default function AppRoutes(props) {
  console.log("AppRoutes Props", props);

  const [currentMenu, setCurrentMenu] = React.useState(
    window.location.pathname.substring(1) || "home"
  );

  const [menuItems, setMenuItems] = React.useState([
    {
      title: "Login",
      href: "login",
    },
  ]);

  const logoutHandler = () => {
    props.setUser(null);
    setMenuItems([
      {
        title: "login",
        href: "/login",
      },
    ]);
  };

  const onLogin = () => {
    setMenuItems([
      {
        title: `Hello, ${props.user}`,
        href: "/",
      },
      {
        title: "logout",
        href: "/logout",
        handler: logoutHandler,
      },
    ]);
  };

  return (
    <BrowserRouter>
      <Header
        className="App-header"
        currentMenu={currentMenu}
        setCurrentMenu={setCurrentMenu}
        menuItems={menuItems}
      />
      <div className="App-body px-10 py-2">
        <Routes>
          <Route
            path="/"
            element={
              props.user !== null ? (
                props.user === "admin" ? (
                  <Admin />
                ) : (
                  <Home user={props.user} userId={props.userId} />
                )
              ) : (
                <Navigate to={"/login"} replace />
              )
            }
          />
          <Route
            path="/login"
            element={
              <Login
                onLogin={onLogin}
                user={props.user}
                setUser={props.setUser}
                setToken={props.setToken}
                setUserId={props.setUserId}
              />
            }
          />
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
