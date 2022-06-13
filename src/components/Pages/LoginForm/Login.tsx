import React, { useState } from "react"
import { Formik, Form,} from "formik";
import './Apps.css'
import * as Yup from 'yup';
import Button from '@mui/material/Button';

import FormikFiled from '../FormikFiled'
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/apiCalls";

interface FormValues {
    name:string,
    password:string;
}

const initialValues: FormValues= {
    name:'',
    password:'',
};

const LowercaseRegx = /(?=.*[a-z])/;
const UppercaseRegx = /(?=.*[A-Z])/;
const oneNumber = /(?=.*[0-9])/;

const SignupSchema = Yup.object().shape({
    name:Yup.string()
        .min(2,'Too Short !')
        .required('Name Is Required'),
    password:Yup.string()
        .matches(LowercaseRegx,'Password Must Have At Least One Lowercase')
        .matches(UppercaseRegx,'Password Must Have At Least One Uppercase')
        .matches(oneNumber,'Password Must Have At Least One Number')
        .min(8,'Password Must Be More Than 8 Char')
        .required('Password Is Requird'),
})

const Login = () => {
  const dispatch = useDispatch()
    const handelSubmit = (values: FormValues ):void=>{
    //    axios.get('https://wtm-sample-apis.staging.wtmsrv.com/api/auth/login',values)
    };
  return (
    <div className="App">
        <h1 className="Login">Log in</h1>
        <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handelSubmit}
        >
        {({dirty,isValid}) =>{
            return(
                <Form>
                <FormikFiled name= 'name' label="Username" required/>
                <FormikFiled name= 'password' label="Password" required type="password"/>
                <div className="Button">
                <Button variant="contained" disabled={!dirty || !isValid} type="submit">Login</Button>
                </div>
                </Form>
            )
        }}    

        </Formik>
        <a href="/signup">Or Sign Up</a>
    </div>
  )
}

export default Login ;