"use client";
import { FormContext } from "@/context/FormContext";
import { useContext, useState } from "react";

const SelectionForm = () => {
  const [selection, setSelection] = useState("student");
  const { user, dispatch } = useContext(FormContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: selection });
    console.log("update user value", user);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 items-center justify-center my-4 rounded-sm flex-col"
    >
      <select
        className="px-4 py-2 border-2 border-black rounded-sm "
        value={selection}
        onChange={(e) => setSelection(e.target.value)}
      >
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      <button className="py-2 px-4 rounded-sm bg-blue-800 text-white font-bold">
        Submit
      </button>
    </form>
  );
};

export default SelectionForm;
