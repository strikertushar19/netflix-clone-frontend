import React from "react";
import Logo from "./Logo";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
const Login = () => {
  return (
    <div className="login_bg bg-cover h-screen grid place-items-center">
      <Logo style="w-60 top-0  absolute m-12" />
      <div className=" bg-[rgba(0,0,0,0.80)] p-10 w-80 space-y-6">
        <h1 className="text-2xl text-white  m-20 top-0 font-bold">Sign In</h1>
        <button className=" bg-white text-black flex gap-2 items-center p-4 text-sm-bold "

          onClick={() => signIn("google")}

        >
          {" "}
          <FcGoogle className=" text-3xl"/>
          SIGN IN WITH GOOGLE{" "}
        </button>
      </div>
    </div>
  );
};

export default Login;
