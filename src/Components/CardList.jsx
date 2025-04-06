import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const CardList = ({ itemsData }) => {
  return (
    <Row>
      {itemsData.length ? (
        itemsData.map((item) => (
          <Col key={item.id} sm="12" className="mb-3">
            <Card
              style={{ backgroundColor: "#f8f8f8" }}
              className="d-flex flex-row"
            >
              <Card.Img className="img-item" variant="top" src={item.image} />
              <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-center">
                  <div className="item-title">{item.name}</div>
                  <div className="item-price">{item.price} جنية</div>
                </Card.Title>
                <Card.Text className="py-2">
                  <span className="item-description">{item.description}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <h3>لا توجد عناصر لعرضها</h3>
      )}
    </Row>
  );
};

export default CardList;
