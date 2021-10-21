import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../../assets/img/header-bg.jpg";
export default class Home extends Component {
	render() {
		return (
			<div>
				<Header
					title="Welcome to our Studio"
					subtitle="Nice to meet you"
					buttonText="Tell me more"
					link="/services"
					showButton={true}
					image={image}
				/>
			</div>
		);
	}
}
