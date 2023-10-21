import ProfileForm from "@/app/components/ProfileForm";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
import SupaBaseServer from "@/app/components/SupaBaseServer";
import Link from "next/link";
import { redirect } from "next/navigation";
const Profile = async () => {
  const supabase = await SupaBaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  let userProfile = null;

  if (!session) return redirect("/login");
  if (session) {
    const { data: profile } = await supabase
      .from("profile")
      .select("*")
      .eq("email", session.user.email)
      .single();
    userProfile = profile;
  }
  return (
    <section className="w-full">
      <main className="my-10">
        <div className="flex items-center">
          <h4 className="text-purple-600 font-bold text-2xl">My Profile</h4>
          {session.user.email.includes("@mailto.plus") && (
            <div className="flex sm:gap-2 gap-4 ml-auto">
              <Link href="/courses/create">
                <button className="px-4 py-2 rounded-md bg-purple-500 text-white font-bold text-sm">
                  Add Course
                </button>
              </Link>
              <Link href="/courses/create/dashboard">
                <button className="px-4 py-2 rounded-md bg-yellow-500 text-black font-bold text-sm">
                  Dashboard
                </button>
              </Link>
            </div>
          )}
        </div>
        <section className="grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 max-xl:place-items-center max-xl:p-4">
          <div className="my-6 w-fit">
            <h3 className="text-purple-400 max-xl:p-4">
              Update Profile Information
            </h3>
            <ProfileForm />
          </div>
          <div className="my-6 mx-auto w-fit">
            <h3 className="text-purple-400">Current Profile Information</h3>
            {userProfile && (
              <div className="w-fit shadow shadow-md shadow-gray-500 profile my-8 p-2 rounded-md">
                <h4 className="font-bold text-xl text-purple-500">Name: </h4>
                <p>{userProfile.name}</p>
                <h4 className="font-bold text-xl text-purple-500">Email: </h4>
                <p>{userProfile.email}</p>
                <h4 className="font-bold text-xl text-purple-500">Bio: </h4>
                <p>{userProfile.bio}</p>
                <h4 className="font-bold text-xl text-purple-500">Phone: </h4>
                <p>{userProfile.phone}</p>
                <h4 className="font-bold text-xl text-purple-500">City: </h4>
                <p>{userProfile.city}</p>
                <h4 className="font-bold text-xl text-purple-500">State: </h4>
                <p>{userProfile.state}</p>
                <h4 className="font-bold text-xl text-purple-500">Address: </h4>
                <p>{userProfile.address}</p>
                <h4 className="font-bold text-xl text-purple-500">Role: </h4>
                <p>{userProfile.role}</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </section>
  );
};

export default Profile;
