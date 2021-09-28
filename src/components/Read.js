import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://6152a1214a5f22001701d7ab.mockapi.io/fakerData`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, email } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Email", email);
  };

  const getData = () => {
    axios
      .get(`https://6152a1214a5f22001701d7ab.mockapi.io/fakerData`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://6152a1214a5f22001701d7ab.mockapi.io/fakerData/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name </Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>{data.email}</Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button color="green" onClick={() => setData(data)}>
                      Update
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button color="red" onClick={() => onDelete(data.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <Link to="/create">
        <Button fluid>Add</Button>
      </Link>
    </div>
  );
}

export default Read;
