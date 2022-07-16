import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { VALID_EMAIL } from "../constants";
import useLocalStorage from "../hooks/useLocalStorage";

const LogIn = () => {
  const [initialValues, setInitialValues] = useLocalStorage('loginForm',{
    email: "",
    password: "",
  })
  const validate = (values) => {
    setInitialValues(values)
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!VALID_EMAIL.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };

  return (
    <main>
      <h1>Welcome Back!</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors }) => (
          <Form>
            <label htmlFor="email">Email Address</label>
            <Field name="email" className={`${errors.email ? "error" : ""}`} />
            <ErrorMessage name="email" />

            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              className={`${errors.password ? "error" : ""}`}
            />
            <ErrorMessage name="password" />

            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
      <div>Dont  have and account? <Link to='/sign-up'>Register</Link></div>
    </main>
  );
};

export default LogIn;
