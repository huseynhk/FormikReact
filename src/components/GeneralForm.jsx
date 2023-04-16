import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";

const GeneralForm = () => {

  const onSubmit = async (values , actions) => {
    console.log(values)
    console.log(actions)

    await new Promise((resolve)=>{
      setTimeout(resolve,2000)
      // 2 saniyeden bir submit etmek olacaq
    })
    actions.resetForm();
  };

  const { values, errors, handleChange, handleSubmit ,isSubmitting } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: basicSchema,
    onSubmit,
  });
  // console.log(formik)
  //   console.log(values)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>Email</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="Enter Email"
            className={errors.email ? "inputError" : ""}
          />
          {errors.email && <p className="errorText">{errors.email}</p>}
        </div>

        <div className="inputDiv">
          <label>Age</label>
          <input
            type="number"
            value={values.age}
            onChange={handleChange}
            id="age"
            placeholder="Enter Age"
            className={errors.age ? "inputError" : ""}
          />
          {errors.age && <p className="errorText">{errors.age}</p>}
        </div>

        <div className="inputDiv">
          <label>PassWord</label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="Enter PassWord"
            className={errors.password ? "inputError" : ""}
          />
          {errors.password && <p className="errorText">{errors.password}</p>}
        </div>

        <div className="inputDiv">
          <label>ConfirmPassword</label>
          <input
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            id="confirmPassword"
            placeholder="Enter Password Again"
            className={errors.confirmPassword ? "inputError" : ""}
          />
          {errors.confirmPassword && (
            <p className="errorText">{errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit" disabled={isSubmitting} >Submit</button>

        <Link to='/portal'>Go Portal</Link>
      </form>
    </div>
  );
};

export default GeneralForm;
