import React from 'react';
import {Component} from 'react';

class CardNumberInput extends Component {

  state = {number: ''};

	constructor(props) {
		super(props);
		const { cardNumber } = this.props;
		this.state = { number: this.format(cardNumber) };
	}

  format = (number) => {
		if (number) {
			var str = Number.isInteger(number) ? String(number) : number;
			return Array.from(str).map((c, n) => {	return n % 4 || 0 === n ? c : " " + c;}).join("");
		} else {return ''}
  };
  
  componentWillReceiveProps(nextProps) {
    const { cardNumber } = nextProps;
    this.setState( {number: this.format(cardNumber)} );

  }; 

  normalize = (number) => number.replace(/\s+/g, "");

  handleChange = (e) => {
    this.props.onChange(this.normalize(e.target.value));
    // console.log(e.target.value);
	};




  render() {
    return (
			<input
        name = "number"
        value = { this.state.number }
        onChange = { this.handleChange }
      />
    );
  }
}

export default CardNumberInput;
