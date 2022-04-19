import React, { useState } from "react";
import "../sass/App.css";
import Popup from "./Popup";
import { BsPlusLg } from "react-icons/bs";
import { Table } from "reactstrap";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function MissionVideo() {
  const [noOfRows, setNoOfRows] = useState(1);
  const [buttonPopup, setButtonpopup] = useState(false);
  const deleteItem=key=>{
    const allItems=this.state.noOfRows;
    allItems.splice(key,1);
    this.setState({
      this: allItems
    });
  };
  return (
    <>
      <div className="mission-contn">
        <h1>Mission Video</h1>
        <div className="container-box">
          <Table className="table-borderless text-center">
            <thead>
              <tr>
                <th>Mission</th>
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
                    <td>Video 01</td>
                    <td>Preview</td>
                    <td key={index}>
                      <i className="bi bi-trash" onClick={()=>deleteItem(index)}></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonpopup}>
          <Form>
            <h1>Add video</h1>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input
                id="exampleEmail"
                name="text"
                placeholder="with a placeholder"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input id="exampleFile" name="file" type="file" />
            </FormGroup>
            <Button onClick={() => setNoOfRows(noOfRows + 1)}>Submit</Button>
          </Form>
        </Popup>
      </div>
    </>
  );
}

export default MissionVideo;
