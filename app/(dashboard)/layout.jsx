import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";

export const dynamic = "force-dynamic";
export default async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    return redirect("/login");
  }
  let userProfile = null;
  if (session) {
    const { data: profile } = await supabase
      .from("profile")
      .select("*")
      .eq("email", session.user.email)
      .single();
    userProfile = profile;
  }
  return (
    <>
      <Navbar user={session.user} profilePic={userProfile} />
      {children}
    </>
  );
}
