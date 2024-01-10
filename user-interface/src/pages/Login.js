import React from "react";
import {
  Card,
  Input,
  CardHeader,
  CardBody,
  Divider,
  Checkbox,
  Tabs,
  Tab,
} from "@nextui-org/react";

import { EyeFilledIcon } from "../utils/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../utils/EyeSlashFilledIcon";
import { Mail } from "../utils/Mail";
import { Password } from "../utils/Password";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login(props) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);
  const navigate = useNavigate();

  const loginHandler = () => {
    fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("login success");
          props.setUser(username);
          res.json().then((res) => {
            console.log("Revceived  response for login", res);
            console.log("setting token", res.token);
            console.log("setting userinfo", res.userinfo);
            console.log("setting user id", res.userinfo.id);
            console.log("setting user", res.userinfo.name);
            props.setToken(res.token);
            props.setUserId(res.userinfo.id);
            props.setUser(res.userinfo.name);
          });
        }
        props.onLogin();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signupHandler = () => {
    fetch("/signup", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log("signup success");
        navigate("/login");
      }
    });
  };

  return props.user == null ? (
    <div className="flex flex-col">
      <Tabs aria-label="Options">
        <Tab key="Login" title="Login">
          <Card className="min-w-[400px] max-w-[500px]">
            <CardBody className="flex flex-col gap-5 p-10">
              <Input
                variant="bordered"
                onValueChange={(value) => setUsername(value)}
                label="Username"
                labelPlacement="outside"
                placeholder="user"
                className="max-w-xs"
                defaultValue=""
                startContent={<Mail fill={"currentColor"} />}
              />
              <Input
                variant="bordered"
                onValueChange={(value) => setPassword(value)}
                placeholder="Password"
                label="Password"
                labelPlacement="outside"
                contentLeft={<Password fill="currentColor" />}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="max-w-xs"
              />
              <div className="flex justify-between items-center text-xs">
                <Checkbox label="Remember me" className="text-xs">
                  Remember Me
                </Checkbox>
                <button className="text-primary-500 hover:underline focus:outline-none text-xs">
                  Forgot password?
                </button>
              </div>
              <button
                className="bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-md focus:outline-none w-full mt-3 text-sm"
                onClick={loginHandler}
              >
                Login
              </button>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="signup" title="sign up">
          <Card className="min-w-[400px] max-w-[500px]">
            <CardBody className="flex flex-col gap-5 p-10">
              <Input
                variant="bordered"
                onValueChange={(value) => setUsername(value)}
                label="Username"
                labelPlacement="outside"
                placeholder=""
                className="max-w-xs"
                defaultValue=""
                startContent={<Mail fill={"currentColor"} />}
              />
              <Input
                variant="bordered"
                onValueChange={(value) => setPassword(value)}
                placeholder="Password"
                label="Password"
                labelPlacement="outside"
                contentLeft={<Password fill="currentColor" />}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="max-w-xs"
              />

              <button
                className="bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-md focus:outline-none w-full mt-3 text-sm"
                onClick={signupHandler}
              >
                sign up
              </button>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  ) : (
    <Navigate to={"/"} replace />
  );
}
