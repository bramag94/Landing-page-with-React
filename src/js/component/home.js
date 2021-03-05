import React from "react";

//include images into your bundle
import { Navbar } from "./navbar"; // aca lo que hafo es cargar el Navbar
import { Jumbotron } from "./jumbotrom"; //aca lo que hafo es cargar el Cards
import { Cards } from "./cards";
import { Footer } from "./footer";
//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<div className="p-3 mb-2 text-white bg-gradient-dark">
				<Navbar />
			</div>
			<br></br>
			<div className="container">
				<div className="container">
					<Jumbotron />
				</div>
				<br></br>
				<div className="container">
					<Cards />
				</div>
			</div>

			<Footer />
		</div>
	);
}
