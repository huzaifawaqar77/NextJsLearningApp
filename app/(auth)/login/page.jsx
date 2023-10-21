"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
//* Components
import AuthForm from "../../(dashboard)/AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  //* Some piece of state to hold the error message

  const [error, setError] = useState(null);
  const router = useRouter();

  //* Login Submit handler function

  const handleLogin = async (e, email, password) => {
    e.preventDefault();

    //* create a supabase client

    const supabase = createClientComponentClient();

    //* login with email and password

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    //* conditionally render error message

    if (error) {
      setError(error.message);
    }

    if (!error) {
      router.refresh();
      router.push("/courses");
    }
  };
  return (
    <section className="my-10 flex items-center justify-center flex-col p-4">
      <h2>Login</h2>
      <AuthForm handleSubmit={handleLogin} error={error} />
    </section>
  );
};

export default Login;
