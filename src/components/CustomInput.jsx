import { useField } from 'formik'
import React from 'react'

const CustomInput = ({label, ...props}) => {
    const [field , meta] = useField(props);
    //  console.log(field)
    //  console.log(meta)

  return (
    <>
    <label>{label}</label>
    <input {...field} {...props}
     className={meta.error ? "inputError" : ""}/>
    {meta.error && <p className="errorText">{meta.error}</p>}
    </>
  )
}

export default CustomInput