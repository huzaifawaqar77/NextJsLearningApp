import SignoutButton from "./SignoutButton";
import Link from "next/link";

const Navbar = async ({ user, profilePic }) => {
  return (
    <nav className="navigation">
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#8769ff"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>
      </Link>
      <div className="flex gap-6 items-center max-lg:hidden">
        <Link href="/">Learnfast</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/about">About</Link>
      </div>
      {user && (
        <>
          <div className="ml-auto flex gap-2 justify-between items-center">
            <p className="text-purple-500 font-semibold max-lg:hidden">{`Hello! ${user.email}`}</p>
            <Link href="/profile">
              {!profilePic && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
              {profilePic && (
                <img
                  src={profilePic.profilePic}
                  alt="profile picture"
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
            </Link>
          </div>
          <SignoutButton />
        </>
      )}
      {!user && (
        <>
          <Link href="/login" className="ml-auto">
            Log In
          </Link>
          <Link href="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
