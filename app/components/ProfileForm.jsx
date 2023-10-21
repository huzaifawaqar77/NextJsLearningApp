"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
const ProfileForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("student");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [error, setError] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const supabase = createClientComponentClient();
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const body = {
      name,
      role,
      age,
      bio,
      address,
      city,
      state,
      phone,
      profilePic,
      email: session.user.email,
    };
    const { data: profile } = await supabase
      .from("profile")
      .select("*")
      .eq("email", session.user.email)
      .single();
    if (!profile) {
      const { error } = await supabase.from("profile").insert([body]);
      setError(error);
    }
    if (profile) {
      const { data, error } = await supabase
        .from("profile")
        .update({ ...userProfile, ...body })
        .eq("email", session.user.email);
      if (error) {
        console.log(error);
        setError(error);
      }
      if (data) {
        setUserProfile(data);
      }
    }
    router.refresh();
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="max-xl:p-4 max-xl:shadow-none shadow shadow-md shadow-gray-500 my-8 p-4 rounded-md flex flex-col w-fit"
    >
      <label>
        <span>Your Name:</span>
        <input
          className="shadow shadow-md outline-dotted outline-purple-500"
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <span>Role:</span>
        <select
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="outline-dotted block px-6 py-3 my-2  outline-purple-500 rounded-md shadow shadow-md"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
      </label>
      <label>
        <span>Age:</span>
        <input
          className="shadow shadow-md  outline-purple-500 outline-dotted"
          required
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label>
        <span>Profile Picture Url:</span>
        <input
          className="shadow shadow-md  outline-purple-500 outline-dotted"
          required
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
      </label>
      <label>
        <span>Bio:</span>
        <textarea
          required
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="shadow shadow-md  outline-purple-500 outline-dotted"
        />
      </label>
      <label>
        <span>Address:</span>
        <input
          className="shadow  outline-purple-500 shadow-md outline-dotted"
          required
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label>
        <span>City:</span>
        <input
          className="shadow  outline-purple-500 shadow-md outline-dotted"
          required
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label>
        <span>State:</span>
        <input
          className="shadow  outline-purple-500 shadow-md outline-dotted"
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </label>
      <label>
        <span>Phone:</span>
        <input
          className="shadow  outline-purple-500 shadow-md outline-dotted"
          required
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <button className="my-4 bg-purple-600 text-white font-bold px-6 py-4 rounded-md">
        {userProfile ? "Update Profile" : "Create Profile"}
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default ProfileForm;
