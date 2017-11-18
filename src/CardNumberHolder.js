import React from "react";
import {Component} from 'react';
import CardNumberInput from "./CardNumberInput";

class CardNumberHolder extends Component {
  
	constructor(props) {
		super(props);
		this.state = { cardNumber: ''	};
  };
  
  handleChange = (value) => {	this.setState({ cardNumber: value })};
  
	render() {
		return (
			<CardNumberInput
        cardNumber={this.state.cardNumber}
        onChange={this.handleChange}
			/>
		);
	}
}

export default CardNumberHolder;
