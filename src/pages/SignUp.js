import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { VALID_EMAIL, VALID_PASSWORD } from "../constants";
import useLocalStorage from "../hooks/useLocalStorage";


const SignUp = () => {
  const [initialValues, setInitialValues] = useLocalStorage('signUpForm',{
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const validate = (values) => {
    setInitialValues(values)
    const errors = {};
    if (!values.fullName) {
      errors.fullName = "Required";
    }

    if (!values.userName) {
      errors.userName = "Required";
    } 

    if (!values.email) {
      errors.email = "Required";
    } else if (!VALID_EMAIL.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (!VALID_PASSWORD.test(values.password)) {
      errors.password = "Invalid password";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Confirm password must match the password field";
    }

    return errors;
  };

  return (
    <main>
      <h1>Please Fill out form to Register!</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors }) => (
          <Form>
            <label htmlFor="fullName">Full Name:</label>
            <Field name="fullName" className={`${errors.fullName ? "error" : ""}`} />
            <ErrorMessage name="fullName" />
            
            <label htmlFor="userName">Username:</label>
            <Field name="userName" className={`${errors.userName ? "error" : ""}`} />
            <ErrorMessage name="userName" />

            <label htmlFor="email">Email:</label>
            <Field name="email" className={`${errors.email ? "error" : ""}`} />
            <ErrorMessage name="email" />

            <label htmlFor="password">Password:</label>
            <Field
              name="password"
              type="password"
              className={`${errors.password ? "error" : ""}`}
            />
            <ErrorMessage name="password" />

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Field
              name="confirmPassword"
              type="password"
              className={`${errors.password ? "error" : ""}`}
            />
            <ErrorMessage name="confirmPassword" />

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
      <div>Yes i have an account? <Link to='/'>Login</Link></div>
    </main>
  );
};

export default SignUp;
