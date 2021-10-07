import React, { Component } from "react";

export default class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			storedValues: [],
			operation: "_",
		};
	}

	handleClickValue = (e) => {
		//if (this.state.value === "0") {

		this.setState({
			value: this.state.value.toString() + e,
			//storedValues: [...this.state.storedValues, e],
		});

		//}
		console.log(this.state.value);
		if (this.state.operation === "+" && this.state.storedValues.length > 0) {
			// this.setState({ value: this.state.storedValues.pop + e });
			this.setState({
				value: parseInt(this.state.storedValues.pop()) + parseInt(e),
				operation: "_",
			});
		}
		if (this.state.operation === "-" && this.state.storedValues.length > 0) {
			// this.setState({ value: this.state.storedValues.pop + e });
			this.setState({
				value: parseInt(this.state.storedValues.pop()) - parseInt(e),
				operation: "_",
			});
		}

		// console.log(
		// 	this.state.value,
		// 	this.state.storedValues,
		// 	this.state.operation
		// );
	};

	handleClickOperation = (e) => {
		if (e === "XXX") this.setState({ value: "" });
		if (e !== "XXX") {
			this.setState({
				storedValues: [...this.state.storedValues, this.state.value],
			});
		}
		if (e === "+") this.setState({ operation: "+" });
		if (e === "-") this.setState({ operation: "-" });
	};

	render() {
		let { value } = this.state;

		return (
			<div>
				<h3>: {value}</h3>
				<div>
					<button>%</button>
					<button>CE</button>
					<button>C</button>
					<button onClick={() => this.handleClickOperation("XXX")}>XXX</button>
				</div>

				<div>
					<button onClick={() => this.handleClickValue(7)}>7</button>
					<button onClick={() => this.handleClickValue(8)}>8</button>
					<button onClick={() => this.handleClickValue(9)}>9</button>
					<button onClick={() => this.handleClickOperation("X")}>X</button>
				</div>

				<div>
					<button onClick={() => this.handleClickValue(4)}>4</button>
					<button onClick={() => this.handleClickValue(5)}>5</button>
					<button onClick={() => this.handleClickValue(6)}>6</button>
					<button onClick={() => this.handleClickOperation("-")}>-</button>
				</div>

				<div>
					<button onClick={() => this.handleClickValue(1)}>1</button>
					<button onClick={() => this.handleClickValue(2)}>2</button>
					<button onClick={() => this.handleClickValue(3)}>3</button>
					<button onClick={() => this.handleClickOperation("+")}>+</button>
				</div>
				<div>
					<button>//</button>
					<button onClick={() => this.handleClickValue(0)}>0</button>
					<button onClick={() => this.handleClickOperation(",")}>,</button>
					<button onClick={() => this.handleClickOperation("=")}>=</button>
				</div>
			</div>
		);
	}
}
