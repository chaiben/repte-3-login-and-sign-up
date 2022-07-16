import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import { VALID_EMAIL } from "../constants";
import useLocalStorage from "../hooks/useLocalStorage";
import { displayError } from "../includes/form";
import loginImg from "../assets/login.png"

const LogIn = () => {
  const [initialValues, setInitialValues] = useLocalStorage("loginForm", {
    email: "",
    password: "",
  });
  const validate = (values) => {
    setInitialValues(values);
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
    <main className="log-in mobile-reverse">
      <section>
        <h1>Welcome Back!</h1>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <label htmlFor="email">Email Address</label>
              <Field
                name="email"
                className={`${errors.email && touched.email ? "error" : ""}`}
              />
              <ErrorMessage name="email" render={displayError} />

              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                className={`${errors.password && touched.password ? "error" : ""}`}
              />
              <ErrorMessage name="password" render={displayError} />

              <button type="submit">Login</button>
            </Form>
          )}
        </Formik>
        <div className="bottom-message">
          Don't have and account? <Link to="/sign-up">Register</Link>
        </div>
        <SocialLinks />
      </section>
      <aside>
        <img className="main-image" src={loginImg} alt="Computer" />
      </aside>
    </main>
  );
};

export default LogIn;
