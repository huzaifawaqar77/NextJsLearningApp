// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
import SupaBaseServer from "@/app/components/SupaBaseServer";
import Link from "next/link";
const TeacherDashboard = async () => {
  const supabase = await SupaBaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { data } = await supabase
    .from("Courses")
    .select()
    .eq("created_by", session.user.email);
  return (
    <section className="my-10">
      <h2 className="text-purple-700">Teacher Dashboard</h2>
      <div className="my-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data &&
          data.map((course) => (
            <Link href={"/courses/create/dashboard/" + course.id}>
              <div className="cursor-pointer course p-4 bg-white rounded-md shadow shadow-md flex flex-col justify-between gap-6">
                <div>
                  <h3 className="text-purple-500">{course.title}</h3>
                  <p className="text-justify ">
                    {course.description.slice(0, 200)}...
                  </p>
                </div>
                <div className="px-6 py-2 rounded-md bg-purple-900 text-white font-semibold">
                  Created By: {course.created_by}
                </div>
              </div>
            </Link>
          ))}
        {!data && <p>No courses found.</p>}
      </div>
    </section>
  );
};

export default TeacherDashboard;
