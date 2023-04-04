import React from 'react'
import { useState } from "react";
import Axios from "axios";

function Blog() {
  const [housenumber, SetHouse] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const addHouse = () => {
    Axios.post("http://localhost:3001/create", {
      housenumber: housenumber,
      owner: owner,
      email: email,
      phone: phone,
      status: status,
    }).then();
  };
  return (
    <div class="container-sm">
      <form action="/">
        <div className="mb-3">
          <label className="form-label" htmlFor="name" >
            HouseNumber:
          </label>
          <input
            value={housenumber}
            type="text"
            className="form-control"
            placeholder="Enter house number"
            onChange={(event) => {
              SetHouse(event.target.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor=" Owner Name">
            Owner Name :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Owner Name"
            onChange={(event) => {
              setOwner(event.target.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor=" email">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor=" phone">
            Phone Number:
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Phone Number"
            onChange={(event) => {
              setPhone(event.target.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="status">
            Status:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter  Status"
            onChange={(event) => {
              setStatus(event.target.value)
            }}
          />
        </div>
        <button onClick={addHouse} class="btn btn-success">
          Add House
        </button>
      </form>

    </div>
  )
}

export default Blog