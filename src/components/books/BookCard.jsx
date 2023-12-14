import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";

const BookCard = ({title,author,description,image}) => {
  const [fav,setFfav]=useState(false)
  return (
    <Card className="rounded-2 m-auto card" role="button">
      <Card.Header className="d-flex justify-content-between ">
        <div>
        <Card.Title>{title}</Card.Title>
        </div>
        <MdFavorite size={30} onClick={()=>setFfav(!fav)}className={fav?"text-danger" : ""}/>
      </Card.Header>
      <Card.Img variant="top" src={image} className="player-logo" />
      <Card.Footer className="card__over">
        <Card.Title>{description}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default BookCard;
