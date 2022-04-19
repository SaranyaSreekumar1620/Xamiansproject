import React from "react";
import "../sass/App.css";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";

function Settings() {
  return (
    <div className="container">
      <h1 className="text-center">Settings</h1>
      <Form>
        <FormGroup row>
        <Label for="exampleEmail" sm={2}>
            Basic Information
          </Label>
          </FormGroup>
          <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="email"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>
            Password
          </Label>
          <Col sm={10}>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="email"
            />
          </Col>
        </FormGroup>
        <div className="col-md-12 bg-light text-right">
          <Button>Save Changes</Button>
        </div>
        </Form>
        <Form>
        <div>
        <FormGroup row>
        <Label for="exampleEmail" sm={2}>
            Change Information
          </Label>
          </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="email"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>
            Password
          </Label>
          <Col sm={10}>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
            />
          </Col>
        </FormGroup>
        <div className="d-flex button-set">
          <Button>Save Changes</Button>
        </div>
        </div>
      </Form>
    </div>
  );
}

export default Settings;
