import UpdateForm from "./updateForm";

const UpdateCourse = async ({ params }) => {
  const id = params.id;
  return (
    <section className="my-10">
      <h2 className="text-purple-700">Update Course</h2>
      <UpdateForm id={id} />
    </section>
  );
};

export default UpdateCourse;
