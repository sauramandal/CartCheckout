import React, { Component } from 'react';
import { Button, Collapse, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    const {price} = this.props;
    console.log('price', price);
    return (
      <div>
        <Button
          className="item-details-button"
          bsstyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details{" "}
          {this.state.open === false ? `+` : `-`}
        </Button>
        {this.state.open && (
          <div>
            <Row>
              <Col md={4}>
                <img
                width={100}
                height={100}
                src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                alt="thumbnail"
                />
              </Col>  
              <Col md={4}>
                <p>
                Essentials by OFM ESS-3085 Racing Style Leather Gaming
                Chair, Red
                </p>
                <strong>{`$${this.props.price}`}</strong><br/>
                <strong className="price-strike">{`$${this.props.price}`}</strong>
              </Col>
              <Col md={4}>
                <strong>Qty: 1</strong>
              </Col>
            </Row>
          </div>
        )}
      </div>
    );
  }
}
