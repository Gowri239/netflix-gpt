import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="rounded-lg absolute w-4/12 p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          className="bg-gray-700 p-4 my-2 w-full rounded-lg"
          type="text"
          placeholder="Email or mobile number"
        />
        <input
          className="bg-gray-700 p-4 my-2 w-full rounded-lg"
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-700 p-4 my-6 w-full rounded-lg">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
