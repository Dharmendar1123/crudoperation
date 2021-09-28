import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validationSchema = Yup.object({
  fname: Yup.string().required("Required!"),
  lname: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
});

function Create() {
  let history = useHistory();
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const postData = () => {
    if (fname !== "" && lname !== "" && email !== "") {
      axios
        .post(`https://6152a1214a5f22001701d7ab.mockapi.io/fakerData`, {
          fname,
          lname,
          email,
        })
        .then(() => {
          history.push("/read");
        });
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            {...formik.getFieldProps("fname")}
          />
          {formik.touched.fname && formik.errors.fname ? (
            <div className="error">{formik.errors.fname}</div>
          ) : null}
        </Form.Field>

        <Form.Field>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            {...formik.getFieldProps("lname")}
          />
          {formik.touched.lname && formik.errors.lname ? (
            <div className="error">{formik.errors.lname}</div>
          ) : null}
        </Form.Field>

        <Form.Field>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </Form.Field>

        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;
