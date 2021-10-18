import React, { Component } from "react";

export default class HighScore extends Component {
	render() {
		if (this.props.overTen) {
			return (
				<h3>
					Beat highscore of 10
					<button onClick={(e) => this.props.onReset(e)}>Reset</button>
				</h3>
			);
		}
		return null;
	}
}
