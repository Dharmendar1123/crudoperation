import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

function Update() {
  let history = useHistory();
  const [id, setID] = useState(null);
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setfname(localStorage.getItem("First Name"));
    setlname(localStorage.getItem("Last Name"));
    setEmail(localStorage.getItem("Email"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://6152a1214a5f22001701d7ab.mockapi.io/fakerData/${id}`, {
        fname,
        lname,
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
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={fname}
            onChange={(e) => setfname(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setlname(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Update;
