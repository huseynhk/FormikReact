import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advanceSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckBox from "./CustomCheckBox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
    // 2 saniyeden bir submit etmek olacaq
  });
  actions.resetForm();
};

const PortalForm = () => {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: "false" }}
        onSubmit={onSubmit}
        validationSchema={advanceSchema}
      >
        {({isSubmitting}) => (
          <Form>
            <CustomInput
              label="UserName"
              name="username"
              type="text"
              placeholder="Enter UserName"
            />

            <CustomSelect
              label="University"
              name="university"
              placeholder="Enter University"
            >
              <option value="">Univerisitet Secin</option>
              <option value="bdu">BDU</option>
              <option value="sdu">SDU</option>
              <option value="ada">ADA</option>
              <option value="ldu">LDU</option>
            </CustomSelect>

            <CustomCheckBox
              label="---"
              name="isAccepted"
              type="checkbox"
            />

            <button type="submit" disabled={isSubmitting}>Save</button>

            <Link to='/'>Go Main Page</Link>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PortalForm;
