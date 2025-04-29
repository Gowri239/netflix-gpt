import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validation";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  const handleSubmit = () => {
    const message = checkValidateData(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-lg absolute w-4/12 p-12 bg-black/85 my-30 mx-auto right-0 left-0 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="border border-gray-500 p-4 my-2 w-full rounded-lg"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="border border-gray-500 p-4 my-2 w-full rounded-lg"
          type="text"
          placeholder="Email adress"
        />
        <input
          ref={password}
          className="p-4 border border-gray-500 my-2 w-full rounded-lg"
          type="password"
          placeholder="Password"
        />
        <p className="font-bold text-red-700 text-lg px-1 my-2">
          {errorMessage}
        </p>
        <button
          className="bg-red-700 p-2 my-5 w-full rounded-lg cursor-pointer"
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex">
          <p className="text-gray-300">
            {isSignInForm ? "New to Netflix?" : "Already a registered user?"}
          </p>
          <p
            className="font-bold pl-1 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign in"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
