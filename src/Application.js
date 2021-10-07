import React, { Component } from "react";
import HighScore from "./HighScore";
import "./css/style.css";

class Application extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			overTen: false,
		};
	}

	handleClick = () => {
		this.setState({ count: this.state.count + 1 });
	};

	//triggered on changes
	componentDidUpdate(props, state) {
		console.log("Updated from", state, "to", this.state);

		if (
			this.state.count > 10 &&
			this.state.count !== state.count &&
			!this.state.overTen
		) {
			this.setState({ overTen: true });
		}
	}

	resetCount = (e) => {
		this.setState({
			count: 0,
			overTen: false,
		});
	};

	render() {
		let { count } = this.state;
		let name = "Nick";

		return (
			<div>
				<h1>
					Hello {name} you clicked button {count} times
				</h1>
				<HighScore
					overTen={this.state.overTen}
					onReset={(e) => this.resetCount(e)}
				></HighScore>

				<span>
					<button onClick={(e) => this.handleClick(e)}>ClickMe</button>
				</span>
			</div>
		);
	}
}

export default Application;
