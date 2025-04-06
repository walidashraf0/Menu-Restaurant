import React from "react";
import { Col, Row } from "react-bootstrap";
import Slide from "react-reveal/Slide";

const Category = ({ filtering, allCategory }) => {
  const onFilter = (varaity) => {
    filtering(varaity);
  };

  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <div>
          <Slide left>
            {allCategory.length ? (
              allCategory.map((cat, key) => (
                <button
                  key={key}
                  onClick={() => onFilter(cat)}
                  style={{ border: "1px solid #b45b35" }}
                  className="btn mx-2"
                >
                  {cat}
                </button>
              ))
            ) : (
              <h2>لا توجد تصنيفات</h2>
            )}
          </Slide>
        </div>
      </Col>
    </Row>
  );
};

export default Category;
