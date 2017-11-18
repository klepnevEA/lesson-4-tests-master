import React from "react";
import {Component} from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedChild: 0 };
  };

	handleChangeChild = (e) => {
		const id = e.target.getAttribute("data-id");

		this.setState({ selectedChild: Number(id) });
	};
	render() {
		return (

			<div>
				<nav>
          
          <ul className="component-list">
						{this.props.children.map((child, i) => (
              
              <li
                data-id={i}
                key={i}
								className="component-list__name"
								onClick={this.handleChangeChild}>
								{child.type.displayName || child.type.name}
              </li>
              
						))}
          </ul>
          
				</nav>
				<div className="component-wrapper">
					{this.props.children[this.state.selectedChild]}
				</div>
      </div>
      
		);
	}
}

export default Switcher;
