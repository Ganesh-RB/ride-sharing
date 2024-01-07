import React from "react";
import {
  Card,
  Input,
  CardHeader,
  CardBody,
  Divider,
  Checkbox,
} from "@nextui-org/react";

import { EyeFilledIcon } from "../utils/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../utils/EyeSlashFilledIcon";
import { Mail } from "../utils/Mail";
import { Password } from "../utils/Password";

export default function Login(props) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);
  
  const loginHandler = () => {
    // redirect to home page
    props.onLogin();    
    window.location.href = "/";

  }

  return (
    <Card className="min-w-[400px]">
      <CardHeader className="flex gap-3">Login</CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-5 p-10">
        <Input
          variant="bordered"
          onValueChange={(value) => setMail(value)}
          label="Email"
          labelPlacement="outside"
          placeholder="Email"
          className="max-w-xs"
          defaultValue="name@company.com"
          startContent={<Mail fill={"currentColor"} />}
        />
        <Input
          variant="bordered"
          onValueChange={(value) => setPassword(value)}
          placeholder="Password"
          label="Password"
          labelPlacement="outside"
          contentLeft={<Password fill="currentColor"/>}
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
        <button className="bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-md focus:outline-none w-full mt-3 text-sm" onClick={loginHandler}>
          Login
        </button>
      </CardBody>
    </Card>
  );
}
