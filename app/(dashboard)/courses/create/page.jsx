import CreateCourseForm from "./createCourse";

const CreateCourse = () => {
  return (
    <section className="my-10 flex flex-col items-center justify-center">
      <h2 className="text-purple-500">Create Course</h2>
      <CreateCourseForm />
    </section>
  );
};

export default CreateCourse;
