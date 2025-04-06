import React from "react";
import { Col, Row } from "react-bootstrap";

const Category = ({ filtering }) => {
  const onFilter = (varaity) => {
    filtering(varaity);
  };

  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <div>
          <button
            onClick={() => onFilter("الكل")}
            style={{ border: "1px solid #b45b35" }}
            className="btn mx-2"
          >
            الكل
          </button>
          <button
            onClick={() => onFilter("فطار")}
            style={{ border: "1px solid #b45b35" }}
            className="btn mx-2"
          >
            فطار
          </button>
          <button
            onClick={() => onFilter("غداء")}
            style={{ border: "1px solid #b45b35" }}
            className="btn mx-2"
          >
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
