import React from "react";
import { Col, Row } from "react-bootstrap";

const Category = () => {
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <div>
          <button style={{ border: "1px solid #b45b35" }} className="btn mx-2">
            الكل
          </button>
          <button style={{ border: "1px solid #b45b35" }} className="btn mx-2">
            فطار
          </button>
          <button style={{ border: "1px solid #b45b35" }} className="btn mx-2">
            غداء
          </button>
          <button style={{ border: "1px solid #b45b35" }} className="btn mx-2">
            عشاء
          </button>
        </div>
      </Col>
    </Row>
  );
};

export default Category;
