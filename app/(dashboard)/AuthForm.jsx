"use client";
import { useState } from "react";
const AuthForm = ({ handleSubmit, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => handleSubmit(e, email, password)}
      className="p-4 flex flex-col rounded-md border-2 border-slate-700 my-4"
    >
      <label className="block">
        <span className="block my-2 font-semibold text-slate-500">Email:</span>
        <input
          type="email"
          value={email}
          placeholder="JohnDoe@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full h-10 w-64 rounded-md focus:outline-none p-2"
        />
      </label>
      <label className="block">
        <span className="block my-2 font-semibold text-slate-500">
          Password:
        </span>
        <input
          type="password"
          value={password}
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full h-10 w-64 rounded-md focus:outline-none p-2"
        />
      </label>
      <button className="px-6 py-2 rounded-md bg-slate-600 text-white font-bold my-6 hover:transform hover:scale-105 transition-all">
        Submit
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AuthForm;
