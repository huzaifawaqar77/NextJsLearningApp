"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react";

//! Components
import VideosNav from "./VideosNav";

//! Component
const Course = ({ params }) => {
  const id = params.id;

  const [course, setCourse] = useState(null);

  //! useEffect to set the first video to be displayed

  useEffect(() => {
    const fetchCourses = async () => {
      const supabase = createClientComponentClient();
      const { data } = await supabase
        .from("Courses")
        .select()
        .eq("id", id)
        .single();
      setCourse(data);
    };
    //* calling the fetch function
    fetchCourses();
  }, [id]);
  //! handling the video to be displayed
  const handleVideoDisplay = (video) => {
    console.log("Video to be displayed = ", video);
    setVideoToBeDisplayed(video);
  };
  return (
    <section className="my-10 flex justify-center w-full">
      <VideosNav
        navVideos={course?.videos}
        handleVideoDisplay={handleVideoDisplay}
      />
    </section>
  );
};

export default Course;
