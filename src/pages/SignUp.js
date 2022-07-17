import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import { VALID_EMAIL, VALID_PASSWORD, VALID_USERNAME } from "../constants";
import useLocalStorage from "../hooks/useLocalStorage";
import { displayError } from "../includes/form";
import signUpImg from "../assets/signup.png"
import './SignUp.css'

const SignUp = () => {
  const [initialValues, setInitialValues] = useLocalStorage("signUpForm", {
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const validate = (values) => {
    setInitialValues(values);
    const errors = {};
    if (!values.fullName) {
      errors.fullName = "Required";
    }

    if (!values.userName) {
      errors.userName = "Required";
    } else if (!VALID_USERNAME.test(values.userName)) {
      errors.userName = "This fiels do not accept spaces or dot (.)"
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
    <main className="sign-up">
      <div className="abstract-background2"></div>
      <aside>
        <img className="main-image" src={signUpImg} alt="Computer" />
      </aside>
      <section>
        <h1>Please Fill out form to Register!</h1>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <label htmlFor="fullName">Full Name:</label>
              <Field
                name="fullName"
                className={`${errors.fullName && touched.fullName ? "error" : ""}`}
              />
              <ErrorMessage name="fullName" render={displayError} />

              <label htmlFor="userName">Username:</label>
              <Field
                name="userName"
                className={`${errors.userName && touched.userName ? "error" : ""}`}
              />
              <ErrorMessage name="userName" render={displayError} />

              <label htmlFor="email">Email:</label>
              <Field
                name="email"
                className={`${errors.email && touched.email ? "error" : ""}`}
              />
              <ErrorMessage name="email" render={displayError} />

              <label htmlFor="password">Password:</label>
              <Field
                name="password"
                type="password"
                className={`${errors.password && touched.password ? "error" : ""}`}
              />
              <ErrorMessage name="password" render={displayError} />

              <label htmlFor="confirmPassword">Confirm Password:</label>
              <Field
                name="confirmPassword"
                type="password"
                className={`${errors.confirmPassword && touched.confirmPassword ? "error" : ""}`}
              />
              <ErrorMessage name="confirmPassword" render={displayError} />

              <button type="submit">Register</button>
            </Form>
          )}
        </Formik>
        <div className="bottom-message">
          Yes I have an account? <Link to="/">Login</Link>
        </div>
        <SocialLinks />
      </section>
    </main>
  );
};

export default SignUp;
