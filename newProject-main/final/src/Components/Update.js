import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

function Update() {
  const { id } = useParams();
  const [housenumber, SetHousenumber] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [house, SetHouse] = useState([])
  const GetHouse = () => {
    Axios.get("http://localhost:3001/house/"+id,).then((response) => {
      SetHouse(response.data);
    });
  };
  const houseUpdate = () => {
    Axios.put("http://localhost:3001/update/"+id, {
      housenumber: housenumber,
      owner: owner,
      email: email,
      phone: phone,
      status: status,
    }).then();
  };
  const Setdat = ()=>{
    house.map((val,key)=>{
      setEmail(val.email)
      setOwner(val.owner)
      setStatus(val.status)
      setPhone(val.phone)
      SetHousenumber(val.housenumber)
    })
  }
  useEffect(() => {
    GetHouse();
    if(housenumber==""){
      Setdat();
    }
  });
  return (
    <div class="container-sm">
      <div class="container-sm">
      <form action="/">
        <div className="mb-3">
          <label className="form-label" htmlFor="name" >
            HouseNumber:
          </label>
          <input
            defaultValue={housenumber}
            type="text"
            className="form-control"
            placeholder="Enter house number"
            onChange={(event) => {
                SetHousenumber(event.target.value)  
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor=" Owner Name">
            Owner Name :
          </label>
          <input
            defaultValue={owner}
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
            defaultValue={email}
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
            defaultValue={phone}
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
            defaultValue={status}
            type="text"
            className="form-control"
            placeholder="Enter  Status"
            onChange={(event) => {
              setStatus(event.target.value)
            }}
          />
        </div>
        <button onClick={houseUpdate} class="btn btn-success">
          Edit House
        </button>
        <button onClick={Setdat} class="btn btn-danger">
          Edit House
        </button>
      </form>
      </div>
    </div>
  )
}

export default Update