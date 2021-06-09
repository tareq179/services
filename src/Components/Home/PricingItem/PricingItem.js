import React from "react";
import { Tab, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import carImg from "../../../images/car-img.png";

const PricingItem = ({ packData: { title, price, description }, id }) => {
  return (
    <Tab.Pane eventKey={id + 1}>
      <Row>
        <Col lg={12} md={12} xs={12}>
          <div className={`pricing-img-${id + 1}`}>
            <div className={`pricing-text-${id + 1}`}>
              <span>
                <small>$</small>
                {price}
              </span>
              <h4>
                <Link to="/">{title}</Link>
              </h4>
              <p>{description.slice(0, 94)}</p>
            </div>
            <img src={carImg} alt="carImg" />
          </div>
        </Col>
      </Row>
    </Tab.Pane>
  );
};

export default PricingItem;