"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { revalidatePath } from "next/cache";
const UpdateForm = ({ id }) => {
  const [title, setCourseTitle] = useState("");
  const [description, setDescription] = useState("");
  const [lectureNumber, setLectureNumber] = useState("");
  const [lectureName, setLectureName] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [studyMaterials, setStudyMaterials] = useState("");
  const [book, setBook] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [error, setError] = useState(null);
  //* Form submit handler function

  const handleSubmit = async (e) => {
    e.preventDefault();
    const supabase = createClientComponentClient();
    const {
      data: { session },
    } = await supabase.auth.getSession();
    let user = null;
    if (session) {
      user = session.user;
    }
    const body = {
      title,
      description,
      videos: [
        {
          lectureNumber,
          lectureName,
          videoUrl,
          studyMaterials,
          book,
          additionalInfo,
        },
      ],
      created_by: user.email,
    };

    //update the course with the id we got from params
    const { error } = await supabase.from("Courses").update(body).eq("id", id);
    if (error) {
      setError(error.message.slice(0, 50));
    }
    if (!error) {
      setError(null);
      alert("Course Updated Successfully");
      setCourseTitle("");
      setDescription("");
      setLectureNumber("");
      setLectureName("");
      setVideoUrl("");
      setStudyMaterials("");
      setBook("");
      setAdditionalInfo("");
      revalidatePath("/courses");
      redirect("/courses");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-fit flex flex-col justify-center bg-gray-100 rounded-sm p-4 my-8 createCourse shadow-md shadow"
    >
      <h3 className="text-purple-500">Course Details</h3>
      <label>
        <span>Course Title</span>
        <input
          value={title}
          onChange={(e) => setCourseTitle(e.target.value)}
          type="text"
          required
        />
      </label>
      <label>
        <span>Course Description</span>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          required
        />
      </label>
      <h3 className="text-purple-500">Video Details</h3>
      <label>
        <span>Lecture Number</span>
        <input
          value={lectureNumber}
          onChange={(e) => setLectureNumber(e.target.value)}
          type="number"
          required
        />
      </label>
      <label>
        <span>Lecture Name</span>
        <input
          value={lectureName}
          onChange={(e) => setLectureName(e.target.value)}
          type="text"
          required
        />
      </label>
      <label>
        <span>Video URL</span>
        <input
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          type="text"
          required
        />
      </label>
      <h3 className="text-purple-500">Materials</h3>
      <label>
        <span>Study Materials (recommended: link)</span>
        <input
          value={studyMaterials}
          onChange={(e) => setStudyMaterials(e.target.value)}
          type="text"
        />
      </label>
      <label>
        <span>Recommended Book (name or link)</span>
        <input
          value={book}
          onChange={(e) => setBook(e.target.value)}
          type="text"
        />
      </label>
      <label>
        <span>Additional Information</span>
        <textarea
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
        />
      </label>
      <button className="my-2 px-8 py-4 rounded-md bg-slate-700 text-white font-semibold">
        Create
      </button>
      {error && <div className="max-w-md h-auto error">{error}</div>}
    </form>
  );
};

export default UpdateForm;
