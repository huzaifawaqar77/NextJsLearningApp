"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { useRouter } from "next/navigation";

const SignoutButton = () => {
  const router = useRouter();
  //* Logout Submit handler
  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    await supabase.auth.signOut();
    router.push("/login");
  };
  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-md bg-slate-800 text-white font-bold"
    >
      Logout
    </button>
  );
};

export default SignoutButton;
