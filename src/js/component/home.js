import React from "react";

//include images into your bundle
import { Navbar } from "./navbar"; // aca lo que hafo es cargar el Navbar
//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
		</div>
	);
}
