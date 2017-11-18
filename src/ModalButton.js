import React, { Component } from "react";
import Modal from "./Modal";
import "./ModalButton.css";
class ModalButton extends Component {

  state = {	isModalShow: false };

  constructor(props) {
		super(props);
		this.state = {
			isModalShow: false
		};
	}

	hideModal = () => {	this.setState({ isModalShow: false })};
  
  showModal = () => {	this.setState({ isModalShow: true })};
  
	handleClick = () => {	this.setState({ isModalShow: !this.state.isModalShow })};
  
  render() {
		return (
			<div>
				<button onClick={this.handleClick}>Открыть модалку</button>
        
        {this.state.isModalShow ? (
          
          <Modal>
						<div className="modal">
							<div className="modal__fog">
								<div className="modal__body">
									<h1>Супер модалка</h1>
									<button onClick={this.handleClick}>
										Закрыть модалку
									</button>
								</div>
							</div>
						</div>
          </Modal>
          
        ) : null}
        
			</div>
		);
	}
}
export default ModalButton;

