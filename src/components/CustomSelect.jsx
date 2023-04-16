import React from "react";
import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);


  return (
    <>
      <label>{label}</label>
      <select {...field} {...props} className={meta.error ? "inputError" : ""} />
      {meta.error && <p className="errorText">{meta.error}</p>}
    </>
  );
};

export default CustomSelect;
