import React, { Component } from "react";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Pages
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";

export default class App extends Component {
	render() {
		return (
			<Router>
				<PageWrapper>
					<Route exact={true} path="/" component={Home}></Route>
					<Route path="/about" component={About}></Route>
				</PageWrapper>
			</Router>
		);
	}
}
