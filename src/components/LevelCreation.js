import React, { useState } from "react";
import "../sass/App.css";
import { BsPlusLg } from "react-icons/bs";
import Popup from "./Popup";
import { Form, FormGroup, Row, Col, Label, Input, Button } from "reactstrap";
export default function LevelCreation() {
  const [noOfRows, setNoOfRows] = useState(1);
  const [buttonPopup, setButtonpopup] = useState(false);
  return (
    <>
      <h1 className="p-5">Level Creation</h1>
      <div className="container p-5 d-flex">
        <h3 className="title-lvl">Levels</h3>
        <button
          type="button"
          class="btn-primary text-dark me-3 btn-lvl"
          onClick={() => setNoOfRows(noOfRows + 1)}
        >
          <BsPlusLg />
          Add Level
        </button>
        <table class="table table-hover table-borderless p-5">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {[...Array(noOfRows)].map((elementInArray, index) => {
              return (
                <tr>
                  <th className="col-10">Task{index}</th>
                  <td className="col-lg-1">
                    <button
                      type="button"
                      className="text-warning border-warning rounded"
                      onClick={() => setButtonpopup(true)}
                    >
                      Task&nbsp;
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
                    >
                      ^
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Popup trigger={buttonPopup} setTrigger={setButtonpopup}>
          <Form>
            <Row form>
              <Col md={12}>
                <FormGroup>
                  <Label for="exampleEmail bold">Add Task</Label>
                  <Input id="exampleEmail" name="email" type="email" />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label for="examplePassword">Add Quiz</Label>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Quiz Name</Label>
                  <Input id="examplePassword" name="password" type="password" />
                  <Label>Quiz Number</Label>
                  <Input id="examplePassword" name="password" type="password" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleAddress">Questions</Label>
              <Input
                id="exampleAddress"
                name="address"
                value="3 people go onto a bus, 3 more people come off, 6 people com on. 3 more people come on. How people are in the bus if 3 come on?"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress2">Answers</Label>
              <Input id="exampleAddress2" name="address2" />
            </FormGroup>
            <Button  onClick={() => setNoOfRows(noOfRows + 1)}>Update</Button>
            <Button>Cancel</Button>
          </Form>
        </Popup>
      </div>
    </>
  );
}
