import React from 'react'
import { useState, useEffect } from "react";
import Axios from "axios";
function Home() {
  const [house, SetHouse] = useState([])
  const GetHouse = () => {
    Axios.get("http://localhost:3001/house").then((response) => {
      SetHouse(response.data);
    });
  };
  useEffect(() => {
    GetHouse();
  });
  const UpdateHouse = id => {
    window.location = '/update/'+id
  }
  const deleteHouse = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then();
  };
  return (
    <div class="container-sm">
      {house.map((val, key) => {
        return (
          <div class="container-sm">
            <div className="card mt-5 ">
              <div className="card-body text-left">
                <p className="card-text">housenumber: {val.housenumber}  owner: {val.owner} </p>
                <p className="card-text">email: {val.email} phone: {val.phone}</p>
                <p className="card-text">status: {val.status}</p>
                </div>
                <div class="d-grid gap-2 d-md-block justify-content-md-end ">
                <button class="btn btn-warning" onClick={() => UpdateHouse(val.id)}>Edit</button>
                <button class="btn btn-danger " onClick={() => deleteHouse(val.id)}>Delete</button>
                </div>
              </div>
            </div>
            );
      })}
          </div>
        )
      }

export default Home
