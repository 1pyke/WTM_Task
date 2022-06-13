import React from 'react'
import { Field,ErrorMessage } from 'formik';
import TextField from '@mui/material/TextField';
import './FormikField.css'

interface FormikFieldProps {
    name:string,
    label:string,
    type?:string,
    required?:boolean;
}
const FormikField: React.FC<FormikFieldProps> = ({name,label,type = 'text', required= false}) => {
  return (
    <div className='FormikFiled'>
        <Field 
        required={required}
        as={TextField}
        autoComplete='off'
        id="outlined-basic"
        fullWidth
        name={name}
        ariant="outlined"
        variant="outlined"
        type={type}
        label={label}
        helperText={<ErrorMessage name={name}/>}
        />
    </div>
    
  ) 
}

export default FormikField