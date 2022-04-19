import React, { useContext, useState } from "react";
import "../sass/App.css";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { BsFillEnvelopeFill, BsFileEarmarkLock2Fill } from "react-icons/bs";
import { FirebaseContext } from "../store/Context";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/Navbar");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div>
        <div className="backimg">
          <Form onSubmit={handleSubmit} className="login-form h-75">
            <div className="txt text-light text-center">
              <h1>
                <span className="font-weight-bold">XAMIANS</span>
              </h1>
              <h4>Login</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </p>
            </div>
            <div className="form-items">
              <FormGroup>
                <Label className="text-light">
                  <BsFillEnvelopeFill />
                  Email
                </Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-0 border-bottom text-light"
                />
              </FormGroup>
              <FormGroup>
                <Label className="text-light">
                  <BsFileEarmarkLock2Fill />
                  Password
                </Label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent border-0 border-bottom text-light"
                />
              </FormGroup>
              <div className="text-center ">
                <a href="/forgrt" className="text-decoration-none text-light">
                  Forget Password
                </a>
              </div>
              <button className="btn btn-lg btn-dark btn-block">Login</button>
              <a className="text-center text-decoration-none text-light" href="/signup">Signup</a>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
