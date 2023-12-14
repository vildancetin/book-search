import React, { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import "./Header.scss";
import {authors} from "../../helper/data"

export const Header = ({setAuthor}) => {


  return (
    <Container className="header">
      <h1>Books List</h1>
      <Stack
        direction="vertical"
        gap={3}
        className="btns justify-content-center flex-md-row"
      >
        {authors.map((item,index)=>(
          <button onClick={()=>{setAuthor(item)}} key={index}>{item}</button>
        ))}
      </Stack>
    </Container>
  );
};
