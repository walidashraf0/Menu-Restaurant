import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ImgOne from "../assets/1.png";

const CardList = () => {
  return (
    <Row>
      <Col sm="12" className="mb-3">
        <Card style={{ backgroundColor: "#f8f8f8" }} className="d-flex flex-row">
          <Card.Img className="img-item" variant="top" src={ImgOne} />
          <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-center">
              <div className="item-title">وجبة فطار</div>
              <div className="item-price">50 جنية</div>
            </Card.Title>
            <Card.Text className="py-2">
              <div className="item-description">
                وصف وجبة الافطار: بيض مقلي مع خبز محمص وشرائح طماطم وخيار.
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CardList;
