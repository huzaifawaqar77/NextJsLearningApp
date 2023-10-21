import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const CourseCreateLayout = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session.user.email.includes("@mailto.plus")) {
    return redirect("/");
  }
  return <>{children}</>;
};

export default CourseCreateLayout;
