"use client";
import { createContext, useReducer } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const initialState = {
    user: "student",
  };
  const Formreducer = (state, action) => {
    switch (action.type) {
      case "student":
        return { user: "student" };
      case "teacher":
        return { user: "teacher" };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(Formreducer, initialState);

  return (
    <FormContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
