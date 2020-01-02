import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 100,
      pickupSavings: -385,
      taxes: 0,
      estimatedTotal: 0,
    }
  }
  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
        </Container>
      </div>
    );
  }
}

export default App;
