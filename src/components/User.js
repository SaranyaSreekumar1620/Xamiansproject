import React, { useState } from "react";
import { db } from "../firebase/config";
import { Table } from "reactstrap";
import { BsTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { Navbar, NavbarBrand } from "reactstrap";
import "../sass/App.css";

function User() {
  const [info, setInfo] = useState([]);
  window.addEventListener("load", () => {
    Fetchdata();
  });
  const Fetchdata = () => {
    db.collection("user")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
        });
      });
  };
  return (
    <div>
      {info.map((data, i) => (
        <Frame
          key={i}
          id={data.id}
          username={data.username}
          email={data.email}
          point={data.point}
          phone={data.phone}
          level={data.level}
        />
      ))}
    </div>
  );
}
const Frame = ({ phone, username, id, email, level, point }) => {
  console.log(
    phone + " " + username + " " + id + " " + level + " " + point + " " + email
  );
  return (
    <div className="container-fluid ">
      <div className="container-box">
        <Table className="table-borderless">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONENUMBER</th>
              <th>CURRENT LEVEL</th>
              <th>POINT</th>
              <th>HISTORY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{id}</td>
              <td>{username}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{level}</td>
              <td>{point}</td>
              <td>
                <button type="button">
                  view
                </button>
              </td>
              <td>
                <AiFillEdit />
                &nbsp;&nbsp;
                <BsTrashFill />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default User;
