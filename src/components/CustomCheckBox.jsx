import { useField } from "formik";
import React from "react";

const CustomCheckBox = ({ label ,...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkBox">
        <label htmlFor="">{label}</label>
        <input
          {...field}
          {...props}
          id="check"
          className={meta.error ? "inputError" : ""}
        />
        <span>Qebul Edirem</span>
      </div>
      {meta.error && <p className="errorText">{meta.error}</p>}
    </>
  );
};

export default CustomCheckBox;
