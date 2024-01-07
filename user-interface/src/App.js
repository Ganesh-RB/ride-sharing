import "./App.css";
import "./global.css";

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import Login from "./pages/Login";
import Header from "./component/Header";
import JourneyCard from "./component/JourneyCard";
import Home from "./pages/Home";

function App() {
  const [currentMenu, setCurrentMenu] = React.useState(
    window.location.pathname.substring(1) || "home"
  );

   const [menuItems, setMenuItems] = React.useState([
     {
       title: "Login",
       href: "login",
     },
   ]);

   const onLogin = () => {
      setMenuItems([
        {
          title: "logout",
          href: "/",
        },
      ]);
    }

  return (
    <NextUIProvider>
      <BrowserRouter>
        <Header className="App-header" currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} menuItems={menuItems} />
        <div className="App-body p-10 m-10">
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/login" element={<Login onLogin={onLogin} />} />
            <Route
              path="*"
              element={
                <div className="App flex justify-center items-center h-screen">
                  <JourneyCard
                    from="Lagos"
                    to="Abuja"
                    date="12/12/2021"
                    time="12:00pm"
                    price="N5000"
                    seats="2"
                  />
                </div>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
