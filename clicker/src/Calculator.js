import React, { Component } from "react";

export default class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			storedValues: [],
			operation: "_",
			isEqualClicked: false,
			isComma: false,
		};
	}

	handleClickValue = (e) => {
		if (e === "=") {
			this.setState({ isEqualClicked: true });
			this.operationController(this.state.value);
		} else if (e !== "=") {
			this.setState({
				value: this.state.value.toString() + e,
			});
		}
		//if (this.state.storedValues.length < 0) this.setState({ operation: "_" });

		console.log(this.state.value);
	};

	handleClickOperation = (e) => {
		if (e === "XXX") this.setState({ value: "" });
		if (e !== "XXX" && (e !== "," && this.state.storedValues.length) === 0) {
			this.setState({
				storedValues: [...this.state.storedValues, this.state.value],
				value: "",
			});
		}
		if (e === ",") {
			if (!this.state.isComma) {
				this.setState({
					value: this.state.value.toString() + ".",
					isComma: true,
				});
			}
		}

		//if (!this.state.value === 0 || !this.state.storedValues.length === 0) {
		if (e === "+") this.setState({ operation: "+" });
		if (e === "-") this.setState({ operation: "-" });
		if (e === "X") this.setState({ operation: "X" });
		if (e === "/") this.setState({ operation: "/" });
		//}
	};

	operationController = (e) => {
		if (this.state.operation === "+" && this.state.storedValues.length > 0) {
			this.setState({
				value: parseFloat(this.state.storedValues.pop()) + parseFloat(e),
				operation: "_",
				isEqualClicked: false,
			});
		}
		if (this.state.operation === "-" && this.state.storedValues.length > 0) {
			this.setState({
				value: parseFloat(this.state.storedValues.pop()) - parseFloat(e),
				operation: "_",
				isEqualClicked: false,
			});
		}
		if (this.state.operation === "X" && this.state.storedValues.length > 0) {
			this.setState({
				value: parseFloat(this.state.storedValues.pop()) * parseFloat(e),
				operation: "_",
				isEqualClicked: false,
			});
		}
		if (this.state.operation === "/" && this.state.storedValues.length > 0) {
			this.setState({
				value: parseFloat(this.state.storedValues.pop()) / parseFloat(e),
				operation: "_",
				isEqualClicked: false,
			});
		}
		this.setState({ isComma: false });
	};

	render() {
		let { value } = this.state;
		let { storedValues } = this.state;
		let { operation } = this.state;

		return (
			<div>
				<h4>
					{storedValues} , operation: {operation}
				</h4>
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
					<button onClick={() => this.handleClickOperation("/")}>/</button>
					<button onClick={() => this.handleClickValue(0)}>0</button>
					<button onClick={() => this.handleClickOperation(",")}>,</button>
					<button onClick={() => this.handleClickValue("=")}>=</button>
				</div>
			</div>
		);
	}
}
