import React from "react";

export function Jumbotron() {
	return (
		<div classNames="jumbotron">
			<h1 classNames="display-4">Hello, world!</h1>
			<p classNames="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<hr classNames="my-4" />
			<p>
				It uses utility classNameses for typography and spacing to space
				content out within the larger container.
			</p>
			<a classNames="btn btn-primary btn-lg" href="#" role="button">
				Learn more
			</a>
		</div>
	);
}
