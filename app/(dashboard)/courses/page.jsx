import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
const Courses = async () => {
  const supabase = createServerComponentClient({ cookies });
  let { data, error } = await supabase.from("Courses").select();
  if (error) console.log(error);
  return (
    <main className="my-10">
      <h2 className="text-purple-600">Courses</h2>
      <div className="my-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data &&
          data.map((course) => (
            <div className="course p-4 bg-white rounded-md shadow shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-purple-500">{course.title}</h3>
                <p className="text-justify ">
                  {course.description.slice(0, 200)}...
                </p>
              </div>
              <button className="my-6 px-6 py-3 rounded-md my-4 bg-slate-600 text-white font-semibold ">
                <Link href={`/courses/${course.id}`}>Go To Course</Link>
              </button>
            </div>
          ))}
        {!data && <p>No courses found.</p>}
      </div>
    </main>
  );
};

export default Courses;
