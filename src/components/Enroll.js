import React, { useState } from "react";
import "../sass/App.css";
import Popup from "./Popup";
import { BsPlusLg } from "react-icons/bs";
import { Table } from "reactstrap";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function Enroll() {
  const [noOfRows, setNoOfRows] = useState(1);
  const [buttonPopup, setButtonpopup] = useState(false);
  return (
    <div>
      <div className="enroll-contn">
        <h2>Enrollment</h2>
        <div className="container-box-ss">
          <Table className="table-borderless">
            <thead>
              <tr>
                <th>Enrollment</th>
                <th></th>
                <th>
                  <button
                    className="btn"
                    type="button"
                    onClick={() => setButtonpopup(true)}
                  >
                    Add&nbsp;
                    <BsPlusLg />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(noOfRows)].map((elementInArray, index) => {
                return (
                  <tr>
                    <th className="col-10">Test 01</th>
                    <td className="col-lg-2">
                      <button
                        type="button"
                        className="text-warning border-warning rounded"
                        onClick={() => setButtonpopup(true)}
                      >
                        Quiz&nbsp;
                        <BsPlusLg />
                      </button>
                    </td>
                    <td className="btn-tab col-lg-10 border border-success text-success d-flex">
                      <div className="toggle-btn">
                        <div className="inner-circle"></div>
                      </div>
                      Activate
                    </td>
                    <td className="col-lg-1">
                      <button
                        type="button"
                        className="rounded"
                        onClick={() => setButtonpopup(true)}
                      ></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonpopup}>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Quiz</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Questions</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="3 people go onto a bus, 3 more people come off, 6 people com on. 3 more people come on. How people are in the bus if 3 come on?"
                type="password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Answers</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Add Answers</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="text"
              />
            </FormGroup>

            <Button>cancel</Button>
            <Button onClick={() => setNoOfRows(noOfRows + 1)}>Submit</Button>
          </Form>
        </Popup>
      </div>
    </div>
  );
}

export default Enroll;
