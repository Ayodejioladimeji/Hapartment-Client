import { Formik } from "formik";
import * as EmailValidator from "email-validator";

//

const Contacts = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(async () => {
          alert("Thank you for contacting us");
          values.name = "";
          values.email = "";
          values.message = "";

          setSubmitting(false);
        }, 500);
      }}
      // handling validation
      validate={(values) => {
        let errors = {};

        if (!values.name) {
          errors.name = "Please provide your name";
        }

        if (!values.email) {
          errors.email = "Please Provide your email";
        } else if (!EmailValidator.validate(values.email)) {
          errors.email = "Invalid email address";
        }

        if (!values.message) {
          errors.message = "Please enter your message";
        }

        return errors;
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;

        return (
          <div className="contact">
            <div className="contact-box">
              <h3 className="mb-3 py-3 mx-auto text-center">
                Drop a message for us
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="form-control mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Please enter your name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && (
                    <div className="input_feedback">{errors.name}</div>
                  )}
                </div>

                <div className="form-control mb-3">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Please enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <div className="input_feedback">{errors.email}</div>
                  )}
                </div>

                <div className="form-control mb-3">
                  <label>Message</label>
                  <textarea
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="message"
                  />
                  {errors.message && touched.message && (
                    <div className="input_feedback">{errors.message}</div>
                  )}
                </div>

                <div className="form-control">
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "SENDING..." : "SEND"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Contacts;
