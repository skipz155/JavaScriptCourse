import React, { Component } from "react";
import Home from "./components/Pages/Home";
import PageWrapper from "./components/PageWrapper";

export default class App extends Component {
	render() {
		return (
			<PageWrapper>
				<Home />
			</PageWrapper>
		);
	}
}
