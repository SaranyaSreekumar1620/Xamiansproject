import React, { useState } from "react";
import "../sass/App.css";
import Popup from "./Popup";
import { BsPlusLg } from "react-icons/bs";
import { Table } from "reactstrap";
import { BsTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function Quotes() {
  const [noOfRows, setNoOfRows] = useState(1);
  const [buttonPopup, setButtonpopup] = useState(false);
  return (
    <div>
      <div className="mission-contn">
        <h2>Quotes</h2>
        <div className="container-box">
          <Table className="table-borderless">
            <thead>
              <tr>
                <th>Date</th>
                <th>Quotes</th>
                <th>Status</th>
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
                    <td>11 Dec 2021</td>
                    <td>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </td>
                    <td className="btn-tab btn-quote  border border-success text-success d-flex ">
                      <div className="toggle-btn">
                        <div className="inner-circle"></div>
                      </div>
                      Activate
                    </td>
                    <td>
                      <AiFillEdit />
                      &nbsp;&nbsp;
                      <BsTrashFill />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonpopup}>
          <Form>
            <h1>Add quotes</h1>
            <FormGroup>
              <Label for="exampleText">quotes</Label>
              <Input id="exampleText" name="text" type="textarea" />
            </FormGroup>
            <Button>cancel</Button>
            <Button onClick={() => setNoOfRows(noOfRows + 1)}>Update</Button>
          </Form>
        </Popup>
      </div>
    </div>
  );
}

export default Quotes;
