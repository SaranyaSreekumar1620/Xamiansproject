import React, { useContext, useState } from "react";
import "../sass/App.css";
import { Form, FormGroup, Input, Label } from "reactstrap";
import {
  BsFillEnvelopeFill,
  BsFileEarmarkLock2Fill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FirebaseContext } from "../store/Context";
import { useHistory } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(mail, password)
      .then((result) => {
        result.user.updateProfile({ displayName: username }).then(() => {
          firebase
            .firestore()
            .collection("user")
            .add({
              id: result.user.uid,
              username: username,
              phone: phone,
            })
            .then(() => {
              history.push("/Login");
            });
        });
      });
  };
  return (
    <div>
      <div className="backimg">
        <Form className="login-form" onSubmit={handleSubmit}>
          <div className="txt text-light text-center">
            <h1>
              <span className="font-weight-bold">XAMIANS</span>
            </h1>
            <h4>Signup</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </p>
          </div>
          <div className="form-items">
            <FormGroup>
              <Label className="text-light">
                <AiOutlineUser />
                UserName
              </Label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-transparent border-0 border-bottom text-light"
              />
            </FormGroup>
            <FormGroup>
              <Label className="text-light">
                <BsFillEnvelopeFill />
                Email
              </Label>
              <Input
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className="bg-transparent border-0 border-bottom text-light"
              />
            </FormGroup>
            <FormGroup>
              <Label className="text-light">
                <BsFillTelephoneFill />
                Phone
              </Label>
              <Input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
            <button className="btn btn-lg btn-dark btn-block">Signup</button>
            <a
              className="text-center text-decoration-none text-light"
              href="/Login"
            >
              Login
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
