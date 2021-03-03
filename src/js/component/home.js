import React from "react";

//include images into your bundle
import { Navbar } from "./navbar"; // aca lo que hafo es cargar el Navbar
import { Jumbotron } from "./jumbotrom"; //aca lo que hafo es cargar el Cards
import { Cards } from "./cards";
//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<Jumbotron />
			<Cards />
		</div>
	);
}
