import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import NewRelease from "../NewRelease/NewRelease";

const NewReleases = () => {
    const [newReleases, setNewReleases] = useState([]);
    useEffect(()=>{
        fetch('./newReleases.json')
        .then(res => res.json())
        .then(data => setNewReleases(data))
    }, [])
  return (
    <div style={{ margin: "5%"}}>
      <h1 className="new-releases-header">New Releases</h1>
      <div>
        <Row xs={1} md={2} className="g-4">
           {
               newReleases.map((newRelease) => (
                   <NewRelease newRelease={newRelease} ></NewRelease>
               ) )
           }
        </Row>
      </div>
    </div>
  );
};

export default NewReleases;
