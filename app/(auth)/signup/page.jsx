"use client";

import { useContext, useState } from "react";
import { FormContext } from "@/context/FormContext";

//* Components
import AuthForm from "../../(dashboard)/AuthForm";
import SelectionForm from "../../(dashboard)/SelectionForm";
import SorryMessage from "../../(dashboard)/SorryMessage";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const Signup = () => {
  //* Some piece of state to hold the error message

  const [error, setError] = useState(null);
  const router = useRouter();

  //* Form Context Value Destructure

  const { user } = useContext(FormContext);

  //* Signup Submit handler function

  const handleSignup = async (e, email, password) => {
    e.preventDefault();

    //* create a supabase client
    const supabase = createClientComponentClient();

    //* signup with email and password
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `{location.origin}/api/auth/callback`,
      },
    });

    //* conditionally render error message
    if (error) {
      setError(error.message);
    }

    if (!error) {
      router.push("/auth/verify");
    }
  };

  //* Return from the Signup Component

  return (
    <section className="my-10 min-w-min flex flex-col items-center justify-center h-full">
      <h1>Signup</h1>
      <SelectionForm />
      {user === "teacher" && <SorryMessage />}
      {user === "student" && (
        <section className="my-10 flex items-center justify-center flex-col p-4">
          <h2>Signup</h2>
          <AuthForm handleSubmit={handleSignup} />
          {error && <div className="error">{error}</div>}
        </section>
      )}
    </section>
  );
};

export default Signup;
