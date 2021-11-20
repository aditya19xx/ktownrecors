import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const NewRelease = (props) => {
    const {song, artists, img, music, spotify, youtube} = props.newRelease;
    return (
        <div style={{ marginTop: "5%"}}>
            
      <Card>
        <Card.Img style={{width: '100%', height: '30%'}} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{song}</Card.Title>
          <Card.Text>
            <h6>Artists: {artists}</h6>
            <h6>Music: {music}</h6>
          </Card.Text>
           <Button href={spotify} target="_blank" variant="outline-success">Spotify</Button>{' '}
           <Button href={youtube} target="_blank" variant="outline-danger">Youtube</Button>{' '}
        </Card.Body>
      </Card>
    
        </div>
    );
};

export default NewRelease;