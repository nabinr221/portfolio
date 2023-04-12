import React from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const Contact = () => {
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Please Enter Your Name"),
    email: Yup.string()
      .email("Invalid email")
      .required("Please Enter your email"),
    subject: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Please Enter subject "),
    message: Yup.string().min(2, "Too Short!").required("Enter Your message"),
  });
  return (
    <>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-title">
            <h2>Let's Connect</h2>
            <p>Looking for help? Fill the form and start a new adventure.</p>
            <hr />
          </div>
          <div className="contact-detail">
            <h2>Address:</h2>
            <div className="address">
              <div>
                <AiOutlineHome size={25} color="#9a9a9a" />
              </div>
              <div className="">
                <p>Chabahil, kathmandu</p>
                <p>Nepal</p>
              </div>
            </div>
          </div>
          <div className="contact-detail">
            <h2>Phone:</h2>
            <div className="phone">
              <div>
                <BsTelephone size={25} color="#9a9a9a" />
              </div>
              <div>
                <p>+977 - 9742372195</p>
                <p>+977 - 98256410999</p>
              </div>
            </div>
          </div>
          <div className="contact-detail">
            <h2> Support:</h2>
            <div className="support">
              <div>
                <AiOutlineMail size={25} color="#9a9a9a" />
              </div>
              <div>
                <p>hellosuppot@gmail.com</p>
                <p> help@.com </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <p className="title">Let's talk</p>
          <h2>Enter your project details</h2>
          <p>
            Content here, content here', making it look like readable English.
            Many desktop publishing packages
          </p>
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={contactSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div>
                  <Field
                    name="name"
                    className="input-box"
                    placeholder="Your Name"
                  />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </div>
                <div>
                  <Field
                    name="email"
                    type="email"
                    className="input-box"
                    placeholder=" Your Email"
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <Field
                    name="subject"
                    className="input-box"
                    placeholder="Subject "
                  />
                  {errors.subject && touched.subject ? (
                    <div>{errors.subject}</div>
                  ) : null}
                </div>
                <div>
                  <textarea
                    name="message"
                    className="input-box"
                    placeholder="Your Message"
                    rows="5"
                   
                  />
                  {errors.message && touched.message ? (
                    <div>{errors.message}</div>
                  ) : null}
                </div>
                <button type="submit" className="btn">Send Message</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Contact;
