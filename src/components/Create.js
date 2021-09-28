import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

function Create() {
  let history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const postData = () => {
    axios
      .post(`https://6152a1214a5f22001701d7ab.mockapi.io/fakerData`, {
        firstName,
        lastName,
        email,
      })
      .then(() => {
        history.push("/read");
      });
  };

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
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>

        <Button
          onClick={postData}
          type="submit"
          disabled={firstName === "" || lastName === "" || email === ""}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;
