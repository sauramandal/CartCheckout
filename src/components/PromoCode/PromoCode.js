import React, { Component } from 'react';
import {
    Button,
    Collapse,
    Form,
    Row,
    Col,
    FormGroup,
    FormLabel,
    ControlLabel,
    Container,
    FormControl
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleChange } from '../../actions/promoCodeActions';
class PromoCodeDiscount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: ''
        };
    }

    handleChange = e => {
        this.props.handleChange(e);
    };

    render() {
        const {open} = this.state;
        return (
            <div>
                <Button
                 className="promo-code-button"
                 bsstyle="link"
                 onClick={() => this.setState({ open: !this.state.open })}
                >
                    {open === false ? `Apply ` : `Hide `}
                    promo code {open === false ? `+` : `-`}
                </Button>
                <Collapse in={open}>
                    <div className="well">
                    <Row className="show-grid">
                        <Col md={12}>
                            <Form>
                                <FormGroup controlId="formInlineName">
                                    <FormLabel>Promo Code</FormLabel>
                                    <FormControl
                                     type="text"
                                     placeholder="Enter promo code"
                                     value={this.props.promoCode}
                                     onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <Button
                                    block
                                    bsstyle="success"
                                    className="btn-round"
                                    disabled={this.props.isDisabled}
                                    onClick={this.props.giveDiscount}
                                >Apply
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                    </div>
                </Collapse>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
});

export default connect(mapStateToProps, { handleChange })(PromoCodeDiscount);