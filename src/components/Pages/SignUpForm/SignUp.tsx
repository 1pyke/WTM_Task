import React from "react"
import { Formik, Form,} from "formik";
import './SignUp.css'
import * as Yup from 'yup';
import Button from '@mui/material/Button';

import FormikFiled from '../FormikFiled'
import axios from "axios";
import { connect, useSelector } from "react-redux";

interface FormValues {
    name:string,
    email:string,
    password:string;
}

const initialValues: FormValues= {
    name:'',
    email:'',
    password:'',
};

const LowercaseRegx = /(?=.*[a-z])/;
const UppercaseRegx = /(?=.*[A-Z])/;
const oneNumber = /(?=.*[0-9])/;

const SignupSchema = Yup.object().shape({
    name:Yup.string()
        .min(2,'Too Short !')
        .required('Name Is Required'),
        email:Yup.string()
        .min(2,'Too Short !')
        .required('Email Is Required'),
    password:Yup.string()
        .matches(LowercaseRegx,'Password Must Have At Least One Lowercase')
        .matches(UppercaseRegx,'Password Must Have At Least One Uppercase')
        .matches(oneNumber,'Password Must Have At Least One Number')
        .min(8,'Password Must Be More Than 8 Char')
        .required('Password Is Requird'),  
})

const SignUp = () => {
  const user = useSelector((state) => state)
  
    const handelSubmit = (values: FormValues ):void=>{
        axios.post("https://wtm-sample-apis.staging.wtmsrv.com/api/auth/signup",values).then((res)=>{
        console.log(user,res);

        })
    };
  return (
    <div className="App">
        <h1 className="Login">Sign Up</h1>
        <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handelSubmit}
        >
        {({dirty,isValid}) =>{
            return(
                <Form>
                <FormikFiled name= 'name' label="Username" required/>
                <FormikFiled name= 'email' label="Email" required/>
                <FormikFiled name= 'password' label="Password" required type="password"/>
                <div className="Button">
                <Button variant="contained" disabled={!dirty || !isValid} type="submit">Sign Up</Button>
                </div>
                </Form>
            )
        }}    

        </Formik>
    </div>
  )
}
const mapStateToProps = function(state:any) {
    return {
      userData: state,
    }
  }
export default connect(mapStateToProps)(SignUp)
 ;