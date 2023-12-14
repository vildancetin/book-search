import { Container, Form, Row, Col } from "react-bootstrap";
import "./Books.scss";

import { Header } from "../header/Header";
import BookCard from "./BookCard";
import { books } from "../../helper/data";
import { useState } from "react";

const BooksList = () => {
  const [author, setAuthor] = useState("");
  const [bookName, setBookName] = useState("");
  const filteredByAuthor=books.filter((book) => book.author === author);
  return (
    <>
      <Header setAuthor={setAuthor} />
      <Form.Control
        placeholder="Search Book..."
        type="search"
        className="w-50 m-auto"
        onChange={(e) => setBookName(e.target.value)}
      />
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {(author ? filteredByAuthor : books)
          .filter((name)=>name.title.toLowerCase().includes(bookName.toLowerCase()))
          .map((book) => (
              <Col key={book.id}>
                <BookCard {...book} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default BooksList;
